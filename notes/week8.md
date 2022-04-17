# 【第8週】流麗なJavaScript輪読会 (2022\-04\-11\~2022\-04\-15)

[![hackmd-github-sync-badge](https://hackmd.io/hq7RO2buSbSNjyQH4ILT7Q/badge)](https://hackmd.io/hq7RO2buSbSNjyQH4ILT7Q)

###### tags: `流麗なJS`

- [リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)
- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)



## 目次

[TOC]

## 2022\-04\-11

### 司会
- @daisuke-kiku 
[タイマー](https://timer.onl.jp/)

### ドライバー
- @eatplaynap 

### スタート地点
- 郵便車のルート(p.143)から

### 疑問点・気づき
#### 経路探索（p.145）のgoalOrientedRobotまで
 
- @haruguchi
    - 経路探索のコードが難しすぎてまだ掴み切れてない
    - pushの戻り値はpushしたもの
    - concatの戻り値は結合結果の配列


- @eatplaynap 
  - pushとconcatの違いくらいしかわからなかったょ🥺
  - 今日ためしたコード↓
```js
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

const roadGraph = buildGraph(roads)
findRoute(roadGraph, "Alice's House", "Shop")

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  console.log('first');
  console.log(work);
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      console.log('second');
      console.log(work);
      if (place == to) return route.concat(place);
      if (work.every(w => w.at !== place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
    console.log('third');
    console.log(work);
  }
}
```

- @yatsuhashi 
    - `push`じゃなくて`concat`が使われているのは戻り値の違いのためだった

- @kasai441
    - function findRoute が難しすぎる 
        - 内側のfor文の中でwork.pushをしているので、外側のforループ回数が不定になってそう

- @daisuke-kiku 
    - 前のコードが追いきれてないので難しく感じた
    - 
### 振り返り(よかった点・次回に向けての改善点等)

- @eatplaynap 
  - goalOrientedHumanになりたい

- @yatsuhashi 
    - この難しさの原因はなんなんだろう
        - やっぱコードが追いづらいからか

- @haruguchi
    - 金曜日はあんなにロボット可愛いって言ってたのに、、、今日は、、、
    - 短いコードの割によくわからないのは、配列とオブジェクトが入れ子になっていたり、2重ループだったりするのが原因かな
    - 時間があったらゆっくり調べたい（時間はない）

- @kasai441 
    - ちょっと遅刻して入ったら、めっちゃむずいコードをやっていて、言葉がまったく出なかったです。

### 今日心に残った誤訳 
今日はなし？


## 2022\-04\-12

### 司会
- @haruguchi-yuma  
[タイマー](https://timer.onl.jp/)

### ドライバー
- @cafedomancer 

### スタート地点
- 練習問題 ロボットの測定(p.145)から

### 疑問点・気づき
#### 練習問題 ロボットの効率 の途中(p.146)まで

```javascript=
function yourRobot({place, parcels}, route) {
  if (route.length === 0) {
    const routesToPick = parcels.map(parcel => findRoute(roadGraph, place, parcel.place)); // TODO: 拾いに行くルートぜんぶ
    const routesToDeliver = parcels.map(parcel => findRoute(roadGraph, place, parcel.address)); // TOOD: 届けに行くルートぜんぶ
    console.log(routesToPick);
    console.log(routesToDeliver);
    // TODO: 同じだったら拾いに行くほうを選ぶ
  }
  return {direction: route[0], memory: route.slice(1)};
}
```

### 振り返り(よかった点・次回に向けての改善点等)

- @yatsuhashi 
    - どうすれば距離が取れるかを考える

- @cafedomancer 
    - ルートに対する距離の概念がないと、どれが最適なのか判断できないような...？ 隣り合うノードの距離を単純に 1 として計算すればよいのかもしれない。
    - 巡回セールスマン問題とか中国人郵便配達問題とかとはちょっと違いそう

- @haruguchi
    - findRouteの意味がわかったら解けそうな気もする。
    - routeRobotとgoalOrientedRobotは平均3手くらいしか変わらなかった。randomRobotは、、、
    - 距離は移動するごとに測り直すのかな？

- @kasai441 
    - むずかしいなあ...

- @eatplaynap 
  - 目が覚めたのが8時16分だったのでそのまま来ました
  - 難し〜

### 今日心に残った誤訳 
誤：　ロボットが改善されたを確認するために  
正：　ロボットが改善されたことを確認するために 


## 2022\-04\-13

### 司会
- @yatsuhashi 
[タイマー](https://timer.onl.jp/)

### ドライバー
- @cafedomancer 

### スタート地点
- 練習問題 ロボットの効率(p.146)から

### 疑問点・気づき
#### 練習問題 ロボットの効率 の途中(p.146)まで

- @kasai441 
    - findRouteの仕組みをデバッガーをつかって検証しました。
        - デバッガーを使っても値が多いので、ややこしい...
        - 実際の値をみると動きがある程度わかりました。

- @yatsuhashi 
    - findRouteの返り値がわかった（動きはまだ全部はわからん）
    - デバッグの大事さを感じました

- @cafedomancer 
    - `findRoute` のコードが難しくてちょっとよく分からんけど、route を検索してくれるということは分かった
    - `yourRobot` がダンスを始めてしまった...
    - VSCode + Node.js だと、ブレイクポイントを仕掛けて VSCode 上で直接デバッグできるので便利

### 振り返り(よかった点・次回に向けての改善点等)

- @yatsuhashi 
    -　過去一人が少なかったかも🚀
    
    -　難しかったから... :gogo:

- @cafedomancer 
    - 朝起きるのは偉業
    - 1 人でガンガン進めてしまったので明日はだれか交代しましょう！ 既存のコードは自由に書き換えちゃって全然 OK です :ok_woman: 

- @eatplaynap 
  - スヤスヤ…
    - オキロ！！

### 今日心に残った誤訳 
今日はなし

## 2022\-04\-14

### 司会
- @yatsuhashi 
[タイマー](https://timer.onl.jp/)

### ドライバー
- @cafedomancer 

### スタート地点
- 練習問題 ロボットの効率(p.146)から

### 疑問点・気づき
#### 練習問題 ロボットの効率 の途中(p.146)まで

- @kasai441 
    - 最後の方ループしてしまう。
    - もう答えを見てしまっても良いかも？見てもわからなそう。
    - デバッグしてると、あっという間に時間が過ぎるのは、なんでだろう？

- @haruguchi
    - すごい些細なことでつまづいている気がするなぁ
    - 丁寧にデバッグすればいけそうな気がする

- @yatsuhashi 
    - あとちょっとな気がする、多分

### 振り返り(よかった点・次回に向けての改善点等)

- @haruguchi
    - JSでのデバッグの仕方がわかってよかった

### 今日心に残った誤訳 


## 2022\-04\-15

### 司会
- @yatsuhashi 
[タイマー](https://timer.onl.jp/)

### ドライバー
- @haruguchi 

### スタート地点
- 

### 疑問点・気づき
#### 練習問題まで


- @cafedomancer 
    - `PGroup` の結果が同じになるときは return this しないといけないのかー
    - コンストラクタも private にしたかった。そうすれば常に `PGroup.empty` から始めなければならなくなるはず。

- @haruguhchi
    - 静的メンバーというのを初めて知った
        - 内部的にはおそらくコンストラクタ関数の関数オブジェクトのプロパティ
            - ほぅ...
    - 結果が変わらない時はreturn thisしないと新しいオブジェクトが返ってしまう
    - [...this.values, obj]
    - 副作用が少ないコードを書くというのはいろんなことに気を遣わないといけないんだな


- @yatsuhashi 
    - constructorとstaticについてわかった🙂
### 振り返り(よかった点・次回に向けての改善点等)

- @cafedomancer 
    - ロボットをなおしてもらった！ :boom: :robot_face: :wrench: 

- @yatsuhashi 
    - haruguchiさんロボット修理ありがとうございます🙏

- @kasai441 
    - 寝坊しました〜 :bed:

- @haruguchi
    - ロボット治ってよかった
    - オートマトンの章面白かった（難しかった）
    - アンダースタンディングコンピュテーション
        - https://www.oreilly.co.jp/books/9784873116976/

### 今日心に残った誤訳 
特になし