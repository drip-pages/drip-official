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
1. github.comにてgh-pagesブランチにマージする。

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
