## Overview

This is sample app using next.js,firebase,vercel.<br>
This App aims to collect niconico movie link.<br>
https://next-sample-6e3i2fp16-juneorg2020.vercel.app/

## Techniques

* __frontend__
  * __typescript 4.3.5__
  * __next.js 11.0.1__
  * __React.js 17.0.2__
  * __material-ui/core 4.12.3__
  * __eslint 7.32.0__

* __インフラ__
  * __Docker 20.10.5 / docker-compose 1.28.5__
  * __nginx 1.20__
  * __mysql 8.0__

* __others__
  * __firestore__
  * __firestore__

### ローカル環境でのデプロイ
1.  git clone
```terminal
git clone https://github.com/JuneOrg2020/BookReviewSample.git
```

2.  移動
```terminal
cd BookReviewSample
```

2.  docker ビルド
```terminal
make build
```

3.  ライブラリインストールとLaravel初期設定
```terminal
make init
```

4.  DDL及び初期データ投入
```terminal
make init-db
```

### Usage

1. ログイン<br>
http://127.0.0.1/ にアクセスし、以下の情報からログインする<br>
ログインユーザーID: test@test.com <br>
ログインパスワード: testuser <br>

## 画面イメージ
 Search <br>
<img src="https://user-images.githubusercontent.com/64642177/127508184-f72c9b82-f1fa-4408-9426-77201ab062aa.png" width=600><br>
 Review <br>
<img src="https://user-images.githubusercontent.com/64642177/127508205-2ba1684f-8e99-4654-b4e6-a903f6762ff9.png" width=600><br>
 BookGroup <br>
<img src="https://user-images.githubusercontent.com/64642177/127508210-367d3b25-8c71-41e5-ae96-104a98223180.png" width=600><br>
