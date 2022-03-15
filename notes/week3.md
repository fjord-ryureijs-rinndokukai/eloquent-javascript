# 【第3週】流麗なJavaScript輪読会 (2022\-03\-07\~2022\-03\-11)

[![hackmd-github-sync-badge](https://hackmd.io/5GB4XU9GQyujrneOF6kP3Q/badge)](https://hackmd.io/5GB4XU9GQyujrneOF6kP3Q)

###### tags: `流麗なJS`

[**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
[Eloquent JavaScript 英語原文](https://eloquentjavascript.net/)
[公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)


## 目次

[TOC]

## 2022\-03\-07

### 司会
- @haruguchi

[タイマー](https://timer.onl.jp/)

### ドライバー
- @kasai441 

### スタート地点
- 練習問題 豆の数え方(p71)から

### 疑問点・気づき
#### Chapter4プロパティ(p.75)まで

- @haruguchi
    - 文字列においてfor in(indexがとれる) と for of(1文字ずつとれる）では意味が変わることを知った。
    - RubyのオブジェクトとJavaScriptのオブジェクトが違うような同じようないつも変な感じがする(Rubyにプリミティブ型がないから余計に)

- @kasai441 
    - ウェルス・リス
        - were-squirrel
        - 半人半ネズミ
    - 配列は、また、ちょっとRubyと違うので、気をつけなければならなそう。
        - Rubyだと、自分で作ったメソッドを`.`を使って呼び出すには、classを使わなければならない。

- @yatsuhashi 
    - for in はインデックスを取り、for of は値を取る


### 振り返り(よかった点・次回に向けての改善点等)

- @yatsuhashi 
    - 解答例と同じコードでテンションが上がった🙌

- @haruguchi
    - 練習問題、最後のやつが意外と簡単だった！
    - ウェルス・リスの謎気になる。

- @kasai441 
    - なんか人数少なめですね...

## 2022\-03\-08

### 司会
- @kasai441 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @misosoup

### スタート地点
- Chapter4 メソッド(p.75)から

### 疑問点・気づき
#### Chapter4 リス人間の日誌(p.82)まで
- @haruguchi
    - ざっくりとした意味を考えたんですが、分子は偏りを表していて、それぞれ4項目に差がなければ0になるような計算になってます。つまり式全体は0相関なし、
    - 分母は相乗平均と言って割合の平均的なものを出してるのかな？
    - JSでは文字列はプリミティブ型でイミュータブル（Rubyはミュータブル：破壊的変更できる）
    - オブジェクトは中身がおんなじでも同一ではない( `{a: 1} == {a: 1} // => false`)

- @kasai441 
    - オブジェクトがなにげにむずかしい
        - deleteでプロパティを消せる
        - プロパティの省略した書き方
            - let hoge = 1;
            - let fuga = { hoge: hoge }
        - のような場合
            - let fuga = { hoge }
        - でよい

- @eatplaynap 
  - [in演算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
  - [delete演算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
    - 知らなかった
  - p.77の1文飛ばしはヤバい
    - It is possible to assign a value to a property expression with the = operator.

- @misosoup160 
    - 昨日お休みしてしまったので突然のリス人間に動揺した🐿
    - けど2版読んでたときに出てきたのを思い出しました


### 振り返り(よかった点・次回に向けての改善点等)
- @misosoup160 
    - みんな普通に原文を見ながらできていてえらい（本がやばい）

- @kasai441 
    - 朝から怖い本を読む会　:scream:

- @eatplaynap 
  - やばい翻訳を読む楽しみもある(試されている感)
  - スリルがある輪読会

- @yatsuhashi 
    - p2にサポートページのURLがあったので入力したら存在しないって言われた
      - ！？！？！？
    - ご意見がありましたら下記までFAXにてご連絡ください、の下記がない
      - いろいろ何！！ふぁ、FAX

## 2022\-03\-09

### 司会
- @kasai441 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @eatplaynap 

### スタート地点
- Chapter4 相関関係の計算(p.82)から

### 疑問点・気づき
#### Chapter4 さらなる配列学(p.87)まで

- @haruguchi
    - コード追うためにJOURNAL見たらめちゃくちゃデータ入ってた！
    - tableForのリス化してたらindex+=2するのめちゃテクニカルだと思った！
    - JSのsliceは始めと終わり、RubyのArray#sliceは始めと個数
        - ややこしい

- @kasai441 
    - P87のtableForが難しかった。
    - 仕事がなければ医療サービスが受けられない国...

- @eatplaynap 
  - こんなにJSが書ける人でもいちど仕事を失ったらリス人間として働かなければいけないアメリカは恐ろしい
      - :squirrel:
  - φ係数を計算する関数は昨日数式の解説をしてもらっていたので分かったけど、tableFor関数は難しかった
  - shiftとunshiftという名前は直感的に何のことか分からないので改名してほしい

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - ジャックの最期が悲しかった🥜🪥

- @kasai441 
    - めちゃめちゃ眠くて、ぐだぐだしてしまいました。人がいっぱいいるときだったら、後方腕組みしてたんだけどなー

- @haruguchi
    - ジャック、、、、森で仕事は見つかったんだろうか？

## 2022\-03\-10

### 司会
- @eatplaynap 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @misosoup160 

### スタート地点
- Chapter4 文字列とそのプロパティ(p.87)から

### 疑問点・気づき
#### Chapter4 JSON(p.93)まで

- @haruguchi
    - 文字列はプリミティブ型だけど便利なプロパティがある。確かJSprimerで暗黙の型変換が起きてると言ってた気がする
    - 分割代入は慣れるまで本当に読めない
    - JSON.stingifyってなんでstringifyっていうんだろ？と思っていたらオブジェクト全体を文字列化してるからか！JSONの最初の方のメモリの話はよくわからん！シリアライズ化？
```javascript=
let [a, b] = [1, 2]
a //=> 1
b //=> 2

let {a} = {a: 1, b: 2}
a //=>1

let {a: {b}} = {a: {b: 2}}
a //=> {b: 2}
b //=>2
```


- @eatplaynap 
  - p.91のrandomPointOnCircle関数ははるぐちさんの解説のおかげで理解できた
    - アークサイン、アークコサイン、アークタンジェント
  - JSのオブジェクトはJSON.stringifyでJSON形式に変換できて、JSの型としてはString
  - 逆にJSON形式の文字列をJSのオブジェクトとして使いたい場合はJSON.parse()してオブジェクトに戻さないとプロパティにアクセスできない
  - JSではvarやletやconstを使わなくても変数の宣言ができるけど、そういう形で宣言した変数はグローバルスコープに入ってしまい超危険
    - ↓リーダブルコードの該当箇所の引用

In JavaScript, if you omit the keyword var from a variable definition (e.g., x = 1 instead of var x = 1), the variable is put into the global scope, where every JavaScript file and <script> block can access it. Here is an example: 
```html
<script>
    var f = function () {
        // DANGER: 'i' is not declared with 'var'!
        for (i = 0; i < 10; i += 1) ...
    };

    f();
</script>
```
This code inadvertently puts i into the global scope, so a later block can still see it:
```html
<script>
    alert(i);  // Alerts '10'.  'i' is a global variable!
</script>
```

Boswell, Dustin; Foucher, Trevor. The Art of Readable Code (p.132). O'Reilly Media. Kindle 版.


- @kasai441 
    - `"文字列".a = "a"`のような書き方でも実行できるが、文字列のプロパティには実際は追加されない。
    - 関数の引数に`...hoges`と定義しておくと、複数の引数を渡した場合に配列hogesとして関数内で扱うことができる。
    - 分割代入 オボエタ
        - let {name} = {name: 'hoge', fuga: 'fuga'}

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - うめもとさんも分からないと言ってる非同期の章読むの怖い :nani!:


- @haruguchi
    - 流麗説明は結構あっさりしてるので補完が必要そう。
    - 可変長引数をとるmin関数を2種類書いたけど、１つは書き方が同じで嬉しかった！
      - 労働市場での価値UP！

- @kasai441 
    - 何気にオブジェクトは勉強になりました。
        - 索引がないので付箋を貼りまくっている。
        - 日本語の本にリスペクトがないので、遠慮なく書き込みを入れている。
        - この感じ何かに似てると思ったけど、自費出版してる大学の教科書とかに近い。

### 今日心に残った誤訳

- p.92のphi関数の中身、割り算の`/`が書かれてない

## 2022\-03\-11

### 司会
- @kasai441 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @haruguchi 

### スタート地点
- Chapter4 まとめ(p.94)から

### 疑問点・気づき

#### Chapter4 練習問題 範囲の和(p.94)まで

- @haruguchi
    - セミコロンは忘れてしまう;
        - vscode で書いて formatOnSave で prettier をかけて貼っ付けるのがよさそう。vscode.dev でも使えるかも。
    - これから日本語の文章にも使って慣れていきたい；
    - 最後にreverseするバージョン書けそうな気がするな🤔後でやってみる；

- @cafedomancer
    - for ... of 初めて使った
        - 高階関数 (関数を受け取ったり関数を返したりする関数) の説明がこのあとに来ているから forEach ではなく for ... of なのかな？
    - step: 0 のバグを見つけた :bug: 
    
- @kasai441 
    - reduceで配列の総計を簡単にできる
```js
array.reduce((total, a) => total + a, 0);
```

- @eatplaynap 
  - ほぼお手本と同じコードになってた
      - :tashikani:
  - 関数の引数部分に式を書けるの知らなかった
      - :washimo:


### 振り返り(よかった点・次回に向けての改善点等)

- @cafedomancer 
    - 進むの速い！

- @kasai441 
    - 一問で終わってしまった
    - だんだん複雑になってきた

- @haruguchi
    - Yatzの試験に流麗が役に立ってよかった！

- @eatplaynap 
  - せっかくみんなで考えてコード書いてるからどこかに残したい。Yatzと相談して輪読会用のリポジトリつくろうかな？

### 今日心に残った誤訳

- 新コーナーw
- 誤訳じゃないけど[お手本のコード](https://eloquentjavascript.net/code/#4.1)はstart > endのときrange関数の第3引数が0の場合が考慮されてなくて(5,2,0)を与えたら壊れちゃった
- 「オブジェクトはそのプロパティに名前を使い、多かれ少なかれ固定のセットを保存する傾向があります。」
- ヒントの訳がない