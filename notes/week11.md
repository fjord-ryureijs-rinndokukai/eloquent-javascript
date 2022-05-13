# 【第11週】流麗なJavaScript輪読会 (2022\-05\-09\~2022\-05\-13)

[![hackmd-github-sync-badge](https://hackmd.io/VyqbMmAfQgSxj6Dkn2KWIQ/badge)](https://hackmd.io/VyqbMmAfQgSxj6Dkn2KWIQ)


###### tags: `流麗なJS`

- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)
- [fjord\-ryureijs\-rinndokukai/eloquent\-javascript: 流麗なJavaScript輪読会用リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)



## 目次

[TOC]

## 2022\-05\-09

### 司会
- @eatplaynap

[タイマー](https://timer.onl.jp/)

### ドライバー
- @cafedomancer

### スタート地点
- 練習問題 引用のスタイル(p.186)から

### 疑問点・気づき
#### 練習問題 再び数字について(p.187) まで


- @cafedomancer 
    - 正規表現はいきなり全部にマッチするようなものを書くのではなくて、とりあえず愚直に書いてから集約?共通化?するほうが良さそうだな
        - でもあんまりやりすぎるとメンテナブルじゃなくなってしまう 🤷


- @haruguchi
    - パッとみると呪文にしか見えない
    - 全体を大きく俯瞰して分割してから考えるのも良さそうだと思った（符号、数字まわり、指数部みたいな）


- @yatsuhashi 
    - 分割して考えるのはやりやすかった
        - 統合を考えるのが少し大変

- @eatplaynap 
  - 思いつきで書いてると「あちらを立てるとこちらが立たない」状態になりそうなので、あらかじめ大枠のパターンを見極めておくのが大事そう

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - やっぱり流麗JSは難しい😢

- @haruguchi
    -  GWが終わったが別に毎日ゴールデンだった
    
- @cafedomancer
    - 起きれない...
    - ゴールデンウィークなにもせずにおわった :innocent: 
        - そば打てなかった。そば食べたい　　:+1:

- @yatsuhashi 
    - 流麗JSの勘を取り戻さねば


## 2022\-05\-10

### 司会
- @yatsuhashi 

[タイマー](https://timer.onl.jp/)

### ドライバー


### スタート地点
- Chapter10 モジュール(p.188)から

### 疑問点・気づき
#### CommonJS(p.194) まで

- @cafedomancer
    - 「module インタフェースと object インタフェース」のところが何のことを指しているのか全くわからなかった
    - モジュールレベルのインタフェースとオブジェクトレベルのインタフェースのはなしっぽい

- @haruguchi
    - モジュールシステムができる前は
    - 即時関数などのテクニックはvarのスコープによるところが大きいのかなと感じた
    - モジュールシステムがないなんて考えられない:scream:
    - npm50万以上あるけどそのうちの大部分はくだらないらしい。


- @yatsuhashi 
    - 定義と同時に実行する即時関数
    - npmがないとだいぶ辛そう

- @eatplaynap 
  - Functionコンストラクターで関数が定義できるの知らなかった。JSはいろんな関数定義方法があるなー
    - [Function\(\) コンストラクター \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
  - 2015年までJSにはモジュールがなかった:eyes: ES2015は偉大
  - [yazawa](https://www.npmjs.com/package/yazawa)

- @SatoshiHaramura
    - 即時関数は、最後に`()`をつけることで即時実行されるようになっている
    ```javascript=
    function() {
    }()
    ```
    
    - Functionコンストラクタ初めて知りました



- @eatplaynap 
  - たまたまタマキさんのnpmの話をしてたけどタイムリーにnpmのことが出てきてよかった


- @haruguchi
    - モジュールわかるようでわかってないのでわかりたい
    - コード動かさないと理解しずらかった

- @SatoshiHaramura
    - 昨日は朝のスタートダッシュができなかったので参加できませんでした...頑張って起きます！


## 2022\-05\-11

### 司会
- @yatsuhashi 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @SatoshiHaramura

### スタート地点
- Chapter10 CommonJS(p.194)から

### 疑問点・気づき
#### ビルドとバンドル(p.197) まで

- @haruguchi
    - CommonJS　のrequireを模したもの難しかった
    - 基本的にはESmoduleを使う(babel, webpack環境)

- @yatsuhashi 
    - 書いたJavaScriptのコードがそのまま実行されることは多くない
    - 


- @eatplaynap 
  - babelやwebpackがある環境ではESモジュール(import)を使って書くべき(新しいものをCommonJSに変換してくれるから)
  - モジュールについてはJS Primerが詳しくて分かりやすかった(けど合宿のときいっしーさんは飽きてた…)
    - [ECMAScriptモジュール · JavaScript Primer \#jsprimer](https://jsprimer.net/basic/module/)


- @SatoshiHaramura
    - ESモジュールは2015年に導入された新しいモジュールシステム。使っていきたい。
    - CommonJSとESモジュールは共存してても動く。
        - node.jsやブラウザどちらの実行環境で動かすのかでモジュールシステムを選択すれば良さそう
    - babelはトランスパイラー、webpackはバンドラー

- @cafedomancer 
    - `require()` 関数を中身を説明する部分が難しかった
        - `Function()` コンストラクタ関数は何をしてくれるものなんだろう？
            - `Function(args, code)`
    - JS のユニークな特徴
        - 最近になっていろいろ発展した 
        - 新しい JS から古い JS に変換している
        - 後方互換性を保つために古い機能がいつまでも存在している
        - JS 嫌いだったけど好きになった
    - "ビルドとバンドル" の話は、ブラウザのモジュールサポートによってまた状況が変わりそう....

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - yazawaをrubbishって言ったらタマキさんに怒られた
      - yazawaのreadmeなくなってるような
          - たまきはいいけど、やざわはなんていうかな？



- @yatsuhashi 
    - 

- @harugushi
    - 新しい構文を

- @cafedomancer 


- @SatoshiHaramura
    - require関数の中身が難しい

## 2022\-05\-12

### 司会
- @yatsuhashi 

[タイマー](https://timer.onl.jp/)

### ドライバー

- @SatoshiHaramura

### スタート地点
- Chapter10 モジュール設計から

### 疑問点・気づき

```
// 変数と関数の依存関係の整理
// グループ1
roads

roadGraph
buildGraph(roads)

VillageState
randomRobot(state)
VillageState.random
goalOrientedRobot({place, parcels}, route)

randomPick() ←　NPMっぽい



// グループ2
runRobot()



// グループ3
mailRoute

routeRobot(state, memory)



// グループ4
findRoute(graph, from, to)

goalOrientedRobot({place, parcels}, route)
```
#### 練習問題　モジュール型ロボット(p.200) まで

- @haruguchi
    - npmっぽいっていうのはまだいまいち掴めてないけど、汎用的な部分で依存関係の塊でグループ化していく手法があることがわかった


- @cafedomancer 
    - 依存関係を分析してみて、それを中心にモジュールを考えてみた
    - 別の観点だと、データ系、グラフ系、ロボット系、とかいろいろ考えられる
    - bokan がとても活用されている (inspired by トミーさん、というクレジットを残しておこう)
    
    
- @yatsuhashi 
    - 変数等の依存関係でまとめていく

- @eatplaynap 
  - npmの探し方→キーワードでググるしかない
    - あとは awesome なんとかで調べるとかですかねー (もしあれば)
    - あとは GitHub で検索してスター数順にソートしてみたり


- @SatoshiHaramura
    - 適切なデータ構造を検討が難しそう
        - 基本(配列、マップ)
        - 独自に作る
### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - haramuraさんにロボットを見せられてよかった
  - haramuraさんのnpmはrubbishじゃなかった


- @haruguchi
    - 気づけば200ページ突入してた

- @yatsuhashi 
    - 


## 2022\-05\-13

### 司会
- @eatplaynap

[タイマー](https://timer.onl.jp/)

### ドライバー

- @SatoshiHaramura

### スタート地点
- Chapter10 練習問題　モジュール型ロボット(p.200)から

### 疑問点・気づき
#### 練習問題　モジュール型ロボット(p.200) まで

- @eatplaynap 
  - ESモジュールの場合はpackage.jsonにtypeを明示しないといけない
  - VSCodeのことをなにも覚えていない…

- @yatsuhashi 
    - node.jsでimportするときは`.js`が必要？

- @SatoshiHaramura
    - 起動を担う`runRobot()`をESモジュールとして切り出すことができた！
    - `runRobot()`は、第2引数に、robotとして、`randomRobot`,`routeRobot`,`goalOrientedRobot`を渡すことで、実行できる
### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - Yatzに輪読会遅刻してることを「責任感がない」とか怒られる夢を見たので今日Yatzが遅刻してることを許さんと思った
      - 夢で自分に叱られてきます

- @cafedomancer 
  - 読んで分かっているのと、実際に手を動かしてできるというのはぜんぜん違うということがわかった…。

- @SatoshiHaramura
    - 色々助けてくださってありがとうございます🙏
    - `code .`　vscodeで開く
        - `vs c`にエイリアスされている
    - 一番下までコメントアウトしたいとき(vim)

```
Shift + V
Shift + G
gcc
```