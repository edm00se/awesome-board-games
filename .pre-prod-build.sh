#!/bin/bash
# enforces vuepress front matter without polluting 'source' readme.md
mv readme.md alt.md
SPACE=' '
echo -e "---\nhome:${SPACE}true\nsidebar:${SPACE}true\n---" > readme.md
cat alt.md >> readme.md
rm alt.md

