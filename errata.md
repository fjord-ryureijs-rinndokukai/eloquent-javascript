# 流麗なJavaScript 正誤表

3章 関数

ループからの脱却(p48)
の原著部分BREAKING OUT OF A LOOP の最後から2番目の段落が翻訳されず丸々カットされている

p51
コメントが訳されている

アロー関数(p59)
1行目
誤：関数には、他の記法とは大きく異な3つ目の記法もあります。
正：関数には、他の記法とは大きく異な`る`3つ目の記法もあります。

2行目
誤：矢印(⇒)
正：矢印(=>)

p67
4行目
誤：｜｜
正：||

3章 まとめ
p70
コード内のコメントが翻訳されていない（他の箇所では翻訳されている、表記揺れ）

p71
練習問題 再帰
誤：1ではどうなるか見てみます。
正：`-1`ではどうなるか見てみます。

誤：なぜですしょう。
正：なぜでしょう。

p73
ウェルス・リスは正しいのか？

p77 オブジェクト
誤：存在しないプロパティを読み取ると、undefinedという値が得られます。これにより、
原著ではこれによりの部分が
It is possible to assign a value to a property expression with the = operator.
となっていて、訳が不足している



p78 オブジェクト
誤：演算子内のバイナリは、
原著だと The binary `in` operator となっているので、
正：バイナリである`in`演算子は
のような感じが正しい

p80　同一性
This is okay と This isn't allowed が訳されていない（表記揺れ）


p81 リス人間の日誌
誤： √ n1•n0•n1•n0
正： √ n1•n0•n•1n•0(原著より)

p82
誤： 配当
the dividendには配当の意味もあるが、ここでは割り算の話をしているので
正： 被除数
が正しい

p91 Mathオブジェクト
誤： Math .PI
正：　Math.PI

コード例の1行目に、不要な`.`がある（原著にはない）