#!/bin/bash -eu

TODAY=$(date "+%Y%m%d-%H%M%S")
echo ' ===== yarn install & yarn build ===== '
yarn install
yarn build
echo ' ===== Crate tmp directory ===== '
mkdir tmp-${TODAY}
cd tmp-${TODAY}
echo ' ===== git clone -b gh-pages ===== '
git clone -b gh-pages https://github.com/drip-pages/drip-official.git
cd drip-official
echo ' ===== git checkout -b gh-pages-${TODAY} ===== '
git checkout -b gh-pages-${TODAY}
ls -a | grep -v -E '^build|^CNAME|^pp.txt|^.gitignore|^.git|^\.\.|^\.$' | xargs rm -rf
mv ../../build/* ./
echo ' ===== git add & commit & push ===== '
git add .
git commit -m 'yarn:deploy'
git push --set-upstream origin gh-pages-${TODAY}
cd ../../
rm -rdf tmp-${TODAY}
echo ' ===== end ===== '
