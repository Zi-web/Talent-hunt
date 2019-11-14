/*смена главного экрана*/
$(document).ready(function() {
  $(".btn__send").click(function() {
  	$(".popup-consultation__form").addClass("show");
  });
});

$(document).ready(function() {
  $(".popup-consultation__close").click(function() {
  	$(".popup-consultation__form").removeClass("show");
  });
});


$(window).ready(function(){

setTimeout(function(){
    $(".content__item--1").css("opacity","1");
  },1500);
setTimeout(function(){
    $(".content__item--2").css("opacity","1");
  },2000);
setTimeout(function(){
    $(".content__item--3").css("opacity","1");
  },2500);
setTimeout(function(){
    $(".content__item--4").css("opacity","1");
  },3000);

});