#!/bin/bash
# enforces vuepress front matter without polluting 'source' readme.md
SPACE=' '
echo -e "---\nhome:${SPACE}true\nsidebar:${SPACE}true\n---" > index.md
cat readme.md >> index.md
