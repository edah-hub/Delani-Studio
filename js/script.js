// Form Validation
$(document).ready(function(){
    $("form#form").submit(function(event){
      // event.preventDefault();
      var name = $("input#username").val();
      var email = $("input#mail").val();
      var message = $("textarea#formtext").val();
      if ($("input#username").val() && $("input#mail").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });
  
  $(document).ready(function(){
    $("#img1").mouseover(function(){
      $("#text1").show();
    }).mouseout(function(){
      $("#text1").hide();
    });
  });
  $(document).ready(function(){
    $("#img2").mouseover(function(){
      $("#text2").show();
    }).mouseout(function(){
      $("#text2").hide();
    });
  });
  $(document).ready(function(){
    $("#img3").mouseover(function(){
      $("#text3").show();
    }).mouseout(function(){
      $("#text3").hide();
    });
  });
  $(document).ready(function(){
    $("#img4").mouseover(function(){
      $("#text4").show();
    }).mouseout(function(){
      $("#text4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#img5").mouseover(function(){
      $("#text5").show();
    }).mouseout(function(){
      $("#text5").hide();
    });
    $("#img6").mouseover(function(){
      $("#text6").show();
    }).mouseout(function(){
      $("#text6").hide();
    });
    $("#img7").mouseover(function(){
      $("#text7").show();
    }).mouseout(function(){
      $("#text7").hide();
    });
    $("#img8").mouseover(function(){
      $("#text8").show();
    }).mouseout(function(){
      $("#text8").hide();
    });
  });