$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).children("img").toggle();
    $(this).children("p").toggle();
  });
});
