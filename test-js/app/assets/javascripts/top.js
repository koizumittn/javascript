$(window).on("load", function() {
  $("li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents div").hide();
    $(".contents ." + this.id).show();
  });
});