# 会社の社訓をまとめるアプリ  
現在作成中
## 概要
Spring BootとAngularのテストプロジェクト

##  なぜ作ったのか
Spring BootやAngularといった、モダンなフレームワークを使用して、  
アプリを作ってみたい、あるいはアプリの構成について知りたいという方は多いのではないでしょうか。

SpringやAngularは、自社でアプリを作っている会社から、Sierでの大規模な開発まで幅広く使われているモダンなフレームワークです。  
  
それぞれのアプリを単体で解説している書籍や講座、HPは幅広くありますが、  
これらの組み合わせを説明できているものは多くありません。  

今回のアプリでは、これらの組み合わせたアプリを手軽に作り、手元で確認できるようになる！というのが狙いです。  
  
手元の環境でこうした構成を作る事ができれば、業務でも自信を持って仕事に取り組む事ができますし、  
別な構成のアプリのプロジェクトにアサインされても、なんとなく想像力が働く・・・はず。頑張ります。  

##  説明
業務での構成としては、フロントエンドとバックエンドのサーバーを分離して、
フロントエンドが、画面表示周りのロジックを担当し、バックエンドが、DB周りのロジックを担当させるところでしょう。

今回は、簡易的なアプリなので、サーバー分離はせずに、Springのリソースとして、ビルドされたAngularを配置します。

Angular → Spring(RESTAPI) → MySQL(DBを参照・更新)


##  アプリの動かし方
1.Resource配下のSQLを使って、DDL及びDMLを流す。  
2.SpringBootMottoApplication.javaで右クリック  
→ 実行(javaアプリケーション)  
3.`http://localhost:8080/`へアクセス  
4.画面が表示されている（成功!）  
  
##  プロジェクトの骨組み部分の作成  
* Springのプロジェクトを作成する。  
Spring Initializrを使用して、Springプロジェクトを作成  
下記の依存関係を追加する事。  
Spring Boot DevTools  
Lombok  
Spring Data JPA  
Spring Web  
Rest Repository  
MySQL Driver  
  
* Angularのプロジェクトを作成する。  
以下の操作は、src/main/にて行う事。  
1.ng new clientを実行する。
→これにより、開発用のAngularプロジェクトが作成される。    
2.ng generate component components/hoge  
→コンポーネントを作成する。  
3.ng generate class common/hoge  
→dtoを作成する。  
ng generate service services/hoge  
→serviceクラスを作成する。  


* Angularをビルドする  
angular.jsonの下記値を変更する。  
projects.client.architect.build.options.outputPathを、dist/client → ../resources/publicにする。  
ng build  
→　Angularプロジェクトがビルドされる。  
`http://localhost:8080`へアクセスすると、Angularのデフォルトページへ遷移する事が確認できる。


##  Angularを単体で動かす場合の準備について
今回のプロジェクトは、Springは、ビルドされたAngularプロジェクトを参照します。
しかし、開発段階のAngularは、より高速の開発を行う為に、ng serveなどのコマンドで適時にコンパイルをし、  
修正したコードの結果をフィードバックしながら開発を行う事ができます。  
  
上記のような開発を行う為には、ローカル環境でプラスアルファの手順が必要になります。  
  
* 別途CSSスタイルを有効にする。(css等ライブラリの参照先が、ビルドされたものから、ローカルのものになる為。)  
コマンドの操作は、src/main/clientで行う事。  

下記コマンドで、npmインストールを行う。  
  
npm install -g bootstrap@5.2.0  
npm install -g @fortawesome/fontawesome-free  
  
src/main/clientのangular.json  
上記のstylesに、下記を追加する。  
"hoge/npm/node_modules/bootstrap/dist/css/bootstrap.min.css",  
"hoge/npm/node_modules/@fortawesome/fontawesome-free/css/all.min.css"   
  
* 開発用のビルドを行う。  
下記コマンドで、開発用のビルドを行う。  
出力された結果は、ディレクトリに反映されない。  
ng serve --open  
このコマンドは、ファイルの変更を監視しているので、コマンドラインが帰ってきません。  
監視している間に、Springのアプリを起動する事で、SpringとAngularは開発環境として連携されます。  
—
なぜ連携されるのか。  
AngularのServiceクラスで、baseUrlにバックエンドのポートを指定し、Spring側が公開するエンドポイントにアクセスする為。
この時、後述のCORS対策をSpring側に行う事が必要になる。
* CORS対策  
SpringのRepositoryClassに@CrossOriginのアノテーションを付ける事。  
これをしないと、CORSでエラーが吐かれて、バックエンドとフロントエンドがうまく連携されない。  
今回のプロジェクトでは、すでに@CrossOriginを付与している。
  
##  今後
今後の課題としては、  
1.ページングの実装  
2.ロールを実装し、ログイン制御を設ける。  
3.Spring Securityなどでセキュリティ対策を行う。  
4.AWSあるいは、GCなどへデプロイを行う、などがあります。  
  
以前勤怠アプリを作成した際は、1~4までを行いました。
とりあえず、今回はアプリの基本的な箇所までを作成しました。
