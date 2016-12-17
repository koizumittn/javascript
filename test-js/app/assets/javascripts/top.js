window.addEventListener("load", function()  {
    var btn = document.querySelector("input");
  // ボタンをDOMオブジェクトとして取得し、変数btnに代入する

  // イベントリスナをbtn(DOMオブジェクト)に対して作成
  // クリックイベントを捉えて、記述した関数を実行する
  btn.addEventListener("click", function() {
    var p = document.querySelector("p")
    p.innerText = "クリックされた！";
    // innerTextによりp要素のテキストを取得、変更できる
  });
});
// loadイベントはページが全てロードされたタイミングで発生する
// これによりページを全て読み込んだ後にprintHelloWithButtonを呼び出している