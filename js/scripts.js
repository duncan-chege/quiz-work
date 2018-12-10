$(document).ready(function(){
  $("button.btn").click(function(){
    var methodValue=parseInt($('input[name=method]:checked').val());
    var diffValue=parseInt($('input[name=diff]:checked').val());
    var typeValue=parseInt($('input[name=type]:checked').val());
    var opValue=parseInt($('input[name=op]:checked').val());
    var arrayValue=parseInt($('input[name=array]:checked').val());

    //testing form validation using length method
    var mValidate=$("input[name=method]:checked").length;
    var dValidate=$("input[name=diff]:checked").length;
    var tValidate=$("input[name=type]:checked").length;
    var oValidate=$("input[name=op]:checked").length;
    var aValidate=$("input[name=array]:checked").length;

    var answer= methodValue + diffValue + typeValue + opValue + arrayValue;

    if(mValidate<1 || dValidate<1 || tValidate<1 || oValidate<1 || aValidate<1){
        $('.output').html("<b>Input answers</b>");
    }else if(answer>0){
      $('.output').html("<b>You have scored: " +answer+ "%</b>");
    }else {
      $('.output').html("<b>You have failed</b>");
    }

  // $(".well").toggle();
   $("#bck").toggle();
  //$("#sub").toggle();
//  $(".panel").toggle();
  });
});
