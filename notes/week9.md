# 【第9週】流麗なJavaScript輪読会 (2022\-04\-18\~2022\-04\-22)

[![hackmd-github-sync-badge](https://hackmd.io/2KT1cX6YQG-jT5bklfdSOg/badge)](https://hackmd.io/2KT1cX6YQG-jT5bklfdSOg)

###### tags: `流麗なJS`

- [リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)
- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)



## 目次

[TOC]

## 2022\-04\-18

### 司会

- @yatsuhashi

[タイマー](https://timer.onl.jp/)

### ドライバー

- @haruguchi

### スタート地点

### 疑問点・気づき
#### Chapter8 デバッグ(p.153)まで

- @haruguchi
    - デバッグはコードを書く2倍難しい
    - 型をメモれば安全
    - `use strict`モードだと多少安全
    - テスト書けばいい

- @yatsuhashi 
    - NaNやundifinedを生成しても、プログラムは何か意味のあることをしていると確信して楽しそうに続けるらしい


- @eatplaynap 
  - > But often, your nonsense computation will merely produce NaN (not a number) or an undefined value, while the program happily continues, convinced that it’s doing something meaningful.
    - めちゃ腹立たしいな
  - TypeScriptのコードはMarkdownのIssueをやったとき少し読んだけど、型が分かってると何が返ってくるかが追いやすくてむしろ読みやすいかもと思った


### 振り返り(よかった点・次回に向けての改善点等)
- @yatsuhashi 
    - デバッグは身近でわかりやすい

- @haruguchi
    - バグる原因は自分の場合大体仕様を勘違いしてるか、戻り値を勘違いしてる時だなと思った
    - Jsはnullとかundefinedがわかりずらい　エラー文もわかりずらい気がする

- @eatplaynap 
  - やみくもに試しがちなので戦略的console.logしていきたい

### 今日心に残った誤訳
p151 型
誤：型についての1つ言えるのは、
正：型について1つ言えるのは、

## 2022\-04\-19

### 司会

- @yatsuhashi

[タイマー](https://timer.onl.jp/)

### ドライバー
### スタート地点

### 疑問点・気づき
#### Chapter8 まとめ(p.162)まで

- @haruguchi
    - tryの中で例外が起こるとcatchに制御が移るfinallyで最後に常に実行される処理を書くことができる
    - 想定外の例外が発生してしまうこともある 新しいErrorクラスを定義してinstanceofで確認すると良い

- @yatsuhashi 
    - 全ての例外について処理を書くとノイズが激しいので、よく起こるものについて書く

### 振り返り(よかった点・次回に向けての改善点等)

- @haruguchi
    - 自作サービスで例外処理全然書いてないけど、レビューで何か言われてるんだろうか？
    - この章は非常に読みやすかった(前章と比べて)

- @yatsuhashi 
    - スムーズに読めて助かる


## 2022\-04\-20

### 司会

- @eatplaynap

[タイマー](https://timer.onl.jp/)

### ドライバー
- @haruguchi-yuma 

### スタート地点

### 疑問点・気づき
#### Chapter8 練習問題まで


- @yatsuhashi 
    - 関数を実行した時の戻り値を揃えるために`return`をつけている
    

- @haruguchi-yuma
    - return 忘れがち気を付ける
    - 例外を補足したくなければcatchはいらない
        - 捕捉！
    - 練習問題最後のロジック
        1. ロックが解除されていれば中身をpushしてリターン（ロックはしない、そのまま）
        2. そうでなければ解除してから中身をpushそして最後にロック

- @eatplaynap 
  - `finally`節の中身は`try`で`return`したあとも実行される
  - `for (;;)`で無限ループできる
  - 変数のスコープが狭ければ狭いほど変数の中身を覚えているべき期間が短くなるので読みやすい

- @cafedomancer 
    - try で return しても finally は実行されるっぽい？ (そりゃそうか)
    - 回答のコードはリーダブルな感じがした
        - 定義した変数が定義した箇所のすぐ次で使われるようになっている

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 久しぶりに1日で練習問題が終わってよかった
  - 変な日本語も英語を読んだ後だと理解できることがわかってよかった
      - そのうち変な日本語から原文が透けて見える透視能力が手に入りますよ

- @haruguchi
    - いいテンポ！2問だけだったのも大きい

- @yatsuhashi 
    - すっと終わっていい感じ

### 今日心に残った誤訳

確認してから戻ります: ensure that ... before returning (正: リターンする前に〜を確実にします、確実に〜します)

## 2022\-04\-21

### 司会

- @eatplaynap

[タイマー](https://timer.onl.jp/)

### ドライバー


### スタート地点
Chapter9 正規表現から
### 疑問点・気づき
#### Chapter9 マッチとグループまで

- @yatsuhashi 
    - `exec`メソッドの戻り値は配列
        - 正規表現の中に括弧で囲まれた箇所がある場合、戻り値の配列の　最初の要素がマッチした部分全体で、次の要素が括弧内にマッチした部分になる
    - 全ての言語の正規表現リテラルが同じではない


- @haruguchi
    - testメソッド、戻り値はboolean、マッチしたかどうかだけ
    - execメソッド、`regexp.exec(str)`マッチした情報が配列（オブジェクト？）で得られる。indexプロパティをもつ
    - matchメソッド `str.match(regexp)`
    - グループ化した場合は["全体にマッチしたもの", "部分マッチしたもの"]

- @eatplaynap 
  - `/neighbou?r/`の`?`は直前の`u`にのみ反映されて、複数の文字に反映させたいときは`()`でグループ化させる


- @cafedomancer 
    - Ruby と JavaScript の正規表現リテラルがたまたま同じだったこと
        - 他の言語だと違いそう
    - `\0` はヌル文字を表すエスケープシーケンス
    - 今回の挿絵は意味がわかった
    - `exec` で返ってくるのは配列そのものなんだな (`index` というプロパティを別途生やしている？)

![](https://i.imgur.com/pl7erTF.png)

![](https://i.imgur.com/jFCj7lW.png)

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - うめもとさんが貼ってくれた[Regexper](https://regexper.com/)での図解が分かりやすい
  - 原文は正規表現がちゃんと書いてあって信頼できる
  - 英語の勉強になる(n回目)
  
  
- @haruguchi
  - 
  
  
### 今日心に残った誤訳
- `+.` -> `+`
- `\d` は `[\0-9]` と同じ意味になります (正: ならない)
- 2回以上繰り返される: more than one (正: 1回以上)
- 範囲を自由に指定できます: You can also specify open-ended ranges (正: 終端のない範囲を指定することもできる)


## 2022\-04\-22

### 司会

- @yatsuhashi 

[タイマー](https://timer.onl.jp/)

### ドライバー


### スタート地点
Chapter9 Dateクラスから
### 疑問点・気づき
#### Chapter9 マッチングの仕組みまで

- @haruguchi-yuma
    - Dateクラスのmonthは0〜11
    - getYearは1900を引いた年が返ってくる（使い所なし）
    - \bは単語の境界にマッチする

- @yatsuhashi 
    - Dateクラスの月が0始まりなことを初めて知った
    - MDNにgetYearは非推奨って書いてあった

- @eatplaynap 
  - Dateクラスは謎ｱｱｱ
  - > there’s also getYear, which gives you the year minus 1900 (98 or 119) and is mostly useless.
     - `(98 or 119)`が謎ｱｱｱ
  - 選択肢パターンはMarkdown独自記法のやつでXSSの危険性を指摘されて書き直すときに伊藤さんに教えてもらった
    - https://github.com/fjordllc/bootcamp/pull/4496/files#diff-d242b6fd0d5b2e003422acb0f24f190e046a7051dcadc93e31d8b13e05a6f482R8

- @cafedomancer
    - (書けなかった)

### 振り返り(よかった点・次回に向けての改善点等)

- @cafedomancer 
    - 寝坊した
    - トミーさんの日報のやつ setTimeout が promise になっていなさそうでした。Node.js 16 系だと promise based な setTimeout があるので、そいつの polyfill(?) を探してみるといいかもしれません。大した処理じゃないので自分で書いてもよいけど　
        - https://nodejs.org/api/timers.html#timerspromisessettimeoutdelay-value-options

```js=
function promiseBasedSetTimeout(resolve, interval) {
  return new Promise((resolve) => setTimeout(resolve, interval))
}

(async () => {
   await promiseBasedSetTimeout(() => console.log('hello'), 5000)
})()
```

- @eatplaynap 
  - ↑ありがとうございます:sob:

- @haruguchi
    - 誤訳が本気出してきた

### 今日心に残った誤訳

- 豚の始まり
    - (なんか罵られてる気がする)