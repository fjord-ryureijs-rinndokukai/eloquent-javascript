# 【第16週】流麗なJavaScript輪読会 (2022\-06\-13\~2022\-06\-17)

[![hackmd-github-sync-badge](https://hackmd.io/SLrcQ-A5RlWMvHGiC3MR3w/badge)](https://hackmd.io/SLrcQ-A5RlWMvHGiC3MR3w)


###### tags: `流麗なJS`

- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)
- [fjord\-ryureijs\-rinndokukai/eloquent\-javascript: 流麗なJavaScript輪読会用リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)

## 目次

[TOC]

## 2022\-06\-17

### 司会
- @SatoshiHaramura

### ドライバー
- @eatplaynap 

### スタート地点
- 構文解析(p.226)から


### 疑問点・気づき


- @cafedomancer 
    - パーサーの動きがなんとなく分かった
        - `+(a, 10)` のような簡単な適用式を parse するだけでもこんなに複雑な動きをするのか...！ :flushed: 
    - 正規表現がなかなか複雑だった
    - `String.prototype.search()` は見つかった文字列の位置を返すメソッド


- @haruguchi
    - 今は`"`で始まるやつか、数字で始まるやつか、`\s(),#"`以外で始まるやつくらいしかないけど、もっと多くのパターンが出てきたら大変だと思った。


- @SatoshiHaramura
    - パーサの動きを追ってみると楽しかったです！
        - debugger を活用できるようになるとプログラムの動きが追いやすくなります！ 字面のコードを読んでどんな動きかを想像する (静的, static) のと、debugger を挟んで実際に動きを追ってみて想像していたものと合っているかどうかを確認する (動的, dynamic) のを組み合わせると効果的です。


- @yatsuhashi 
    - parseExpressionとparseApplyをお互いに呼び出してネストを解決している
        - コールスタックが深すぎて人間にはむずかしい


- @eatplaynap 
  - これまでの章で説明があったものについては全部分かっている前提で説明されてるから、忘れてる箇所や理解してない箇所があるとやっぱり難しいナ〜


### 振り返り(よかった点・次回に向けての改善点等)

- @haruguchi
    - Rubyのしくみとかもこんな感じの本ですかね？
        - こんな感じです！ Ruby はもうちょっと(?)複雑なので、内容ももうちょっと複雑です
    - 今まであんまり勉強したことない分野なので基礎体力がない！