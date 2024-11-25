// @ts-nocheck

// code pour le chargement de la page
// Afficher l'avertissement sur les écrans larges
function checkScreenWidth() {
  const $desktopWarning = $('#desktop-warning');
  const $mainContent = $('#main-content');
  const $loadingScreen = $('#loading-screen');

  if ($(window).width() > 1025) { // Seuil pour les écrans plus grands qu'une tablette
    $desktopWarning.css('display', 'flex');
    $mainContent.css('display', 'none');
    $loadingScreen.css('display', 'none');
  } else {
    $desktopWarning.css('display', 'none');
    $mainContent.css('display', 'block');
  }
}
// Vérifie la taille de l'écran au chargement et lors des redimensionnements
$(window).on('load', checkScreenWidth);
// $(window).on('resize', checkScreenWidth); // Si nécessaire

// Script pour gérer la transition de chargement
$(window).on('load', function () {
  setTimeout(function () {
    const $loadingScreen = $('#loading-screen');
    const $mainContent = $('#main-content');

    // Ajout de la classe pour réduire la hauteur
    $loadingScreen.addClass('hide');

    // Après l'animation de réduction, masquez complètement la div
    setTimeout(function () {
      $loadingScreen.css('display', 'none');
      $mainContent.css('display', 'block');
    }, 1000); // Correspond à la durée de transition de 1 seconde
  }, 2000); // Temps de chargement initial (ici 2 secondes)
});


// ------------------------------------------
// Boutton Lyrics
$(document).ready(function(){
  $(".Btn-Lyrics").click(function(){
    var button = $(".Btn-Lyrics");
    button.animate({bottom: '26px'}, "1000");
    button.animate({bottom: '18px'}, "1000");
  });
});
// Bouton Home
$(document).ready(function(){
  $(".Btn-Home").click(function(){
    var button = $(".Btn-Home");
    button.animate({scale: '0.9'}, "1000");
    button.animate({scale: '1'}, "1000");
  });
});
// Bouton Annonces
$(document).ready(function(){
  $(".Btn-Annonce").click(function(){
    var button = $(".Btn-Annonce");
    button.animate({scale: '0.9'}, "1000");
    button.animate({scale: '1'}, "1000");
  });
});

// ------------------------------

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
  $(".CantiqueList-Section").css("display", "block"); 
  $(".CantiqueList-Section").css("position", "absolute"); 
  $(".CantiqueList-Section").css("height", "0");
  $(".CantiqueList-Section").css("padding", "0");
  $(".CantiqueList-Wrapper").hide();
  $(".Search-Wrapper").hide();
  
  // Reset z-index Autres sections
  $(".Annonce-Section").css("z-index", "200");
  $("#main-content").css("z-index", "200");
  
  // En suite animer la section 
  setTimeout(function () {
    $(".CantiqueList-Section").css("z-index", "500");
    $(".CantiqueList-Section").css("height", "100svh");
  }, 300); // Correspond au temps de l'animation CSS

  // En suite reset la position des autres section et initialiser celle-ci
  setTimeout(function () {
    $(".CantiqueList-Section").css("position", "");
    $(".CantiqueList-Section").css("height", "100svh"); 
    $(".CantiqueList-Section").css("padding", "180px 0px");

    $(".CantiqueList-Wrapper").fadeIn();
    $(".Search-Wrapper").fadeIn();

    $("#main-content").hide();
    $(".Annonce-Section").hide();
  }, 700);
});

// ........................
// Pour Annonce Section
$(".Btn-Annonce").click(function(){
  $(".Annonce-Section").css("display", "block");
  $(".Annonce-Section").css("position", "absolute");
  $(".Annonce-Section").css("width", "0%");
  $(".Annonce-Section").css("height", "100dvh");
  
  // Reset z-index Autres sections
  $(".CantiqueList-Section").css("z-index", "200");
  $("#main-content").css("z-index", "200");
  
  // En suite animer la section 
  setTimeout(function () {
    $(".Annonce-Section").css("z-index", "500");
    $(".Annonce-Section").css("width", "100%");
  }, 300); // Correspond au temps de l'animation CSS

  // Attends la fin de l'animation avant de masquer #main-content
    setTimeout(function () {
      $(".Annonce-Section").css("position", "relative");
      $(".Annonce-Section").css("height", "auto");

      $("#main-content").hide();
      $("#main-content").css("display", "none");
      $(".CantiqueList-Section").hide();
    }, 700); // Correspond au temps de l'animation CSS (800ms)
});

// ........................
// Pour Home Section
$(".Btn-Home").click(function(){
  $("#main-content").css("display", "block"); 
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

    $(".CantiqueList-Section").hide();
    $(".Annonce-Section").hide();
  }, 700);
});

// ........................
// Click bouton search
$(document).ready(function(){
  $(".search-button").click(function(){
    var button = $(".search-button");
    button.animate({scale: '0.9'}, "1000");
    button.animate({scale: '1'}, "1000");
  });
});

// ........................
// Pour la Recherche 
$(document).ready(function () {
  $('.search-input').on('input', function () {
    const query = $(this).val().toLowerCase(); // Récupère la valeur saisie (en minuscule)
    $('.CantiqueList-Section .Zik-Card').each(function () {
      const title = $(this).find('.Zik-Card_Title').text().toLowerCase(); // Récupère le texte du titre
      const author = $(this).find('.Zik-Card_Auteur').text().toLowerCase(); // Récupère le texte de l'auteur
      // Vérifie si le texte saisi correspond au titre ou à l'auteur
      if (title.includes(query) || author.includes(query)) {
        $(this).show(); // Affiche la carte si correspondance
      } else {
        $(this).hide(); // Cache sinon
      }
    });
  });
});

// ........................
// Click Zik card
$(document).ready(function () {
  // Écoute le clic sur les cartes
  $(".Zik-Card").on("click", function () {
    // Supprime la classe 'Zik-Card-Click' de toutes les cartes
    $(".Zik-Card").removeClass("Zik-Card-Click");
    // Ajoute la classe 'Zik-Card-Click' uniquement à la carte cliquée
    $(this).addClass("Zik-Card-Click");
  });
});

// ........................
// Click Btn filter
$(document).ready(function () {
  // Écoute le clic sur les cartes
  $(".Btn-filter").on("click", function () {
    // Supprime la classe 'Zik-Card-Click' de toutes les cartes
    $(".Btn-filter").removeClass("Btn-filter_Active");
    // Ajoute la classe 'Zik-Card-Click' uniquement à la carte cliquée
    $(this).addClass("Btn-filter_Active");
    $(this).css("scale", "1.05");

    setTimeout(() => {
      $(this).css("scale", "1");
    }, 300);
  });
});
