# 【第2週】流麗なJavaScript輪読会 (2022\-02\-28\~2022\-03\-04)

[![hackmd-github-sync-badge](https://hackmd.io/luViSCMwRNWcdIiCV_LYjQ/badge)](https://hackmd.io/luViSCMwRNWcdIiCV_LYjQ)

###### tags: `流麗なJS`

[**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)  
[Eloquent JavaScript 英語原文](https://eloquentjavascript.net/)  
[公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)  


## 目次

[TOC]

## 2022\-02\-28

### 司会
- @eatplaynap

[タイマー](https://timer.onl.jp/)

### ドライバー
- @yatsuhashi 

### スタート地点
- コードのインデント(p46)から

### 疑問点・気づき
#### 練習問題の途中(p52)まで


- @kasai441 
    - JSのforループは自分にとってプログラミングとの出会いなので、思い入れがあります。
        - for を３回くらいネストさせて色々書いていた記憶がある。
    - しれっとパラグラフを飛ばされていた...
    - JS switch case
        - Ruby case when
    - コメントで吟遊してはいけない
    - いまのところプラクティスはスムーズで、やれそう感


- @eatplaynap 
  - switchは各case内でbreakしないと次のcaseに行ってしまうので不便
  - JSでswitch使ったことがないなあ
  - 「ディスパッチ」の意味があんまりわからん
  - 「ループからの脱却」で段落が1つ訳し忘れられている
    - > If you create an infinite loop in one of the examples on these pages, you’ll usually be asked whether you want to stop the script after a few seconds. If that fails, you will have to close the tab that you’re working in, or on some browsers close your whole browser, to recover. 

- @yatsuhashi 
    - おしゃれなFizzBuzzを見た
    - `||`の挙動がRubyと違うのはハマりそう(falsyの場合右へ)
        - null, NaN 0, 空文字列, undefinedがfalsy
    - `??`はnullishの場合右へ
        - null, undefinedがnullish


- @haruguchi
    - ループから脱却するにはbreakを使う、次のループに行くにはcontinue(rubyはnext)
    - switchは各節でbreakしないと次の節も実行してしまう
    - `++`, `--`は便利
    - コメントが文学的だと困る
    - コンストラクタは大文字から始まるが気にするな！

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - エクササイズが面白かった
    - 労働市場での価値が上がって嬉しい
  - YatzHackMD作ってくれてあざす😭

- @haruguchi
    - 練習問題面白かった
    - Rubyにもforとかwhileとかあるけどほぼ使わないなー

- @kasai441 
    - みんな練習問題で息を吹き返していた

- @yatsuhashi 
    - 練習問題楽しい
    
    
## 2022\-03\-01

### 司会
- @haruguchi

[タイマー](https://timer.onl.jp/)

### ドライバー
- @misosoup

### スタート地点
- 練習問題 チェスボード(p.53)

### 疑問点・気づき
#### バインディングとスコープの途中(p.57)まで

- @kasai441 
    - チェスボード問題
        - x座標 + y座標 が偶数の時と奇数の時で判定すると、市松模様になるの、自分では思いつけなさそうだったので凄い...
    - varもletも定義するより前から呼び出せるの気持ち悪い。
    - スコープ
        - varはifとかforとかのブロックでスコープを作らないので、ブロックの外から呼び出せる
        - let, constは作るので呼び出せない

- @haruguchi
    -　letもvarもconstも宣言より先に参照できるのびっくりした。(varだけだと思ってた)
    - letやconstはブロック内で定義したらブロックスコープ
    - Rubyと微妙にスコープが違うから注意したい(var)


- @yatsuhashi 
    - haruguchiさんの頭脳が冴えわたる
    - JavaScriptの関数は`return`が戻り値を決定する
        - `return`がない場合`undefined`を返し、`return`の後に式がない場合も`undefined`を返す
    - 関数は、1つのステートメントだけで構成されていても中括弧で囲む必要がある
        - if文だと囲まなくても大丈夫（囲んでるけど）


- @daisuke-kiku 
    - letとvarの挙動の違いが改めてわかった。
    - チェスボードの問題むずい。
    - 座標の考え方がとても参考になった。
    - グローバルスコープとローカルスコープを意識するようにする。


- @eatplaynap 
  - console.logが実行されるたびに改行が行われる
  - 変数の巻き上げ気持ち悪い。変数が定義される前に使えるのであればどこで定義されているか見つけるとき見なきゃいけない範囲が広すぎる
    - [関数とスコープ · JavaScript Primer \#jsprimer](https://jsprimer.net/basic/function-scope/#hoisting-var)

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - harugichiさんの労働市場での価値が上がりまくっててよかった
      - ⤴️
  - Eloquent JS用コンソールが便利
  - 最近またBotが寝てしまうことが増えたのでデプロイ業務復帰しなきゃかも😭

- @haruguchi
    - 早く労働市場で社会の一員になりたい!
    - 練習問題AtCoder感があって面白い

- @daisuke-kiku 
    - 練習問題をいろいろな解き方でやり直してみたい。
    - 

- @kasai441 
    - letの巻き上げを初めて知って、JSへの好感度が⤵️

- @yatsuhashi 
    - 中学校の内容を忘れていることがわかった
      - ワシも中学校卒業しているはずなのに…

## 2022\-03\-02

### 司会
- @kasai441 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @misosoup

### スタート地点
- ネストしたスコープ(p.57)から

### 疑問点・気づき
#### 任意の引数(p.63)まで

- @eatplaynap 
  - バインディングを可視化する方法をレキシカルスコープと呼ぶ
    - ちょっと意味がわからないけどレキシカルスコープという言葉を知ったのでメモ
    - 静的スコープと一緒
  - 関数で定義した分に足らない引数を指定して呼び出しても、足りない部分でエラーにならずにundefinedが入って動く

- @kasai441 
    - アロー関数
        - 引数一つの場合は()を省略できる
        - 引数なしの場合は()が必要
        - ブロックが1行の場合は{}が省略できる
            - リターンも省略できる
                - ここだけRubyっぽい
    - 呼び出し時、引数が多くても少なくても動いてしまうのでキモい
        - 制御の仕方が4章に出てくるそうなので、期待

- @haruguchi-yuma 
    - あと1時間あると思って二度寝したらダメなことがわかった
    - 僕も理由がない限りアロー関数使ってます(Vue.jsは使いにくい)
    - コールスタックがパッと読めない、、、
    - JSの引数の寛容。Proc.newで作ったブロックみたいな挙動


### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - フムスの詳細な説明があって、珍しく日本語版が親切だった
  - 例に出てくるコードがやっぱりちょっと変で面白い
  - ふりがなJSにアロー関数 `= () =>`はおでんみたいって書いてあってそれで覚えた


- @ajitama6
    - rubyと仕様が異なる部分が出てきて少々混乱する。Javascriptプラクティスで死にそう。
        - この本にしては内容は頭に入ってきた。
        - 引数のところとか、やるときに忘れてて苦しみそう

- @yatsuhashi 
    - 正誤表作ってます　:sugoi:

- @haruguchi
    - 怠慢。油断。早起きしたときこそ慎重に生きていきたい。

## 2022\-03\-03

### 司会
- @yatsuhashi

[タイマー](https://timer.onl.jp/)

### ドライバー
- @misosoup

### スタート地点
- クロージャ(p.63)から

### 疑問点・気づき
#### 関数の成長(p.69)まで

- @kasai441 
    - 写経します（関数をreturnして変数に入れると変数が関数になる）
```js
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// => 10
```

- @haruguchi
    - 関数を返す関数があって、内側の関数から外側の変数を参照すると外側の関数の呼び出しが終わってても変数が参照し続けられるため、データを保持できる
    - 数学は実行コストがかからないので、再帰で書くことが多く個人的には読みやすいですが慣れの問題かもしれません。ただ、例の場合はループの方が遥かに良さそう。
    - １つの関数で何でもやるとそれ専用のフレームワークとなりがち。責務を分けて、汎用的な部品の組み合わせでコードを書いていきたい。


- @yatsuhashi 
    - 今の所絶対に書けない再帰

- @eatplaynap 
  - 単純なループを多用するより再帰の方がエレガントで人間にとって読みやすいというのは、プログラムが大きく複雑にならないと実感しづらいなあと思った。haruguchiさんのような方なら読みやすいんだろう…
  - 後半はリーダブルコードみがあって納得度が高かった

### 振り返り(よかった点・次回に向けての改善点等)

- @yatsuhashi 
    - 祝 誤表記なし
        - :tada:
        - 全角半角はもう誤表記に数えないことにした
            - ;;
        - :10:
- @kasai441 
    - 再帰むっず
      - :sorena:

- @eatplaynap 
  - 練習問題予習しておこうかな😇解ける気がしない…

- @haruguchi
    - 再帰のやつ昔、素因数分解で数字探索するアルゴリズムを手書きする授業があってそれを思い出した。

## 2022\-03\-03

### 司会
- @kasai441 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @yatsuhashi 

### スタート地点
- 関数とサイドエフェクト(p.69)から

### 疑問点・気づき
#### 練習問題 再帰(p.71)まで

- @kasai441 
    - 練習問題、みんなでやるとスムーズ。
        - 自分達で解いて解答例を見るのが楽しい。
        - 解答例が結構、流麗
            - 日本語は`isRyurei()`

- @eatplaynap 
  - 再帰の練習問題が再帰を理解するのにちょうどいい難易度で良かったけど日本語訳はかつてないほどひどかった(`-1`を`1`と誤訳？するのはひどすぎない？？)
      - おかねかえしてほしい
          - `return money;`

- @haruguchi
    - 再帰の問題は模範解答で負の数が渡ってきたとき、正の数に反転する回数を減らす工夫がされていてなるほど！と思った。`if (n < 0) return isEven(-n)`
    - min関数は可変長の場合もやってみたいと思った。　(jsにも<=>あるのかな？)
        - たし🦀〜。やり方は 2 種類あって、そのうちの 1 つは reduction を使うとできると思います。

- @cafedomancer 
    - 関数は、副作用 (side effect) という性質を持っていたり持っていなかったりする
    - 副作用を持たない関数は、純粋関数 (pure function) と呼ばれる
    - 再帰関数のなかで、それぞれの条件がパターンマッチのように書かれているのが、数式そのもののようで美しい
    - 「日本語は流麗じゃない」

- @yatsuhashi 
    - サイドエフェクトの考え方、この本で初めて知った

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - リファクタリングするときれいになっていいですね
  - 週1回練習問題があるとモチベーションが保てる

- @yatsuhashi 
    - 正誤表が捗る捗る
      - なぜですしょう……
    - モブプロしてから解答例を見ると納得感がある
        - 🦀
    - haruguchiさんが`数`をすうと読んでいるのが先生っぽい
        - 確かに！数学ではほぼ数（すう）って読みますね。

- @haruguchi
    - 場合わけが綺麗だと読み手に負担がなくていいなぁ。

- @cafedomancer 
    - 関数の中身を実装し始める前に、定義した関数が動くことを確認してみるアクションが良かった

- @kasai441 
    - Yatsさんが練習問題の時だけすすんでドライバーをしてくれる
      - なぜですしょう
