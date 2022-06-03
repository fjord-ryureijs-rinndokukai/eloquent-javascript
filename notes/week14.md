# 【第14週】流麗なJavaScript輪読会 (2022\-05\-30\~2022\-06\-03)

[![hackmd-github-sync-badge](https://hackmd.io/HPV9xfeHTeu1avWjX-WwTA/badge)](https://hackmd.io/HPV9xfeHTeu1avWjX-WwTA)


###### tags: `流麗なJS`

- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)
- [fjord\-ryureijs\-rinndokukai/eloquent\-javascript: 流麗なJavaScript輪読会用リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)

## 目次

[TOC]

## 2022\-05\-30

### 司会
[タイマー](https://timer.onl.jp/)

- @cafedomancer 

### ドライバー

- @SatoshiHaramura 


### スタート地点

- JS Primer 非同期処理:await式 から

### 疑問点・気づき

#### Async Functionと反復処理 まで

- @eatplaynap 
  - `setTimeout`関数の返り値はPromiseではなくてタイマーIDなので、Promiseでラップして書く必要がある=`dummyFetch`関数はasync関数で書き直すことはできない
    - 非同期関数は定義するのも使うのも難しい…:sob:
      - `setTimeout` が Promise ベースではなくコールバックベースなので、Promise でラップしなければならないことがすべての元凶


- @cafedomancer 
    - 例外とエラーとエラーオブジェクトが別々のものなのに混同されていて混乱する... (例外 != エラー)
        - 例外: `throw` したもの
        - エラー: syntax error とか
        - エラーオブジェクト: `new Error(...)`
    - いろいろ組み合わせる例がむずかしい！
        - 分かりやすく書けそうなのであとで書く
    
- @SatoshiHaramura
    - `await`してると、promiseがfulfilled or rejectedになるまで待ってくれる。`値`を返す
    - 例外：throwすると発生する
    - エラーオブジェクト：new Errorのようなオブジェクトのこと

- @yatsuhashi 
    - javascriptでは例外とエラーは別
        - Ruby もそうですよ
    - throwされるのは必ずエラーとは限らない
        - これは JavaScript のはなし
    - throwされると例外が発生する

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 有名な知ってる人がたくさんいる(？？)
    - ってことはあなたも有名人！？

- @cafedomancer 
    - 今日も起きられた
    - haruguchi さんはどうしたんだろう
        - 夢の中でした。
 
## 2022\-05\-31

### 司会

- @eatplaynap 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @SatoshiHaramura 

### スタート地点

- Promise APIとAsync Functionを組み合わせる

### 疑問点・気づき

#### まとめ まで

- @haruguchi
    - やっぱり感想はawaitは待ってくれるけど、待ってくれないというのがしっくりきた
    - 昔setTimeoutをawaitしてハマった（setTimeoutはプロミスを返さない）
    - 今はpromiseベースのsetTimeout関数があるらしい(Node.js)
    - Promiseというオブジェクトのおかげで非同期処理の複雑なやりとりがシンプルになっていると実感できた。
    
    
- @cafedomancer 
    - `forEach()` で `await` しても待ってくれない！
    - TypeScript では top-level await できない？
    
```javascript=
/* 🙅 */
async () => {
  resources.forEach(async (resource) => {
    await dummyFetch(resource);
  });
};
```

```javascript=
/* 🙆 */
async () => {
  for (const resource of resources) {
    await dummyFetch(resource);
  }
};
```

```javascript=
/* 🙆 */
async () => {
  await Promise.all(
    resources.map((resource) => dummyFetch(resource))
  );
};
```

- @eatplaynap 
  - async関数の中の別の関数スコープのなかの処理はawaitしても外側の処理は先に走ってしまう
  - package.jsonに書く`type: module`は実行コンテキストを指定している
    

- @SatoshiHaramura
    - `await式`が使える箇所は、
        - Async Functionの直下のみ。
        - ES ModulesのTopレベル
    - Async Functionは


- @yatsuhashi 
    - awaitで待ってくれるのはawaitがある関数スコープの中の部分だけ

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - JS Primer終わった🙌
      - :tada: 
  - あしたからカラス
  

- @cafedomancer 
    - JSPrimer はいろいろ細かく書かれていてよい
    - いっぽうで Eloquent JavaScript のほうが内容としてはおもしろいかな
    - これだけやっても難しいのは、非同期処理が人類には難しいのかも
    - 琵琶湖のまわりには電車がはしっている　:train:


- @haruguchi
    - カラスに打ち勝ちたい！
    - JS Primer読んでよかった


- @SatoshiHaramura
    - JSPrimer読んでよかったです！
        - はらむらさんはもっかいよめますね！😊😊
        
## 2022\-06\-01

### 司会

- @yatsuhashi 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @haruguchi-yuma  

### スタート地点

- 

### 疑問点・気づき

#### コールバック まで


- @haruguchi-yuma 
    - カラスの巣の仕様がむずいな！
    - I/Oは時間がかかる



- @cafedomancer 
    - 「ハンドラの戻り値をレスポンス値として〜」のくだりは、今日入れて全部で 3 回読んでるけど分からないｗ
    - async/await で書いたら分かってもらえたようで良かった


- @SatoshiHaramura
    - BigOakとCowPastureは、カラスの巣のこと
    - readStorage(文字列, コールバック関数)メソッド
    - send(巣の名前, リクエストのタイプ, リクエストの内容, レスポンスが来たときに呼ぶ関数)メソッド
    - defineRequestType(リクエストの型, コールバック関数(巣, 内容, 送信元, リクエストの処理が終わったときに呼び出すコールバック関数))関数

- @yatsuhashi 
    - readStorageはawaitを使って書くとめちゃめちゃわかりやすかった

- @eatplaynap 
  - ｱｱｱ
  - readStorage関数は第一引数の文字列をkeyに持つプロパティのvalueを返すみたいなことをしている 

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 書いてるうちに爆発される

- @haruguchi
    - これは難しいー！

- @cafedomancer 
    - ねぼうした

## 2022\-06\-02

### 司会

- @eatplaynap 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @SatoshiHaramura

### スタート地点

- promise

### 疑問点・気づき

#### ネットワークは難しい まで

- @haruguchi
    - 解説がサラッとしている。Promiseの仕様を一息に言ってる感じ。
    - ただ、前回よりは確実に読める箇所が増えている！
    - `Promise.resolve().then(() => {}, () =>{})`でthenの第2引数に処理が移る場合がよくわかんない。
    - try-catchで囲むのはなんとなくわかった



- @cafedomancer 
    - 内容がもりだくさん過ぎてむずかしいｗ
        - コールバックベースの関数を promise でラップする
        - 非同期関数でループを実現する
        - promise が返ってくるケースも value が返ってくるケースも想定してコードを書く
    - `try { Promise.resolve().then(..., failure => callback(failure)); } catch (exception) { callback(exception); }` はなんなんだ？


- @eatplaynap 
  - p.211のコードがなんとなく何やってるか分かったのでとりあえずよかったかな…
  - p.212はコールバック関数が多すぎてやっぱり何やってるのかわからない

- @yatsuhashi 
    - 前回よりは読めてる

- @SatoshiHaramura
    - storage関数を読むことができた！
        - readStorage関数を呼んで、resolve関数を呼んでいる。そしてpromiseを返している
    - 
### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 運動キライな人でもできる運動知りたい
    - 高尾山のぼる
    - 筑波山のぼってみようかな！
    - ボウリングする
      - ボウリングたのしい！ 10 ゲームくらいやりたい！
    - 水泳とか
  - [Jackdaw](https://en.wikipedia.org/wiki/Jackdaw)
     - 日本にもいるみたい

- @haruguchi
    - カラスのデータベースには餌の場所も記されていれば敵も記されている

## 2022\-06\-03

### 司会

- @haruguchi

[タイマー](https://timer.onl.jp/)

### ドライバー

- @cafedomancer 

### スタート地点

- promiseのコレクション

### 疑問点・気づき

#### メッセージルーティング まで

- @haruguchi
    - 前回わからなかったところがわかるようになった。雰囲気読める！
    - カラスがどんどん賢くなっていく
    - コールバックという仕組みのおかげで外から処理を与えられるぶん、関数の実装がシンプルだった


- @eatplaynap 
  - コード読めた！と思ったけど読めた箇所は非同期じゃなかった😂

- @cafedomancer 
    - "ロボットみ" を感じた
    - `everywhere()` の中身がシンプルで参考になった
    - `Promise.all(Promise<boolean>[])` と `map() -> filter()` がなるほどだった。

- @yatsuhashi 
    - 前回の壁を越えた！


- @SatoshiHaramuara
    - メッセージを別の巣に送信したい
        - 巣が持っている繋がっている巣の情報をもとに、さらに隣の巣へ送信している

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 心に残った誤訳コーナーが復活してしまった😇
  - 実際のカラスは隣人(？もしくは近隣の別のコミュニティ？)と交流してないらしい

- @haruguchi
    - クックパッドみたいな大企業だと派閥があるんだなー
    - 次はasyncかー
    
### 心に残った誤訳

- We can now send a message ... の対訳がない
