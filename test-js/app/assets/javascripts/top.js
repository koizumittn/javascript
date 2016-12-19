$(window).on("load", function() {
  $("li").on("click", function() {
    console.log(this.id);
  });
});