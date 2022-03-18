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


## 2022\-03\-16

### 司会
- @yatsuhashi 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @kasai441 

### スタート地点
- 練習問題 リストの最後の問題(p.94)から

### 疑問点・気づき
#### 練習問題 リスト(p.94)のarrayToList関数まで
- @haruguchi
    - 再帰にしたときにハマってむずかった、、

- @yatsuhashi 
    - 中に潜っていく考え方が難しい


### 振り返り(よかった点・次回に向けての改善点等)
- @haruguchi
    - if文

- @kasai441 
    - 再帰の途中で終わった。むずいーー

### 今日心に残った誤訳

## 2022\-03\-17

### 司会
- 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @haruguchi

### スタート地点
- 練習問題 厳格な等価性比較(p.96)から

### 疑問点・気づき
#### 練習問題 厳格な等価性比較(途中)まで

- @eatplaynap 
  - めっちゃ難しい…！
  - [Array\.prototype\.every\(\) \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
    - 便利！
  - 仕様をあんまりちゃんと把握してなかったかも

- @kasai441 
    - Object.keys(obj1)とかは長いので、変数に入れるといいかも
    - array.every初めて見た

- @haruguchi
    - Object.keys(obj)で取れるのは配列
    - 実装前にどれだけ方向性がイメージできるかだけど、あんまり思いつかなかった、、、
    - そもそも配列にpushせずにeveyで最初から比較したらよかった

### 振り返り(よかった点・次回に向けての改善点等)

- @kasai441 
    - いろいろなやり方があるので、自分ならこうするというのが、みんな違っている気がする。合意形成のようなプロセス。

- @eatplaynap 
  - リポジトリに練習問題用の空ファイルを事前に作っておく
  - 4章から練習問題これか〜😇
  - Yatzお大事に！
      - :pray: 

- @haruguchi
    -　昨日に引き続き難しい。難しいというか、あんまり使ったことない脳みそを使ってる感じ

- @yatsuhashi 
    - 方向性すら浮かばないから、問題を解いている気がしない

### 今日心に残った誤訳

- 誤訳きてくれー！

## 2022\-03\-18

### 司会
- @haruguchi-yuma 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @eatplaynap 

### スタート地点
- 練習問題 厳格な等価性比較(p.96)途中から

### 疑問点・気づき
#### 練習問題 厳格な等価性比較まで

- @kasai441 
    - 自分はこういうの考えました。あっているかはわかりません。
```js
function deepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  else {
    for (let i = 0; i < keys1.length; i++) {
      const key1 = keys1[i]
      const key2 = keys2[i]
      const valueType = typeof obj1[key1]
      if (valueType === 'object' && valueType !== null) {
        return deepEqual(obj1[key1], obj2[key2])
      }
      else if (key1 !== key2) return false
    }
  }
  return true
}
```

- @eatplaynap 
  - 模範解答が流麗すぎて、こんなコードを思いつく日が来るんだろうかと遠い目になってしまった
  - [Array\.prototype\.includes\(\)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)というメソッド便利そう


- @haruguchi
    - 模範回答見て読みやすいなーと感じたり、条件分岐に漏れがないのすごいなーと感じたり
    - 再帰慣れるまで書きづらいがネストしたものを扱うのは便利そう（特にどれだけネストしているかわからないとき）

- @yatsuhashi 
    - さすがライブラリにできるレベルなだけある

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 模範解答が流麗で良かった
  - 1週間でやっと練習問題が終わって良かった

- @haruguchi
    - これでやっと次に行ける！！:cry:

- @yatsuhashi 
    - （もうちょっと難易度下げてほしいな）


### 今日心に残った誤訳

- 来週に期待