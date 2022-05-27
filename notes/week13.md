# 【第13週】流麗なJavaScript輪読会 (2022\-05\-23\~2022\-05\-27)

[![hackmd-github-sync-badge](https://hackmd.io/i5DQRiqmQVi0myDcXxG9qA/badge)](https://hackmd.io/i5DQRiqmQVi0myDcXxG9qA)


###### tags: `流麗なJS`

- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)
- [fjord\-ryureijs\-rinndokukai/eloquent\-javascript: 流麗なJavaScript輪読会用リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)

## 目次

[TOC]

## 2022\-05\-23

### 司会
- @SatoshiHaramura

[タイマー](https://timer.onl.jp/)

### ドライバー

- @eatplaynap


### スタート地点
- 非同期処理:コールバック/Promise/Async Functionから

### 疑問点・気づき
#### JS Primer エラーファーストコールバック　まで

- @haruguchi
    - 同期処理が終わってから非同期処理が行われる
    - setTimeoutは呼び出されると、指定ミリ秒後にタスクキュー（別の置き場）にコールバック関数が登録される。同期処理が終わった後タスクキューに登録された関数が呼び出される。
     https://www.jsv9000.app/
    - JSはシングルスレッド

- @yatsuhashi 
    - 非同期処理は同期処理でブロックされた場合、同期処理が呼び出された後に非同期処理が呼び出される

- @eatplaynap 
  - 非同期処理は同期処理の実行を待ってから実行される(どちらも同じメインスレッドで実行されてる)
  - setTimeoutで第2引数でタイマー設定した時間は、指定秒数待ってから第1引数で設定したコールバック関数が呼ばれるもののため、10ミリ秒で登録してもconsole.logが呼ばれるまでかかった時間を出力しようとすると10ミリ+αかかる


- @SatoshiHaramura
    - setTimeout関数は非同期関数なので、同期処理が全て終わってから実行されている
    - メインスレッドはシングルなスレッドとなっている??
        - Web Worker APIは、メインスレッドとは別のスレッドを実行できる模様
    - 非同期関数内のエラーは、その中でtry/catchすべし


### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 以前合宿で読んだときよりもちゃんと理解できててよかった
  - 非同期は何？って思ってるのに更によくわからないエラーハンドリングの話に急に切り替わるのが以前読んだときは混乱した記憶がある


- @haruguchi
    - 実行順序の話はこのサイトがとても詳しくて（詳しすぎる）面白いです。
    - https://zenn.dev/estra/articles/js-async-programming-roadmap   

## 2022\-05\-24

### 司会
- @yatsuhashi 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @haruguchi


### スタート地点
- 非同期処理:[ES2015] Promiseから

### 疑問点・気づき
#### Promiseの状態　まで

- @haruguchi
    - Promiseの状態は３種類ある
        - Fulfilled
        - Rejected
        - Pending
    - FulfilledやRejectedになったものはSettled状態を変更することはできない
    - PromiseオブジェクトがPendingのままだと、thenメソッド登録したコールバック関数は実行されない
    - Promiseコンストラクタないで`throw`例外を発生させると自動的に捕捉される + Rejected　状態になる



- @eatplaynap 
  - Promiseのコンストラクタにはexectorという関数が引数として渡され、exector関数がresolve(成功時実行)とreject(失敗時実行)という2種類のコールバック関数を受け取る
  - 例外と失敗の違いがあまりよくわかってない
  - Promiseの中では状態が1度決まってしまうとそこから変化することはない


- @SatoshiHaramura
```js=
const promise = new Promise((resolve, reject) => {
  if (約束を守った時) {
    resolve();
  } else if (約束を破った時) {
    reject();
  }
})

promise
  .then(...)
  .catch(...)
```


- @yatsuhashi 
    - 非同期処理が同期処理の実行を待ってから実行されるということがよくわかった

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - Promise作るときにexectorという関数の中に2つのコールバック関数を受け取っているということを知ったことでだいぶ読みやすく感じた
  - やっぱり再読すると理解が深まって良いなって思ったので再読を促すWebアプリがあったらいいのにな〜🤭　:smile: 


- @haruguchi
    - 関数がネストしていて読みづらいけど、なんとなく慣れてきた感はある。ここ1週間の頑張りが功を奏している。
      - 26卍


- @SatoshiHaramura
    - 6時には起きれたのに、二度寝してしまいました...困った...

## 2022\-05\-25

### 司会
- @eatplaynap 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @yatsuhashi


### スタート地点
- 非同期処理:`Promise.resolve`から

### 疑問点・気づき
#### Promiseチェーン　まで

- @eatplaynap
  - Promiseチェーンでthenやcatchの結果新しいPromiseインスタンスが生成されるので、thenやcatchのコールバック関数内のPromiseはpending状態。
  - thenのあともcatchのあとも新しく作られたPromiseインスタンスの状態はfulfilled(なのでチェーンで次の処理に進める)
    - catchからのthenからのcatchみたいなこともできる

- @haruguchi
    - `Promise.resolve`は`new Promise((resolve) => resolve)`のシンタックスシュガー
    - `Promise#then`や`Promise#catch`メソッドは新しいプロミスオブジェクトを返すのでそれらはまた状態をもち、チェーンしていける
    - thenのコールバックやcatchのコールバック関数ないが無事に実行されたら`Fulfilled`になり、中でエラーが出たら`Rejected`になる

- @SatoshiHaramura
    - `new Promise`の中のexecutorは、同期処理
    - `then`や`catch`メソッドに渡すコールバック関数は、非同期処理
    - `then`や`catch`メソッドは、新しいpromiseインスタンスを返す
        - promiseインスタンスに対して、`then`や`catch`メソッドをチェーンのように繋げて呼ぶことができる


- @yatsuhashi 
    - `then`や`catch`は毎回新しい`Promise`を返す
        - ので繋げることができる
### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 非同期のコード読めなくて怖いと思ってたけど輪読会のお陰で今まで読んだところは完全理解したので自作サービスでもちゃんとMDN読めてる:sob:


- @haruguchi
    - まだいけるぞ！thenメソッド内でreturnするパターンが結構ややこしかった気がする。出てくるかな？


- @SatoshiHaramura
    - 寝る前に、6時に起きるぞ！と念じたら、起きれました！

## 2022\-05\-26

### 司会
- @yatsuhashi  

[タイマー](https://timer.onl.jp/)

### ドライバー

- @cafedomancer 


### スタート地点
- 非同期処理:Promiseチェーンで値を返すから

### 疑問点・気づき
#### Promise.allで複数のPromiseをまとめる　まで

- @haruguchi
    - thenメソッドの中でPromiseインスタンスをreturnするとそのPromiseインスタンスの状態が受け継がれる。
    - ということはthen(catch)メソッドの中のコールバック関数で
        - 例外が発生(throw new Error())
        - Rejected状態のPromiseインスタンスをreturn
    - するとcatchメソッドに処理が移行する
    - `delay(1);delay(1);delay(1)`としたところは同期処理だから順番に実行されて（順番にタスクキューに入るから）、順番にFulfilledになるのか。
    - https://www.jsv9000.app/?code=ZnVuY3Rpb24gZGVsYXkodGltZW91dE1zLCBtZXNzYWdlKSB7CiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0%2BIHsKICAgICAgICBzZXRUaW1lb3V0KCgpID0%2BIHsKICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpCiAgICAgICAgICAgIHJlc29sdmUodGltZW91dE1zKTsKICAgICAgICB9LCB0aW1lb3V0TXMpOwogICAgfSk7Cn0KY29uc3QgcHJvbWlzZTEgPSBkZWxheSgxLCAnYWFhJyk7CmNvbnN0IHByb21pc2UyID0gZGVsYXkoMSwgJ2JiYicpOwpjb25zdCBwcm9taXNlMyA9IGRlbGF5KDEsICdjY2MnKTsKClByb21pc2UuYWxsKFtwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpIHsKICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vID0%2BIFsxLCAyLCAzXQp9KTsK


- @cafedomancer 
    - `Promise.prototype.catch()` は `Promise.prototype.then(_, onRejected)` の syntax sugar
    - `Promise.prototype.finally()` が ES2018 なのが意外だった。わりと新しい機能だったのか。IE はなくなったので何も気にせず使っていこう。
    - `Promise.prototype.all()` に渡した promise の実行順はどうやって決まるのだろう？ 実行自体は引数に渡した順番で行われるのかな？
    - `Promise.prototype.all()` の評価結果が渡した順番になるのすごい。
    - フルフィルド、書けない
    - promise の逐次処理は async/await で書かないと読みづらい
    
```javascript=
// 以下のような promise だと B, A, C の順に resolve されるけど、結果は A, B, C になる
Promise.all(
  fetch('/resources/A'), // 300ms
  fetch('/resources/B'), // 200ms
  fetch('/resources/C'), // 500ms
);
```


- @eatplaynap 
  - `catch`は`then`のシンタックスシュガーであってエイリアスではない :alien: 
  - `finally`はその前の処理でreturnした値は受け取らない。rejected状態のPromiseも`finally`の中の処理には必ず入る

- @SatoshiHaramura
    - `then...catch...finaly`で、非同期処理を逐次処理っぽく表現できる
    - `finalyメソッド`は、引数を受け取れない
        - `finalyメソッド`に対して更に`thenメソッド`を繋げることもできた.驚き
    - `Promise.allメソッド`で、promiseを並列処理できる　← 並行処理！
        - 厳密には並行処理かも。ブラウザの JS 環境はシングルスレッドなので。parallel と concurrent の違い。

- @yatsuhashi 
    - thenやcatchはfulfilled状態のPromiseインスタンスを返すが、中でPromiseインスタンスをreturnしているとそのPromiseインスタンスの状態が引き継がれる

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - Promise.allはたしか流麗JSのコードに出てきていたので次読むときはもっと分かってるはずと思う
  - 「はらむらさんは念じて早起きしてる」とひかるさんに伝えたら今日ちゃんと早起きしてるっぽいので良かった


- @SatoshiHaramura
    - 今日も6時くらいに起きれました！



- @haruguchi
    - ビジネスライクな輪読会だとわかった!:smile_cat:


- @cafedomancer 
    - おきた

## 2022\-05\-27

### 司会
- @haruguchi-yuma 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @eatplaynap  


### スタート地点
- 非同期処理:Promise.allで複数のPromiseを返すの途中

### 疑問点・気づき
#### Async FunctionはPromiseを返す　まで


- @haruguchi
    - async関数の中でPromiseインスタンスを返すルールはthenメソッドの時と同じだった
        - return するとその値で解決(fulfilled)状態のPromiseインスタンスを返す
        - Promiseインスタンスをreturnするとそのインスタンスの状態を引き継ぐ
        - 例外発生させるとRejected状態のPromiseインスタンスを返す



- @cafedomancer 
    - XMLHttpRequest やばい！ なつかしい！
        - 2013 年
    - Promise.all <-> Promise.race
        - all/any か　every/some になっていたほうが名前の対応が取れているような...。resolve/reject と fulfilled/rejected も名前の対応が取れていないし、なんなんだろう。まあでも race は race か。
            - `Promise.any`あったような、、、
    - async function で値を return/throw すると、値を Promise.(resolve/reject) でラップした Promise が return (not throw) される。async function で Promise を return した場合は、return した Promise そのものが戻り値となる。


- @eatplaynap 
  - 関数定義の前に`async`を付けることでPromiseをreturnする関数が定義できる
      - 後ろに書く言語もあるんですよね〜
  - bootcampのコードだと`async/await`はほとんど見なかった気がする。`then/catch`はよく見かけたけど
      - handler methods って async function にしてもちゃんと動くのかな。まあ動くか。


- @SatoshiHaramura
    - Promise.raceは、promiseを競争させている(raceがわかりやすい)
    - `async 関数定義`とすることで、promiseインスタンスを返してくれる(↓のようによしなにラップしてくれてる)
        - `Promise.resolve(returnの値)`
        - `Promise.reject(returnの値)`



- @yatsuhashi 
    - Async FunctionがPromiseをreturnした場合、そのPromiseをそのまま返す

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - Promiseの本いいのか…読んでみようかな
  - 金曜日嬉しいです
      - 🙌


- @haruguchi
    - 

- @SatoshiHaramura
    - 継続して、早起きできるようになってきました！
    
- @cafedomancer 
    - JavaScript Primer にしたのいいね！