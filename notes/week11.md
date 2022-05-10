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

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - たまたまタマキさんのnpmの話をしてたけどタイムリーにnpmのことが出てきてよかった


- @haruguchi
    - モジュールわかるようでわかってないのでわかりたい
    - コード動かさないと理解しずらかった

- @SatoshiHaramura
    - 昨日は朝のスタートダッシュができなかったので参加できませんでした...頑張って起きます！