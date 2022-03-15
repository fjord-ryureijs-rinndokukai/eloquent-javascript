# 【第4週】流麗なJavaScript輪読会 (2022\-03\-14\~2022\-03\-18)

[![hackmd-github-sync-badge](https://hackmd.io/qb1QkVshQgWANCWmbsVqiQ/badge)](https://hackmd.io/qb1QkVshQgWANCWmbsVqiQ)


###### tags: `流麗なJS`

[**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)  
[公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)  



## 目次

[TOC]

## 2022\-03\-14

### 司会
- @eatplaynap 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @kasai

### スタート地点
- 練習問題 配列を反転させる(p.94)から

### 疑問点・気づき
#### 練習問題 配列を反転させる(p.94)まで

- @kasai441 
    - https://top-men.hatenablog.com/entry/2018/10/03/213627
    - lodashを使わないとDeepコピーができないらしいです。
        - Shallowコピーは参照が同じ
        - Deepコピーは値の同じ別のオブジェクト

- @daisuke-kiku 
    - 破壊的、非破壊的までを考慮すると使う関数とか変わってきそう。。
    - 配列でインデックスを操作するのに慣れるとできること増えそう。

- @eatplaynap 
  - グローバルスコープの変数が関数宣言の後ろで宣言されてても関数内で参照できるのはやっぱりキモい
  - shift unshiftが覚えられない
  - 退避用の変数を定義しておいて、一旦その変数に入れておいて変数をいじる操作するのは一般的らしい。難しい
  - 破壊的な関数についてユニさんがなんか言ってた記憶(むやみに避けるべきじゃないみたいな)


- @yatsuhashi 
    - `array.length - 1 - i`は流石に読みづらい

### 振り返り(よかった点・次回に向けての改善点等)

- @daisuke-kiku 
    - 練習問題難しいけど楽しい。

- @eatplaynap 
  - ブラウザ上だとループがおきたときにクラッシュしたり前の情報が消えて困るので、もうそろそろエディタを使ったほうが良いかも？

### 今日心に残った誤訳

- なかったので寂しい


## 目次

[TOC]

## 2022\-03\-15

### 司会
- @kasai441

[タイマー](https://timer.onl.jp/)

### ドライバー
- @yatsuhashi 

### スタート地点
- 練習問題 リスト(p.94)から

### 疑問点・気づき
#### 練習問題 リスト(p.94)のarrayToList関数まで

- @haruguchi
    - 自分はこう書いたんですが、最初に作るlistがもう少しシンプルにできると思い付かなくて模範解答見てやられたと思いました。
    - 一番小さな部品から作っていくという考えが甘かった、、、
    - 速度測るやつが面白かった！
```javascript=
const arrayToList = arr => {
  let list = {value: arr[arr.length - 1], rest: null};

  for (let i = arr.length - 2; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}
```

- @kasai441 
    - 難しい！
    - 普通にアルゴリズムの練習になりますね。（苦手。）
    - バラバラにプロパティを作ると順番が担保されないの勉強になった。（もしかしたらアルファベット順？）

- @eatplaynap 
  - 練習問題難しー！1問(4問中1問)しか解けなかった！
  - そして模範解答は流麗だった…！
  - 昨日の破壊的な関数と非破壊的な関数どっちが速いかの結果は、破壊的な関数の方が速いことがわかった
  - Devツールのコンソールでターミナル上だと省略される`[Object]`の中身が見れて便利

### 振り返り(よかった点・次回に向けての改善点等)

- @kasai441 
    - 司会ぼーとしてました...
- @harguchi
    - リストというデータ型があるのを初めて知った。
    - 模範解答が勉強になるので忘れた頃に解き直したい。
    - 再帰できないのかな〜と気になった！
- @eatplaynap 
  - 時間を決めて何時になったらヒントを見るみたいな進め方がよさそう

### 今日心に残った誤訳

- 誤訳ないのくやしい 
