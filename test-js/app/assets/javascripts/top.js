window.addEventListener("load", function()  {
    var btn = document.querySelector("input");
  // ボタンをDOMオブジェクトとして取得し、変数btnに代入する

  function printHello() {
    console.log("Hello World!")
  }

  btn.addEventListener("click", printHello);
  // イベントリスナをbtn(DOMオブジェクト)に対して作成
  // クリックイベントを捉えて、printHello()メソッドをコールする
});
// loadイベントはページが全てロードされたタイミングで発生する
// これによりページを全て読み込んだ後にprintHelloWithButtonを呼び出している