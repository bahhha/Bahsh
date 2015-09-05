# Bahsh

## sass、scss について
  * どちらも css の文法や機能を拡張したもの
  * コンパイラでcssファイルに変換する
  * 両者の機能は（たぶん）同等
  * scss の方が css の文法に近い

## Bahsh 閲覧手順

<ol><li>
ruby がなければインストール

  * コンパイラ実行用

</li><li>
sass をインストール

  * これで scss もコンパイルできる

```
$ gem install sass
```
</li>
<li>
sassコンパイラを実行

  * 常に変更を監視

```
$ cd /path/to/Bahsh/
$ sass --watch scss:css --style expanded
```
</li></ul>
