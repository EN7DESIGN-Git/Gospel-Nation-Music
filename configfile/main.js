// @ts-nocheck
// Boutton Lyrics
$(document).ready(function(){
  $(".Btn-Lyrics").click(function(){
    var button = $(".Btn-Lyrics");
    button.animate({bottom: '26px'}, "1000");
    button.animate({bottom: '18px'}, "1000");
  });
});

// Bouton Home et Annonces
$(document).ready(function(){
  $(".Btn-Home").click(function(){
    var button = $(".Btn-Home");
    button.animate({scale: '0.9'}, "1000");
    button.animate({scale: '1'}, "1000");
  });
});

$(document).ready(function(){
  $(".Btn-Annonce").click(function(){
    var button = $(".Btn-Annonce");
    button.animate({scale: '0.9'}, "1000");
    button.animate({scale: '1'}, "1000");
  });
});

// Clik Card
$(document).ready(function(){
  $(".Card").click(function(){
    const card = $(this);
    card.addClass("scaled"); // Ajoute la classe pour réduire la taille
    
    // Retire la classe après un délai (1s pour correspondre à la transition)
    setTimeout(() => {
      card.removeClass("scaled");
    }, 300);
  });
});

//Transition des sections
//-------------------------
//Pour Cantique List Section
$(".Btn-Lyrics").click(function(){
  $(".CantiqueList-Section").toggleClass("CantiqueListhide");
  $(".CantiqueList-Section").css("z-index", "500");
  
  // Reset z-index Autres sections
  $(".Annonce-Section").css("z-index", "200");
  $("#main-content").css("z-index", "200");
  
   // Attends la fin de l'animation avant de masquer #main-content
   setTimeout(function () {
    $(".Annonce-Section").removeClass("AnnonceHide");
    $("#main-content").removeClass("mainHide");
  }, 800); // Correspond au temps de l'animation CSS (800ms)
});

// ........................
// Pour Annonce Section
$(".Btn-Annonce").click(function(){
  $(".Annonce-Section").toggleClass("AnnonceHide");
  $(".Annonce-Section").css("z-index", "500");

  // Reset z-index Autres sections
  $(".CantiqueList-Section").css("z-index", "200");
  $("#main-content").css("z-index", "200");

  // Attends la fin de l'animation avant de masquer #main-content
    setTimeout(function () {
      $(".CantiqueList-Section").removeClass("CantiqueListhide");
      $("#main-content").removeClass("mainHide");
    }, 800); // Correspond au temps de l'animation CSS (800ms)
});


// ........................
// Pour Home Section
$(".Btn-Home").click(function(){
  // $("#main-content").toggleClass("mainHide");
  $("#main-content").css("position", "absolute"); 
  $("#main-content").css("height", "0"); 


  // Reset z-index Autres sections
  $(".CantiqueList-Section").css("z-index", "200");
  $(".Annonce-Section").css("z-index", "200");

  // En suite animer la section 
  setTimeout(function () {
    $("#main-content").css("z-index", "500");
    $("#main-content").css("height", "100dvh");
  }, 300); // Correspond au temps de l'animation CSS

  // En suite reset la position des autres section et initialiser celle-ci
  setTimeout(function () {
    $("#main-content").css("position", "relative");
    $("#main-content").css("height", "auto"); 
    $(".CantiqueList-Section").removeClass("CantiqueListhide");
    $(".Annonce-Section").removeClass("AnnonceHide");
  }, 700);
});