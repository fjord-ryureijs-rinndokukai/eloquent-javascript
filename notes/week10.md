# 【第10週】流麗なJavaScript輪読会 (2022\-04\-25\~2022\-044\-29)

[![hackmd-github-sync-badge](https://hackmd.io/iX81QkulSOaCDzoUxZ2k4Q/badge)](https://hackmd.io/iX81QkulSOaCDzoUxZ2k4Q)


###### tags: `流麗なJS`

[**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
[公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)



## 目次

[TOC]

## 2022\-04\-25

### 司会
- @haruguchi

[タイマー](https://timer.onl.jp/)

### ドライバー
- 

### スタート地点
- バックトラック(p.174)から

### 疑問点・気づき
#### RegExpオブジェクトの動的な作成(p.179) まで

- @haruguchi
    - バックトラックは`(.+)*`とか`(.+)+`とか2重ループするとヤバそう。
    - +や*の後に?をつけるとできるだけ最小の文字列にマッチする

- @c4f3d0m4nc3r 
    - `replace()` メソッドには関数を渡せる
        - `fuction ($&, $1, $2, ...) { ... }` のような関数
        - `replaceAll()` にも渡せるのかな？
    - `replace()` と `replaceAll()` で全部置換したいなら `replaceAll()` を使うかな

- @ea+p|aynap 
  - 私もアカウント名変えてみました
  - replaceメソッドにgオプションを渡すと文字列内のすべてのマッチが置換される

- @yatsuhashi
    - `$&`はマッチした文字列全体をさす
    - 繰り返し演算子は貪欲（可能な限りマッチし、そこからバックトラックする）
### 振り返り(よかった点・次回に向けての改善点等)

- @yatsuhashi 
    - GWは間の平日も含めておやすみ


- @eatplaynap 
  - 今更ですけど、正規表現の章はドライバーが必要だったかも…


- @haruguchi
    - HackMDをGit管理する方法？で何か参考にした記事ありますか？
      - 公式のページを読んだような…
      - https://hackmd.io/c/tutorials/%2Fs%2Flink-with-github 
      - ありがとうございます！


- @cafedomancer 
    - 花粉症で目がかゆくなってきた
        - お大事に(白樺ですか？)
            - そうです！


### 今日心に残った誤訳

p176 replaceメソッド
誤：さら$9まで置き換えられます。
正：さらに$9まで置き換えられます。

誤: 結合 (get bound to)
正: 束縛

誤: \b[01]+b|[adding-f]+h|...
正: \b[01]+b|[\da-f]+h|...


## 2022\-04\-26

### 司会
- @cafedomancer 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @eatplaynap 

### スタート地点
- 検索方法(p.179)から

### 疑問点・気づき
#### INIファイルの解析の途中(p.183) まで


- @haruguchi
    - execメソッドの返り値はマッチした最初とキャプチャしたもの
    - g,yフラグが有効な場合はlastIndexが更新される
    - exec使うときはちょっと注意してコードを見ないといけなさそう

- @yatsuhashi 
    - 混乱はJavaScriptの正規表現インターフェイスの本質的な特徴
    - g,yオプションが有効で、マッチがexecメソッドを通して行われる場合のみ、lastIndexが有効

- @cafedomancer 
    - global オプション (`g`) や stikcy オプション (`y`) をパターンに指定するとマッチが stateful になる
    - global オプションを設定して `RegExp.prototype.exec()` を実行してもマッチしたものすべてが返ってくるわけではない。`exec()` の return value はあくまで `[マッチ全体, キャプチャ1, キャプチャ2, ...]`


- @eatplaynap 
  - execメソッドではなくmatchメソッドを使いたい
  - `y`はstickyの`y`(納得いかない…)

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - コードの実行前に予想を立てるのは戦略的console.logなのでよかった
      - コードを動かす前にどうなるかを考えてみるのはめっちゃ大事！
  - やっぱりいろいろ試すとわかりやすい

- @haruguchi
    - 正規表現読むのだんだん慣れてきた。JSのメソッドの仕様は難しかった。

- @yatsuhashi 
    - 普通に正規表現の知識が足りないとこがある

- @cafedomancer 
    - 箇条書きがなんかハイフンで書かれていて気になった...
    - 正規表現を書きまくっていると文字からだんだん図が見えてくる (マトリックスみたい)

### 今日心に残った誤訳
今日はない？

## 2022\-04\-27

### 司会
- @haruguchi-yuma 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @cafedomancer 

### スタート地点
- INIファイルの解析の途中(p.183)から

### 疑問点・気づき
#### 練習問題 正規表現ゴルフ(p.186)まで

- @haruguchi
    - 絵文字はコードユニットが複数あるのでuフラグをつけて対応する
    - アルファベットの意味がわかった
    - 漢字だけマッチするとかひらがなだけとかあるんだろうか？

- @cafedomancer 
    - アルファベットとは文字体系のこと
        - ラテンアルファベットは ABC ... XYZ
        - ギリシャ語のαアルファβベータが語源らしい (たしかに)
    - JavaScript のエンコーディング方式はなんだっけ？ UTF-16？

- @SatoshiHaramura
    - 正規表現は、文字ではなく、コードユニットに対して動作している
        - コードユニットとは??の状態なので調べてみます
            - Unicode 文字列をどう符号化するか、です！ JavaScript は UTF-16 を採用しているので、16 ビットで文字が表現されています
            - [文字列とUnicode · JavaScript Primer \#jsprimer](https://jsprimer.net/basic/string-unicode/#code-point-is-not-code-unit)
                - ありがとうございます！読んでみます

- @yatsuhahsi
    - Alphabeticはbinary(boolean-like)オプション
        - boolean ってことねー

- @eatplaynap 
  - p.181の特殊文字はβ(ベータ)だったのか…。馴染みがなくてß(ドイツ語のss)かと思った
    - ßでよさそう
  - JS PrimerのUnicodeの章は面白かった記憶

### 振り返り(よかった点・次回に向けての改善点等)
- @haruguchi
    - あいかわらず、コード例が凝ってて面白い。

- @eatplaynap 
  - MDN読むと拾えてない知識が拾えていい
      - +1


- @SatoshiHaramura
    - 正規表現が苦手なので、この例題で慣れていこうと思います

### 今日心に残った誤訳
- まとめの`The g option makes the expression global,`が省略？されていてiオプションでglobal置換出来るような表記に…


## 2022\-04\-28

### 司会
- @eatplaynap  

[タイマー](https://timer.onl.jp/)

### ドライバー
- @haruguchi-yuma

### スタート地点
- 練習問題 正規表現ゴルフ(p.186)から

### 疑問点・気づき
#### 練習問題 引用のスタイル(p.186)まで

- @haruguchi
    - 最初簡単とか言ってたけど、ちょっと捻られると難しいな、、、
    - [^\We]が勉強になった !(\W || e) <=> \w && !e
        - ドモルガンですね


### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 問題が解けてよかった
  - コードゴルフのルールはよく分からないかも

-　@haruguchi
    冷静になったらできそうだけど、冷静になれない
    

- @yatsuhashi 
    - ちょっとはできた

- @SatoshiHaramura
    - `\b`の単語境界を知らなかったです...
    - その他の正規表現もp.185やp.167のまとめを見ながら、理解していくので精一杯でした💦
### 今日心に残った誤訳

p186 引用のスタイル
誤：この2種類の引用の使い方を
正：この2種類の引用符の使い方を