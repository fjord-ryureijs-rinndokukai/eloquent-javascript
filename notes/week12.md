# 【第12週】流麗なJavaScript輪読会 (2022\-05\-16\~2022\-05\-20)

[![hackmd-github-sync-badge](https://hackmd.io/SIKabd5ZSiC6xWggDRLK9g/badge)](https://hackmd.io/SIKabd5ZSiC6xWggDRLK9g)


###### tags: `流麗なJS`

- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)
- [fjord\-ryureijs\-rinndokukai/eloquent\-javascript: 流麗なJavaScript輪読会用リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)



## 目次

[TOC]

## 2022\-05\-16

### 司会
- @eatplaynap 

[タイマー](https://timer.onl.jp/)

### ドライバー
- @haruguchi

### スタート地点
- 練習問題 モジュール型ロボット(p.200)から

### 疑問点・気づき
#### 練習問題 roadsモジュール(p.200)まで


- @yatsuhashi 
    - CommonJSは`require('ファイル')`と`module.exports = {モジュール名}`or`exports.モジュール名 = モジュールの中身`

- @haruguchi
    - requireは関数
    - `exports.hoge = hoge` は実質 `{ hoge: hoge }`してる
    - `module.exports = { hoge }`でもいい


- @eatplaynap
  - 適切なnpmを見つけるのは労力もかかるし依存先が増えるのでメンテナンスコストも増えるかもだけど、基本はnpmが使える場所はnpmにしたほうがよさそう
  - [Lodash](https://lodash.com/)

- @SatoshiHaramura
    - 問題を理解することが難しかった...
    - CommonJS
        - require(ファイル名)
        - exports.モジュール名 = exportsしたいもの
### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap
  - お腹へった…
  - npacさんこの輪読会にもリクルートしよ


- @haruguchi
    - モジュールの理解が乏しい
    - あと1問！


## 2022\-05\-17

### 司会
- @SatoshiHaramura

[タイマー](https://timer.onl.jp/)

### ドライバー
- @cafedomancer

### スタート地点
- 練習問題 循環依存(p.201)から

### 疑問点・気づき
#### 11章　非同期性まで

- @haruguchi-yuma
    - CommonJSはモジュールの循環依存を解消している
    - 原理は不明
    - 非同期処理難しそうな匂いがぷんぷんしている

- @SatoshiHaramura
    - require関数の内部の処理をまだ理解できていない...
    - requireされると、コードを1回実行しているように見えた
    - 非同期処理の図をみるとイメージを持ちやすい
        
- @cafedomancer 
    - require 関数が循環依存をどう解決するのか、難しくて分からなかった
        - require 関数のコードを実際に動かしてみないと分からなさそう
    - マイクのノイズキャンセリングが効きすぎていそう...
    - "直線的な制御モデルに合わないプログラムの表現が用意になる"
        - イベントドリブン

- @yatsuhashi 
    - requireの中身がわからなかった
    - インターリーブ
        - インターリーブとは、データ入出力や通信において連続的に信号やデータを扱う際、時間や空間などの何らかの物理的な広がりに対してわざと不連続にデータを配置する手法。 転送速度の向上や誤り訂正などのために行われる。

- @eatplaynap 
  - requireもimportも`./`で読み込む必要がある
  - インターリーブ(interleave)なんだろう

### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - 昨日niiさんがペアプロしてたやつ[私の土曜の日報](https://bootcamp.fjord.jp/reports/53506)で起きてた現象のバグ修正だったんだ〜見に行けばよかった！
      - だれかが確認済みだったら確認済みにできないようにするという機能は追加したんですが、個別と直近でスタンプが異なるという表示上の問題はまだ解決していなさそうです
  - いろんな人を輪読会に誘っています


- @haruguchi
    - 朝の会や帰りの会にもいろんな流派がある
    
- @cafedomancer 
    - :memo: 12 時になったら Hikaru さんを起こす
      - 12時前ならえらい、12時過ぎたら許されざる者

## 2022\-05\-18

### 司会
- @SatoshiHaramura

[タイマー](https://timer.onl.jp/)

### ドライバー

### スタート地点
- カラスのテクニック(p.204)
### 疑問点・気づき
#### 11章　promise途中(p.208)まで

- @haruguchi
    - カラスのネットワークではJavaScriptを使っていることがわかった。
    - HTTP通信みたいな話になったのでその知識が少ないことがわかった
    - コールバックは字の通り、処理が終わったら呼び出し元から呼び戻すイメージ（登録しておくイメージ）
        - 上手く言えないけど、相手に実行してもらうというか、


- @cafedomancer 
    - 非同期処理はむずかしい
        - カラスの例がむずかしいので、いきなりこれで考えちゃうとちょっと分かりづらいかも (おもしろいんだけど...)
        - コールバック -> promise -> async/await の順に歴史をたどっていくとよく分かるようになる
    - 非同期性は伝染する
        - コールグラフの下のほうの関数を async にすると、呼び出しているほうもたしかに async にしなければならなくなる 
    - カラスは人間より進化しているかも...！
        - どこまでが本当の話なのだろう笑

- @SatoshiHaramura
    - カラスのテクニックで、何をやっているのか分かっていない...
        - 巣から巣へメッセージを送りたい??
            - そうです。メッセージを送信するのと、送信が完了したらなにか処理をするとかもやりたい。あるいは送信を連鎖させるのも、もしかしたらやりたいかも？
    - コールバック関数は、ある処理の後に行いたい処理を定義したもの??
    - new Promise(コールバック関数)すると、そのPromiseに渡したコールバック関数内の処理も実行されている

- @yatsuhashi 
    - ```
        defineRequestType(..., () => {
          done(result);
        });
         ```
    

### 振り返り(よかった点・次回に向けての改善点等)

- @cafedomancer
    - TS Playground を使えば関数の return type などがすぐに分かって便利

- @haruguchi
    - 学校に朝読書という文化があるんですが、これ読んでました。
    - 世界観の作り込みがすげぇ
    - https://www.amazon.co.jp/%E3%82%AB%E3%83%A9%E3%82%B9%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-%E5%A7%8B-%E6%9D%BE%E5%8E%9F-ebook/dp/B074HWVQW1

- @yatsuhashi 
    - 眠すぎて始まる前の雑談で気の利いた話題が出せない

## 2022\-05\-19

### 司会
- @eatplaynap

[タイマー](https://timer.onl.jp/)

### ドライバー

- @haruguchi-yuma 


### スタート地点
- 11章　promise途中(p.208)

### 疑問点・気づき

#### 11章　ネットワークは難しい(p.212)まで

- @haruguchi
    - flagを持たせておいて、メソッドを呼び出せたらtrueに、250msたってもfalseの場合は再帰的に呼び出して再試行、3回やってもダメならreject
    - sendメソッドの中身ってどっかにありましたっけ？記憶にないな、、、
        - 中身はないっすね。p.207 に出てくるのみ。でもこれ `defineRequestType()` したらできるんじゃないのかな？ あ、そういうわけじゃなさそう。 :eyes:
    - promise値のチェーンが面白かった
    - さらっとthenメソッドの第二引数でrejectの処理が書けると書いてあって、知らなかった。

- @eatplaynap 
  - エラーでcatchされたあとのPromiseオブジェクトはfulfilledになっているのでthenでチェーンすることができる
  - 非同期のループどう実現しているのか分からない


- @cafedomancer 
    - `nest.readStorage()` や `nest.send()` はコールバックベースになっているが、書いているコードは promise ベースになっていて混乱しそう
        - promise でラップしましょうという主旨なのかなあ
    - 最後のコード、`done` が `false` のままなのはいつだろうと思ったけど、`nest.send()` の処理がうまくいかなかったとき = `nest.send()` に渡しているコールバックが処理されなかったときに `false` のままなのか
    - 昨日の yatsuhashi さんの質問に答えられなかったのが心残り

- @SatoshiHaramura
    - thenメソッドやcatchメソッドは、別のpromiseを返している。併せて、あれば値も添えて

- @yatsuhashi 
    - 


### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - カラスすごい


- @yatsuhashi 
    - カラスに敗北した気分
    
- @cafedomancer 
    - カラスの記憶力はすごいらしい。食べ物を隠した場所を絶対に忘れないらしい。
    - ちなみに、朝マックを買ってルンルンで歩いて帰ってきていたら、後ろからカラスに襲われて朝マックが台無しになったので、カラスは嫌いです。
        - カラスは本来臆病なので、イケると思われたんですかね?

## 2022\-05\-20

### 司会
- @eatplaynap

[タイマー](https://timer.onl.jp/)

### ドライバー

- @haruguchi-yuma 


### スタート地点
- 11章　ネットワークは難しい(p.212)

### 疑問点・気づき

#### 11章 メッセージルーティング途中(p.216)最初のコードの終わりまで

- @haruguchi
    - `Promise.all()`は全てが解決するまで待つ。配列のどれかが拒否されると、拒否になる。トランザクションみたいなイメージ？
    - thenに渡される引数は最大2つで、第1引数はresolveしたときに実行するコールバック、第2引数はrejectedされたときに呼び出すコールバック関数
    - ネットワークの知識がないからブロードキャストって何？みたいな状態！


- @eatplaynap 
  - コールバック関数の処理が追えてないことがわかった
  - 日本語の解説を読んで何をやりたいのかボンヤリ想像するしかないのか…ちゃんと復習しよう！！！


- @SatoshiHaramura
    - Promise.all()は、引数としてpromiseの配列を受け取る。promiseが全て解決 or どれか1つ拒否されると、戻り値はpromise
        - 解決ずみのpromiseかpending状態のpromiseですね


- @yatsuhashi 
    - 1つ目のコードから意味を全ては理解できてなかった
        - Promise.allは1つでもrejectされると全体がrejectされるのでハンドラで防ぐ...とは...？


### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - JS Primerの非同期読みたい

- @yatsuhashi 
    - 戦争と非同期が嫌いです

- @haruguchi
    - 最近Promiseめっちゃ勉強してるからいけるか！みたいに思ってたけど、そういう次元じゃなかった。
    -  読めないコードを追うのは苦行！
    - Promiseがよめないのもそうだけど、そもそも、前提のコードがわからない。

- @SatoshiHaramura
    - 寝坊しました...頑張って起きないと...!

