function equalHeight(group) {
  tallest = 0;
  group.each(function () {
    thisHeight = $(this).height();
    if (thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}

$(document).ready(function () {
  equalHeight($(".external-cont .sidebar"));
});

$('.main-page .banner-text ul.change a').live("click", function (e) {
  e.preventDefault();
  $(this).closest('.content-cont').hide(); //Скрыть все сожержание
  $('.' + $(this).attr('title')).show();
});