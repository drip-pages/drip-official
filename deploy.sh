#!/bin/bash -eu

TODAY=$(date "+%Y%m%d-%H%M%S")
yarn build
git checkout gh-pages
git checkout -b gh-pages-${TODAY}
ls -a | grep -v -E '^build|^CNAME|^pp.txt|^.gitignore|^.git|^\.\.|^\.$' | xargs rm -rf
mv build/* ./
rm -d build
git add .
git commit -m 'yarn:deploy'
git push --set-upstream origin gh-pages-${TODAY}
