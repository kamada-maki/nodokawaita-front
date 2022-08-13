# nodokawaita-frontend


### ローカル環境構築手順
```bash
$ git clone git@github.com:kamada-maki/nodokawaita-frontend.git
$ docker-compose build
$ mkdir app
$ cd app
$ docker-compose run --rm app npx create-next-app tmp --ts\
&& mv tmp/* . && mv tmp/.* . && rm -r tmp
$ docker-compose up -d
```


### gitルール
- Git flowに則りブランチを作成して開発を進める  
- ブランチ名のルール：「カテゴリ名/#issue番号-動詞-機能」とすること
    - カテゴリ名：feature(新規機能) or bugfix(バグ修正)
- commitメッセージのルール：「prefix 概要（日本語）」とすること  
prefixは下記を参照
    - fix：バグ修正
    - add：新規（ファイル）機能追加
    - update：機能修正（バグではない）
    - clean：整理（リファクタリング等）
    - remove：削除（ファイル）
    - revert：変更取り消し