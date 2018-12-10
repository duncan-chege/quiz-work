$(document).ready(function(){
  $("button.btn").click(function(){
    var methodValue=parseInt($!('input[name=method]:checked').val());
    var diffValue=parseInt($('input[name=diff]:checked').val());
    var typeValue=parseInt($('input[name=type]:checked').val());
    var opValue=parseInt($('input[name=op]:checked').val());
    var arrayValue=parseInt($('input[name=array]:checked').val());

    var answer= methodValue + diffValue + typeValue + opValue + arrayValue;
    $('.output').html("<b>Final marks are: " +answer+ "%");

  $(".well").show();
  });
});
