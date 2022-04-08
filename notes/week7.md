# 【第7週】流麗なJavaScript輪読会 (2022\-04\-04\~2022\-04\-08)

[![hackmd-github-sync-badge](https://hackmd.io/bWjiCYXVTSOuLwEE2TIUbg/badge)](https://hackmd.io/bWjiCYXVTSOuLwEE2TIUbg)

###### tags: `流麗なJS`

- [リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)
- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)



## 目次

[TOC]

## 2022\-04\-04

### 司会
- @kasai441 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @misosoup160 

### スタート地点
- イテレーターのインターフェース(p.127)から

### 疑問点・気づき
#### 継承(p.131)まで

- @haruguchi
    - Rubyだとeachメソッドを実装したらイテレート可能なオブジェクトが作れるけど、JSの場合は結構ややこしそう。
    - ただ、作れるので便利かもしれない（？）
    - 対称行列のイメージ
```javascript=
[
    ['0 0'], ['1 0'], ['2 0'],
    ['1 0'], ['1 1'], ['2 1'],
    ['2 0'], ['2 1'], ['2 2']
]
```

- @kasai441 
    - イテレーターの定義のところは、ループの終了条件などを書いているので、自分で書いたらハマりそう。
    - めちゃめちゃさらっと説明されていてむずい。 

### 振り返り(よかった点・次回に向けての改善点等)
- @misosoup160 
    - 月曜から起きて参加できたぞ
    - 6章読み返しとくって言ってできてないから章末問題に入る前までには読みたい。読みます。

- @yatsuhashi 
    - 急に難しくなったな...?　

- @haruguchi
    - 今日も少し、数学的な話だった。Matrixとか(プロパティがwidthとheightがややこしい)
    - 分割代入がサラッと使われていて読むの難しい

### 今日心に残った誤訳

次の関数→nextメソッド 


## 2022\-04\-05

### 司会
- @kasai441 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @yatsuhashi 

### スタート地点
- 継承(p.131)から

### 疑問点・気づき
#### 練習問題 groupの途中(p.133)まで

- @haruguchi
    - Group.from([10, 20])は[10, 11, 12, ... , 20]なのか20は含まないのか？わからなかった
        - 勘違いしてました。これは[10, 20]のみということですね。
    - has→add→fromで実装した方が簡単そうだと思った。
    - staticはRubyでいう特異メソッド（クラスメソッド）みたいなもんで、インスタンスを生成する必要がないときや、逆に複数のインスタンスを生成するときにも使われるイメージ

- @kasai441 
    - 継承があまりお勧めでないという話。そうなんだ。
        - 移譲というのがよいらしい。
    - static
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
> Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

- @yatsuhashi 
    - ```ruby
        class Bar
          def bar(obj)
            obj.bar
          end
        end
        ```
    - ↑移譲

- @eatplaynap 
  - staticメソッド内でのthisはクラス自身になる
  - 継承より委譲

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap
  - 眠くて辛いので起きれないというより寝るのが幸せなので起きたくない

- @yatsuhashi 
    - static勉強します

- @haruguchi
    - 眠い、花粉かな？目が痒い

### 今日心に残った誤訳


## 2022\-04\-06

### 司会
- @yatsuhashi 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @kasai441 

### スタート地点
- 練習問題groupから

### 疑問点・気づき
#### 練習問題 イテレート可能なgroupまで

- @haruguchi
    - Hogeクラスには[Symbol.iterator]() メソッド作る
    - HogeIteratorにはnext()メソッドを作り、iteratorの状態をオブジェクトで返すメソッドを作る

- @kasai441 
    - staticはぜんぜんわからなかった
    - iteratorはぜんぜんわからなかった

### 振り返り(よかった点・次回に向けての改善点等)
- @kasai441 
    - 遅刻してきていきなりドライバーをやったので、誰が来てるか、いなくなったのかわからなかった :ase:

- @fuwa
    - 初めてラジオ参加しました〜難しくてよくわからなかったです！
        - 今日のやつは難しいです:cry:
    - JavaScriptわからないことが多すぎるので基礎的なところをもう一度やり直した方が良いかなと思いました。
    - 朝起きるのつらいですね。。

- @haruguchi
    - 初めてのJavaScriptでイテレート可能なオブジェクトやったことあったのでイメージできました。

### 今日心に残った誤訳

なし

## 2022\-04\-07

### 司会
- @eatplaynap 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @yatsuhashi 

### スタート地点
- 練習問題 イテレート可能なgroup(p.133)から

### 疑問点・気づき
#### Chapter7 メドウフィールド(p.138)まで

- @haruguchi
    - プロトタイプのメソッドを呼び出したいとき
        - `Object.prototype.hasOwnPropaty.call(this, args)`
    - 6章の練習問題は意外とサクッと行けた？

- @yatsuhashi 
    - 値と値を関連付ける（名前と年齢等）データ構造をmapと呼び、javascriptだとオブジェクトで表現できる
        - ```javascript
          let ages = {
              Boris: 39,
              Liang: 22,
              Julia: 62
          }
          ```
          
- @eatplaynap 
  - mapはややこしい
    - キーとvalueを関連付けるデータ構造

- @kasai441 
    - Object.prototype.hogeMethod.call(Hoge, 'fuga')
        - Hogeオブジェクトの後ろに隠れているオーバーライド前のhogeMethodを引数'fuga'を渡して実行する？

### 振り返り（よかった点・次回に向けての改善点等）

- @eatplaynap
  - ヒントが翻訳されてることが分かって良かった。なめてて申し訳ない

- @haruguchi
    - 7章はハンズオン的な感じなのかな？
    - オートマトン少し勉強したことあるけど、難しすぎて挫折したのでここでマスターしたい！

- @yatsuhashi 
    - ハンズオン楽しい
    
### 今日心に残った誤訳

WEB版のコンソール  
{'hoge': ...}  
...を展開すると変な感じになる

## 2022\-04\-08

### 司会
- @yatsuhashi 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @cafedomancer

### スタート地点
- Chapter7 課題について(p.138)から

### 疑問点・気づき
#### Chapter7 シュミレーション(p.141)まで

- @haruguchi
    - コードが難しかったけど、少しずつ何をやってるか理解できてよかった。
    - １つのオブジェクトが状態を更新するのではなく、新しくオブジェクトを生成して状態を更新するのがポイントっぽい
    - 配列の要素数がnのとき`Math.floor(Math.random() * array.length)`で0〜(n-1)のランダムな値が取れるのなるほどと思った
        - `Array#sample` もできない JavaScript さん...。Ruby はべんりだな〜！


- @yatsuhashi 
    - 永続のところ、最初わからなかったけどオブジェクトを変更するのではなく新しいオブジェクトを作ったほうが状態が追いやすいよ、ということだと理解しました

- @kasai441 
    - 関数がいっぱい出てきて、どこがどうなっているのか、把握しきれていない...
    - ロボットが動くところをみたらすごいテンション上がった

- @cafedomancer 
    - クラスメソッド (static メソッド) は、クラス (関数オブジェクト) のメソッド (関数プロパティ) として定義するんだ
        - `static` キーワードもあるけど https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
    - TypeScript だと `readonly` という機能がありますよ、`Object.freeze` のやつ。
    - 前の世代から次の世代を生成するのはライフゲームみたいだった
        - https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0
        - オートマトンなんだなこれ

```ts
let object: {readonly value: number} = {value: 5}
object.value = 10
```
![](https://i.imgur.com/vQokngv.png)

### 振り返り（よかった点・次回に向けての改善点等）

- @eatplaynap 
  - runRobotAnimationでドット絵の中でロボットが実際にランダムに動いてるのがかわいくて感動した
  - 今日は7週のHackMDが貼ってあってよかった

- @cafedomancer 
    - `runRobotAnimation` の説明を読んでよかった
        - Gather みたいだった

- @yatsuhashi 
    - 終わりよければすべてよし感がある

- @haruguchi
    - ロボットが健気で可愛かった。

### 今日心に残った誤訳
いちばんテンション上がるロボット動くやつをばっさりカット