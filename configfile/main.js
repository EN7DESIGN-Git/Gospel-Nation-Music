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
$(document).ready(function () {
  $(".Btn-Lyrics").click(function (e) {
    e.preventDefault(); // Empêche l'action par défaut du bouton

    // Ajoute l'ID #CantiqueListhide pour déclencher l'animation
    $(".CantiqueList-Section").attr("id", "CantiqueListhide");

    // Attends la fin de l'animation avant de masquer #main-content
    setTimeout(function () {
      $("#main-content").css("display", "none");
    }, 800); // Correspond au temps de l'animation CSS (800ms)
  });
});



