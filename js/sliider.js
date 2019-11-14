/*смена главного экрана*/
$(document).ready(function() {
  $("#cf_onclick").click(function() {
  	$(".content").addClass("show");
  });
});


/*анимация */
$('#cf_onclick').click(function() {
	setTimeout(function(){
    $(".content__1280").addClass("line1");
  },1000);

	setTimeout(function(){
    $(".content__1280").addClass("line2");
  },2000);

  setTimeout(function(){
    $(".item2").css("opacity","1");
  },4000);

  setTimeout(function(){
    $(".item1").css("opacity","1");
  },7000);

  setTimeout(function(){
    $(".item3").css("opacity","1");
  },10000);

  setTimeout(function(){
    $(".item4").css("opacity","1");
  },13000);

  setTimeout(function(){
    $("#newMessage").css("display","block");
  },18000);

  setTimeout(function(){
    $("#newMessage").addClass("messagebox1");
  },20000);

});

/*отключить мигание конверта после клика*/
$(document).ready(function() {
  $("#newMessage").click(function() {
    $("#newMessage").removeClass("messagebox1");
  });
});

