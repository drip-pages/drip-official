DRIP Official Page
=
このリポジトリはDripオフィシャルページ用リポジトリです。
# 概要
このリポジトリ内には2つのプロダクトが入っています。
* オフィシャルページを出力するためのファイル群（masterブランチ）
* オフィシャルページとして表示したいファイル群（gh-pagesブランチ）

基本的にはmasterブランチにあるプログラムを用いて生成したファイルをgh-pagesブランチにデプロイしていきます。

gh-pages以下のファイルはオフィシャルページとして公開されています。
https://drip.drecom.co.jp/

# 開発
## 環境
* node >= v10.16.0
* npm  >= v6.0.0
* yarn >= v1.16.0

## 準備
プロジェクトのクローンからビルドまでの実行手順
```bash
$ git clone https://github.com/drip-pages/drip-official.git
$ cd drip-official
$ yarn install --pure-lockfile
$ yarn build
```

もし、どのように表示されるか見たい場合は、
`$ yarn start`を叩いてください。

## ニュース欄追加・変更
以下のファイルを編集することでニュース欄の追加・変更が可能です。

`src/data/newsItem.json`
上から順に追記していってください。

例:
```json
{
    "day": "2019/04/24",
    "title": "AROW",
    "message": "AROW Developer Meetup Vol.2 を開催しました！",
    "link": "https://arow-3dmap.connpass.com/event/127377/"
}
```
上から日付、タイトル、表示したい文、表示したい文をクリックした時のリンク先です。

ニュースにリンクを貼りたくない場合は、"link"の行を削除してください。

例:
```json
{
    "day": "2019/04/24",
    "title": "AROW",
    "message": "AROW Developer Meetup Vol.2 を開催しました！"
}
```
※ カンマ（','）に気をつけて追記

## 文の追加方法（日本語と英語の両方に対応するようにするとき）
ドリップページ内で日本語と英語の両方に対応する文を追加するには、以下の手順で追加します。
`src/data/language`にある、ja.jsonとen.jsonを開きます。

このファイルは一意のキーと値がリストになっているjsonファイルです。
ここに適当なキーと追加したい文章を追記します。

例えば、「これは新しいプロダクトです。」という文を追加します。
ja.jsonファイルに
```json
{
  "newProductContent_1": "これは新しいプロダクトです。"
}
```
en.jsonファイルに
```json
{
  "newProductContent_1": "This is new Product."
}
```
と追加します。

その後、表示したい場所で次の方法で追加します。
```js
import * as React from 'react'
import { useTranslation } from 'react-i18next'

const example = () => {
    const { t } = useTranslation()
    return (
      <p>{t('newProductContent_1')}</p>
    )
}

export default example()
```
実例として`src/components/TopLogo/index.tsx`を見るとわかりやすいと思います。
この方法以外にもHOCを使った方法などがあります。
詳細はdocument参照のこと（https://react.i18next.com/guides/quick-start）

## Our Inventionの追加方法
Our Inventionのところにプロダクトを追加する方法

`src/components/OurInvention/index.tsx`にある`return`に追加していきます。

例えば以下のように追加します。

```html
<Invention
  className="new-product"
  bigLogo={productBigLogo}
  smallLogo={productSmallLogo}
>
  　<!-- プロダクトで表示したい内容をここに書く -->
</Invention>
```
`className`は他のプロダクトと名前が被らなければ任意に決めて大丈夫です。
`bigLogo`にはPC画面サイズの時に左側に表示されている大きめのロゴを設定します。
`smallLogo`にはPC画面サイズの時に右側に表示されている小さめのロゴを設定します。

表示する文章は日本語と英語の両方に対応させたいため、「文の追加方法」の手順を踏んで文を追加します。

仮にja.json、en.jsonに書いたキーを"newProductContent_1"とすると、次のようになります。
```html
<Invention
  className="new-product"
  bigLogo={productBigLogo}
  smallLogo={productSmallLogo}
>
  <p>{t('newProductContent_1')}</p>
</Invention>
```

さらにURLを追加する場合、次のようになります。
```html
<Invention
  className="new-product"
  bigLogo={productBigLogo}
  smallLogo={productSmallLogo}
>
  <p>{t('newProductContent_1')}</p>
  <a href="https://sample.com" target="_blank" rel="noopener noreferrer">
    https://sample.com/
  </a>
</Invention>
```

## Teamの追加方法
Teamにメンバーを追加するには、`src/components/Team/index.tsx`の`return`に追加します。

例えば以下のように追加します。

```html
<Member
  className="member-icon"
  imgFile={newMemberImage}
  movieFile={newMemberMovie}
  name="Engineer"
/>
```
`className`には`member-icon`を設定してください。
`imgFile`には追加するメンバーの画像を設定してください。
`movieFile`にはマウスオーバーしている時に表示されるアニメーション画像（.pngまたは.gifアニメーションファイル）を設定してください。
`name`にはメンバー画像の下に表示される文字列を指定してください。

## ディレクトリ構成
src  
├── components  // 主に部品として使うコンポーネント  
│   └── [any component]  
│      ├── index.tsx  // コンポーネント本体  
│      └── [any component].scss // 専用scss    
├── data  // プロジェクトで利用するデータ  
│   └── language  // 日本語と英語の対の翻訳ファイル保存ディレクトリ  
├── img  // プロジェクトで利用する画像ファイル  
├── pages  // ページを表すコンポーネント  
│   └── [any component]  
│      ├── index.tsx  // コンポーネント本体  
│      └── [any component].scss // 専用scss    
└── utils  // ts、scssに限らずインポートして使うようなもの  

## プロジェクトルール（Kuraプロダクト準拠）
### render className について
以下のように `render()` で返す一番外側のタグには自身のコンポーネント名を `className` として与えるようにしてください。
```
render() {
  return (
    <div className='ComponentName'>
      hogehoge
    </div>
  )
}
```

### scss 内容について
```
.ComponentName {
  .any-area {

  }
}
```
大外はコンポーネント名で。
その他 class についてはケバブケース（ハイフンつなぎ）で定義してください。

### typescript について
できるだけ `any` は使わず、型を与えてください。

## デプロイ手順（ドリップページの公開方法）
### 手順
1. masterブランチにてbuildする。
1. 生成されたbuildディレクトリごと、どこかへ退避しておく。
1. gh-pagesブランチから新しくブランチを作成する。
1. drip-officialディレクトリの中身を **以下のファイルを除き** 削除する。
1. buildディレクトリ内の全てのファイルをdrip-officialディレクトリにコピペする。
1. コミット、プッシュしたのち、github.comにてgh-pagesブランチにマージするプルリクエストを作成する。
1. ページを構成するために必要なファイルが全て揃っているか確認する
    1. gh-pagesから作成したgh-pages-xxブランチをローカルから一時削除する
    1. gh-pages-xxブランチをgithubよりpullする
    1. http-serverなどのコマンドを使い、ブラウザ表示して確認する (ex:`$ http-server ./drip-official`)
1. github.comにてgh-pagesブランチにマージする。

http-serverについてはこちら
https://www.npmjs.com/package/http-server

削除しないファイル（ディレクトリ）
```
CNAME
pp.txt
.gitignore
.git
```

# Q & A
## Q: なぜdrip-officialディレクトリの中身を一度削除するのか。

### A: 生成されるファイルのいくつかが自動生成されたファイル名をつけられるためです。
そのため、一度削除してしまったほうが作業が簡単です。

また、
自動生成されたファイル名がつけられたファイルと削除した画像やページ(htmlファイルなど)を削除したのち、
ドラックアンドドロップで上書きでも問題ありません。
