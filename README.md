# nodokawaita-frontend


### ローカル環境構築手順
```bash
$ git clone git@github.com:kamada-maki/nodokawaita-frontend.git
$ docker-compose build
$ docker-compose run --rm app npx create-next-app tmp --ts\
&& mv tmp/* . && mv tmp/.* . && rm -r tmp
$ docker-compose up -d
```


### ブランチルール
- Git flowに則りブランチを作成して開発を進める  
- ブランチ名のルール：カテゴリ名/#issue番号-動詞-機能 とすること
    - カテゴリ名：feature(新規機能) or bugfix(バグ修正)