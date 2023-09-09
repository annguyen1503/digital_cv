$(document).ready(function(){
    $(".profile").on({
      mouseenter: function(){
        $(".profile-img").css("display", "none");
        $(".profile-detail").css("display", "block");
      },  
      mouseleave: function(){
        $(".profile-img").css("display", "block");
        $(".profile-detail").css("display", "none");
      }, 
    });
  });