# 【第15週】流麗なJavaScript輪読会 (2022\-06\-06\~2022\-06\-10)

[![hackmd-github-sync-badge](https://hackmd.io/TNzsIoN5Ra2zvg9ba_azRg/badge)](https://hackmd.io/TNzsIoN5Ra2zvg9ba_azRg)


###### tags: `流麗なJS`

- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)
- [fjord\-ryureijs\-rinndokukai/eloquent\-javascript: 流麗なJavaScript輪読会用リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)

## 目次

[TOC]

## 2022\-06\-06

### 司会
- @SatoshiHaramura

[タイマー](https://timer.onl.jp/)


### ドライバー

- @cafedomancer

### スタート地点

- 非同期関数(p.217)から

### 疑問点・気づき

####  ジェネレータ(p.220)まで

- @haruguchi
    - コード読むだけでも難しいな（再帰関数や配列のメソッドとか容赦なく色々出てくる）
    - イテレータとジェネレータを最近復習したばっかりだったのでそれ自体は理解できたけど、非同期処理と繋がってくる話がまだピンときてない
    - `.keys()`, `.values()`, `.entries()`は配列のメソッドだと思ってたけど、Mapでも使えてイテレータを返す

- @eatplaynap 
  - イテレーターのことはなにも覚えてなかったけど6章でやってた
  - ジェネレーターの部分は全然わからなかった

- @cafedomancer
    - then/catch + loop の処理が async/await + loop の処理でかなり読みやすくなった
    - `Group.prototype[SYmbol.iterator] = ...` でイテレータを定義できるのか！ 


- @SatoshiHaramura
    - 今日のコードは難しくてよくわからなかった...復習
    - ジェネレータも何者かよく分かっていないので調べるとことから...

- @yatsuhashi 
    - 非同期以外の箇所が特に難しい
    - function*は初めて聞いた

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
   - 英語でカラスを表現する言葉をたくさん知れた
     - crow
     - raven
     - jackdaw

- @haruguchi
    - 山登りたい！
      - 滋賀の有名な山なんですか
        - 伊吹山がありますね
        
## 2022\-06\-07

### 司会

- @eatplaynap

[タイマー](https://timer.onl.jp/)


### ドライバー

- @haruguchi

### スタート地点

イベントループ(p.220)

### 疑問点・気づき

#### まとめ(p.223)まで

- @haruguchi-yuma
    - イベントループの話はこれがわかりやすかったです。英語だけど、、、
    - https://youtu.be/8aGhZQkoFbQ?list=TLGGoF3AwrpS3_UwNjA2MjAyMg
    - ループの非同期処理はまだあんまりやってないので見慣れない感じがした。
    - 最後の例の問題点理解できたけど、言語化難しい
    - とにかく下のやつは理解しておく
        - awaitはPromiseインスタンスがsettledになるまで待つ
            - setTimeoutはPromiseベースではないからまたない
        - async関数はPromiseを返す


- @eatplaynap 
  - 今までexampleとして出てきた関数の動きを思い出しながらコードを読むのが大変
  - `async`関数の中でPromiseが返ってくる処理は`await`しないと解決されてない状態のPromiseが返ってきてしまう


- @cafedomancer 
    - 最後の問題は `lines` をロック (誰かが変数をいじっているときは他の人にいじらせないようにする) しても解決できそう。JavaScript にそういう仕組みがあるのかは分からないけど。
    - "新しい値の計算は、既存の値の変更よりもエラーになりにくい"
        - immutable にいこうってこと？ (= mutation しない)

```javascript=
async function chicks(nest, year) {
  let lines = network(nest).map(async name => {
    return name + ": " +
      await anyStorage(nest, name, `chicks in ${year}`);
  });
  // join も reduce の一種
  return (await Promise.all(lines)).reduce((line, result) => {
      return result += `\nchicks in ${year}`;
  }, "");
}
```


- @SatoshiHaramura
    - イベントループがまだよくわかっていないけど、イベント(文?)を順番に実行してくもののイメージなのかな??
    - `promise.then(console.log)`は、thenで受け取った値を省略されている??
        - `promise.then(関数オブジェクト)`
        - `promise.then(() => {})`
        - `promise.then(function () {})`
        - `promise.then(console.log)`
            - `console.log(...)`
```javascript=

promise.then()
```
### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - やっと練習問題🙀


- @haruguchi
    - 非同期ももうすぐ終わる。やっぱり寄り道して良かった。

- @SatoshiHaramura
    - 寝坊しました...

## 2022\-06\-08

### 司会

- @eatplaynap

[タイマー](https://timer.onl.jp/)


### ドライバー

- @cafedomancer

### スタート地点

練習問題(外科用)メスの追跡

### 疑問点・気づき

#### 練習問題(外科用)メスの追跡 async function ver まで

- @haruguchi-yuma
    - 分かったこと。プログラミングは難しい。
    - メス（外科用）


- @eatplaynap 
  - anyStorage関数で自分の巣から次にメスを渡した巣を返している
  - scalpelはメス


- @cafedomancer 
    - haramura さんの説明がなければなにも分からなかった :joy_cat: 
    - 次の要素をどんどんたどっていって特定の要素を見つけるのは、連結リストの検索をするってことだな？
    - `anyStorage()` の使い方がよく分かっていないということが分かった
    - メスはオランダ語？ 蘭学とかの時代の話なのかな？ 杉田玄白とかの時代に入ってきた言葉なのかな？

- @SatoshiHaramura
    - anyStorage関数の使い方が少し分かった気がする
        - 検索するときに使うのかな

- @yatsuhashi 
    - ↓メ↑スではなく↑メ↓ス

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - メスまで持ってたらカラスに完全に敵わない
  
- @cafedomancer 
    - sculpture と scalpel は同じ語源っぽい (LATIN: sculpere carve)


## 2022\-06\-09

### 司会
- @SatoshiHaramura
### ドライバー
- @cafedomancer

### スタート地点

練習問題(外科用)メスの追跡

### 疑問点・気づき

#### 練習問題　Promise.allの実装（途中） まで

- @haruguchi
    - forEachやmapの中でasync/await使う時の注意点をもう一回復習しておく必要があるなと感じた。
    - 1問目の再帰呼び出しは思いつかないな、、、

- @eatplaynap 
  - 非同期関数はループの中でも使えて直感的で便利

- @SatoshiHaramura
    - 繰り返し処理でwhileやforを使えた

- @cafedomancer 
    - 再帰とループは交換可能？
    - 繰り返し処理を再帰とループの間で交換して書くのむずかしいな
    
### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 本を読まない人は暇なとき何してるんだろう…って思ったけど最近まで自分もテトリスやったことなかったから、読書以外にもいろいろやることあるんだろうな〜


- @haruguchi
    - プログラミング始めてから文学を読む時間がなくなった。全部技術書に持っていかれている
    - 登場人物分からなくなるのはわかる！


- @yatsuhashi 
    - コードを読めるのと書けるのは全然違う
    
## 2022\-06\-10

### 司会
- @yatsuhashi 
### ドライバー
- @SatoshiHaramura

### スタート地点

練習問題Promise.allの実装

### 疑問点・気づき

#### 構文解析（途中） まで

- @haruguchi
    - 自分で考えたやつはasyncの場所が違っててエラーが出てたみたいだった
    - await式はPromiseオブジェクトがFuifilledかRejectedになるまで待つ
    - await式が書けるのは(top-levelは置いといて)async関数の中


- @yatsuhashi 
    - > コンピュータプログラミングにおいて、S式（又はシンボリック式と略記、sexpr又はsexp）はその名の通りネストしたリスト(木構造)のデータである。
    - await書けない


- @cafedomancer 
    - 実際の `Promise.all()` の実装ってどうなっているんだろう？ というか JavaScript の実行環境ってなにで実装されているんだろう？
        - V8 は C++ っぽい？ https://github.com/v8/v8
            - https://ja.wikipedia.org/wiki/V%E5%9E%8B8%E6%B0%97%E7%AD%92

- @SatoshiHaramura
    - async/awaitで、全然書けないことが分かった！勉強になりました！
    - 最後の、パーサのデータ構造の内容が、読んでいても意味が咀嚼できなかったので読み直してみます！
        - discord に種類を書いておきました https://discord.com/channels/715806612824260640/786490074702938113/984605395010076733

3種類があるよう
```
{ type: "apply", operator: ..., args: ...}
{ type: "word",  name: ... }
{ type: "value", value: ... }
```


### 振り返り(よかった点・次回に向けての改善点等)

- @haruguchi
    - 非同期関数の練習してた時、意味のある（生きた）コード書いてなかったので、そういうコードで練習する必要があると感じた。
    - やっと終わったー！！！！


- @yatsuahshi
    - 非同期終わった！

- @SatoshiHaramura
    - 非同期全然書けない！！