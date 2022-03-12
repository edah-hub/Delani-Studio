// $(document).ready(function(){
//     $(input).focus.css(color,purple);
// });
// $(document).ready(function(){
//     $("input").focus();
//     $(":focus").css("color", "white");
//   });


//   design

$(document).ready(function(){
    $("#design_img").click(function(){
      $("#design_img").toggle('2000').hide('1000');
      $("#design").show('2000');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design_img").slideDown('1500');
    });
  });
  
//   development

$(document).ready(function(){
    $("#development_img").click(function(){
      $("#development_img").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('2000');
      $("#development_img").slideDown('2000');
      $("#development_img").css(margin,5);
    });
  });

//   product
$(document).ready(function(){
  $("#product_img").click(function(){
    $("#product_img").slideDown('2000').hide('1000');
    $("#product").show('2000');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product_img").slideDown('1500');
  });
});


