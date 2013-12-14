$(document).ready(function() {
  
$('td').on('click', function() {
  if ($("#x").text() == "X, please select a space.") {
  if ($('#o').css("display") == "none"){
$(this).text("x");
}else{
  $(this).text("o");
  };
  if (($(".r1:contains(x)").length === 3) || ($(".c1:contains(x)").length === 3)
    || ($(".r2:contains(x)").length === 3) || ($(".c2:contains(x)").length === 3)
    || ($(".r3:contains(x)").length === 3) || ($(".c3:contains(x)").length === 3)
    || ($(".d1:contains(x)").length === 3) || ($(".d2:contains(x)").length === 3)
    ){
    alert("X wins!");
    $("#x").text("X wins!");
    $("#o").text("X wins!");
  }else if (($(".r1:contains(o)").length === 3) || ($(".c1:contains(o)").length === 3)
    || ($(".r2:contains(o)").length === 3) || ($(".c2:contains(o)").length === 3)
    || ($(".r3:contains(o)").length === 3) || ($(".c3:contains(o)").length === 3)
    || ($(".d1:contains(o)").length === 3) || ($(".d2:contains(o)").length === 3)
){
    alert("O wins!");
    $("#x").text("O wins!");
    $("#o").text("O wins!")};
$('p').toggle();
};
});
});