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

// transition page 2

$(document).ready(function () {
  // Code pour index.html
  if (window.location.pathname.includes("index.html")) {
    $(".Btn-Lyrics").click(function (e) {
      e.preventDefault(); // Empêche la redirection immédiate
      sessionStorage.setItem("playSlideUp", "true"); // Enregistre l'état
      window.location.href = $(this).attr("href"); // Redirige vers la page cible
    });
  }

  // Code pour cantiqueList.html
  if (window.location.pathname.includes("cantiqueList.html")) {
    // Vérifie si l'animation doit être jouée
    if (sessionStorage.getItem("playSlideUp") === "true") {
      $("body").addClass("slide-up-on-load"); // Applique la classe pour l'animation
      sessionStorage.removeItem("playSlideUp"); // Supprime l'indicateur
    }
  }
});
