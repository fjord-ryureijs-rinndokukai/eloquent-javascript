# 【第5週】流麗なJavaScript輪読会 
(2022\-03\-21\~2022\-03\-25)

[![hackmd-github-sync-badge](https://hackmd.io/28HTB_t-QkaLW_lOaW2wQg/badge)](https://hackmd.io/28HTB_t-QkaLW_lOaW2wQg)


###### tags: `流麗なJS`

- [**流麗なJavaScript 輪読会ノートまとめ \- HackMD**](https://hackmd.io/4rF1R6DgQger1ldnC4xbZQ)
- [公式の課題コードSANDBOX](https://eloquentjavascript.net/code/)
- [リポジトリ](https://github.com/fjord-ryureijs-rinndokukai/eloquent-javascript)


## 目次

[TOC]

## 2022\-03\-21

### 司会
- @daisuke-kikukawa

[タイマー](https://timer.onl.jp/)

### ドライバー
- @misosoup160

### スタート地点
- Chapter5（p.98）から

### 疑問点・気づき
#### Chapter5 高階関数(p.103)まで

- @eatplaynap 
  - 抽象化せずにやってることを1から説明していくと冗長で分かりづらいプログラムになる(けど初心者は書きがち)
  - 引数の中のアロー関数が分かりづらいときはfunctionで書き直すと流れが追いやすくなる

- @yatsuhashi 
    - 1つずつ追うの大事

- @daisuke-kiku 
    - アロー関数があると急に処理が追えなくなってしまうので、頭の中で読みやすにように書き直すようにする

- @misosoup160 
    - 私もアロー関数最近見てないんで完全にわからなくなっていた😇

- @kasai441 
    - 高階関数
        - 関数そのものを変数に入れたり、引数として渡すことができるので、それを関数に渡すとグルグルできる。

### 振り返り(よかった点・次回に向けての改善点等)
- @misosoup160 
    - 先週はラジオ参加多めになってしまったけど今週は月曜祝日朝から参加できたのでこの調子で行きたいです✌️
        - ✌️

- @eatplaynap 
  - 眠すぎる。スヤスヤ…
  - 月曜と金曜にこのHackMDをPushしておきます〜

- @kasai441 
    - daisukeさん司会のレア回

- @yatsuhashi 
    - 眠

- @daisuke-kiku 
    - 難しい日本語を理解する能力が上がった気がする。。
### 今日心に残った誤訳
p98  
格言が一つ抜かされている

p99 下から7行目  
誤: 間違えなさそう  
正: 間違いなさそう

p99 下から4,5行目  
数字の範囲を合計しているのは、（以下の文）  
間違いではないが読みにくい

p102 繰り返しの抽象化  
誤： そのため、閉じ括弧と閉じ括弧で閉じる必要があるのです。  
正： そのため、閉じ中括弧と閉じ括弧で閉じる必要があるのです。  
原著では`closing brace and closing parenthesis`となっている

- :sasuga: