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
