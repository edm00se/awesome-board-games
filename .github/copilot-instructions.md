# Copilot Instructions for awesome-board-games

This is a curated list of board games hosted on GitHub Pages via VitePress. It's a static site generated from markdown formatted in the `readme.md` root file, organized by category (Family, Strategy, Party) with Wikipedia/BoardGameGeek links and thumbnail images.

## Build Commands

- **Development**: `npm run dev` - Runs VitePress dev server
- **Build production site**: `npm run build` - Builds the static site for deployment
- **Lint code**: `npm run lint` - Runs awesome-lint on markdown formatting
- **Lint markdown**: `npm run lint-md` - Runs remark with `--frail` flag to validate markdown syntax and links
- **Format markdown**: `npm run format` - Runs prettier on `readme.md`

## Pre-prod Build Steps

Before production builds, two additional steps run:
1. `.pre-prod-build.sh` - Makes build scripts executable
2. `.post-prod-build.sh` - Runs cleanup after production build

The Vercel deployment script (`vercel-build`) runs `pre-prod-build`, then `rm:readme`, then `build`, then `post-prod-build`.

## Architecture Overview

1. **Monorepo structure**: Single `readme.md` file acts as the entire site content, organized using markdown section headers
2. **Category organization**: Games are grouped under category headers (Family, Strategy, Party) in the main README
3. **VitePress rendering**: The static markdown is transformed by VitePress for fast page navigation and search
4. **Static output**: Production builds generate a static HTML site deployable to GitHub Pages or other static hosts

## Markdown Conventions

### Adding Games (in readme.md)

- Use `### [Title](url)` format for game headers with links (prefer Wikipedia or BoardGameGeek)
- Use quote block (`>`) for brief descriptions of the game
- Include thumbnail image: `![Image]` using Wikimedia URL, target size ~220px x 250px
- Use pipe table for statistics: Players, Min. Age, and estimated time

### Formatting Rules

- Title case using AP style; special characters discouraged (no exclamation points or question marks)
- Link sources to Wikipedia.org/wiki/ or boardgamegeek.com/boardgame/[id]
- Ensure image links resolve correctly and use HTTPS where available
- Validate all URLs with remark plugins (`remark-validate-links`, `remark-lint-no-dead-urls`)

### Code Block Format

```markdown
### [Game Name](https://source.url/game.html)

> Brief game description here.

![Game image](https://image.source/img.jpg)

| Players | Min. Age | Time    |
| ------: | -------: | -----: |
| 2 - 5 |      8 | 30-60m |
```

## Linting Rules

1. **awesome-lint**: Validates overall markdown structure, heading hierarchy, and link references
2. **remark --frail**: Validates all markdown syntax; flags errors immediately
3. **link validation**: All external links must resolve or be in skipUrlPatterns list
4. **Anchor allowlist**: Specific anchor URLs are allowed for linking to this repo's documentation

## Workflow Guidelines

- Submit changes via Pull Request with useful title (avoid "Update readme.md")
- Keep one game addition per PR
- Follow the exact formatting guide in `formatting.md`
- Automated checks run: Awesome-Lint, Limit-PRs (enforces PR count limits), and Janet (community moderation)
- Reviewer limit during Hacktoberfest: max 5 active PRs total, no more than 2 open simultaneously

## Common Tasks

1. **Add new game**: Edit `readme.md` with proper markdown format above category header
2. **Update existing entry**: Replace the entire game block while maintaining formatting
3. **Fix broken links**: Update URLs to valid Wikipedia or BoardGameGeek pages
4. **Reformat markdown**: Run `npm run format` to auto-format markdown; manual fixes may be needed for quote blocks
