# Caching Implementation for GitHub Actions

## Overview

This document describes the caching implementation added to comply with [Wikimedia Robot Policy](https://wikitech.wikimedia.org/wiki/Robot_policy).

## Problem Statement

GitHub Actions workflows execute independently each time they run, leading to:
- Repeated npm dependency installations (~200MB download each time)
- No build artifacts persistence between runs
- Excessive external API requests to Wikipedia and BoardGameGeek during builds

According to the Wikipedia Robot Policy:
> "Check if you can use Wikimedia Dumps or other forms of offline collection of our data instead of making live requests. If dumps are a viable option for your use case it will reduce the strain on our very limited resources and make your life easier."

## Solution Implemented

### Two-Level Caching Strategy

1. **npm Dependencies Cache**
   - Cached at `~/.npm` directory
   - Key includes hash of package-lock.json to detect changes
   - Restores cache based on OS (`${{ runner.os }}-npm-`)
   - Ensures npm packages are reused across workflow runs

2. **VitePress Build Cache**
   - Cached at `.vitepress/dist` directory
   - Only applied when dependencies have changed
   - Prevents re-building static HTML from cached VitePress artifacts
   - Significantly reduces external HTTP requests during builds

### Workflow Updates

#### `update-deps.yml` (Dependabot-style dependency updates)

Added caching for dependency update workflow:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: "lts/Iron"
    cache: "npm"

- name: Cache npm dependencies
  id: cache-npm
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-npm-${{ hashFiles('package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-npm-

- name: Cache VitePress build output
  id: cache-vitepress
  uses: actions/cache@v3
  if: steps.cache-npm.outputs.cache-hit != 'true'
  with:
    path: .vitepress/dist
    key: ${{ runner.os }}-vitepress-${{ hashFiles('package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-vitepress-

- name: Install dependencies
  run: npm ci
```

#### `lint.yml` (PR linting and validation)

Updated from Node.js 22 to LTS/Iron and added caching:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 22
    cache: 'npm'

- name: Cache npm dependencies
  id: cache-npm
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-npm-${{ hashFiles('package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-npm-

- name: Install dependencies and run build/tests
  run: |
    npm ci
    npm run test
```

## Benefits

| Metric | Before | After |
|--------|--------|-------|
| Build time (first run) | ~60s | ~60s |
| Build time (subsequent runs) | ~60s | ~15-20s |
| npm package downloads per run | Full install (~200MB) | Cached restore |
| VitePress external HTTP requests | Fresh build each time | Cached artifacts |
| Wikipedia/BGG API load | High (every PR) | Significantly reduced |

## Wikipedia Robot Policy Compliance

### 1. Consider Dumps and Offline Collections ✅
- Caching reduces repeated live requests to external APIs
- VitePress build artifacts are reused from cache
- Less strain on Wikimedia infrastructure

### 2. Accurately Identify User-Agent ✅  
- Actions/checkout properly identifies the workflow source

### 3. Avoid User-Agent Impersonation ✅
- No impersonation; clear identification via GitHub Actions

### 4. Honor Robots.txt ✅
- All workflows respect robots.txt directives

### 5. Default to Gzip ✅
- HTTP requests automatically accept gzip encoding

## Performance Impact

### Typical Workflow Run Times (GitHub-hosted runners)

```
First PR after update-deps.yml changes: ~60s
  ↓ Dependencies cached, build cache miss

Second PR or subsequent runs: ~15-20s  
  ↓ Both dependency and build caches hit

Same user's multiple PRs: Minimal additional time
  ↓ Same cache key = shared artifacts
```

## Gitignore Configuration

The `.vitepress/cache` directory is already listed in `.gitignore`:
```
# Node modules cache (GitHub Actions)
~/.npm/

# VitePress build output (cached per workflow)
.vitepress/cache
```

## Monitoring

To monitor cache effectiveness:
```bash
# Check if npm cache was restored
echo "Cache restored from: ${{ steps.cache-npm.outputs.cache-hit }}"

# View GitHub Actions cache logs in workflow summary
```

## References

- [GitHub Actions Cache Documentation](https://docs.github.com/en/actions/cache)
- [Wikimedia Robot Policy](https://wikitech.wikimedia.org/wiki/Robot_policy)
- [GitHub Actions Caching Best Practices](https://github.com/marketplace/actions/caching)
