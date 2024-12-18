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

// Clik Card home
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

// Pour Home Section
$(".Btn-Home").click(function(){
  $("#main-content").css("display", "block"); 
  $("#main-content").css("position", "fixed"); 
  $("#main-content").css("height", "0");
  $('html, body').animate({ scrollTop: 0 }, 1000); // Scroll vers le haut rapidement 

  // Resete elements de la section lecture
  $("#ChordsLyric").css("display", "none");
  $(".Lyrics-Wrapper").css("display", "block");

  // Effacer la recherche
  $(".search-input").val(''); // Efface le texte dans la barre de recherche
  $('.Adoration').hide(); // Masque la section Adoration
  $('.Louange').show();   // Affiche la section Louange
  $('.Zik-Card').show();  // Affiche toutes les cartes
  $(".Btn-filter").removeClass("Btn-filter_Active");
  $("#Louange").addClass("Btn-filter_Active");

  // Reset z-index Autres sections
  $(".CantiqueList-Section").css("z-index", "200");
  $(".Annonce-Section").css("z-index", "200");
  $(".Lecture-Section").css("z-index", "200");

  // En suite animer la section 
  setTimeout(function () {
    $("#main-content").css("z-index", "600");
    $("#main-content").css("height", "100dvh");
    $("#main-content").css("background", "#1d1d1d");
  }, 300);
  
  // En suite reset la position des autres section et initialiser celle-ci
  setTimeout(function () {
    $("#main-content").css("position", "relative");
    $("#main-content").css("height", "");
    $("#main-content").css("background", "transparent"); 
    
    $(".CantiqueList-Section").fadeOut();
    $(".Annonce-Section").fadeOut();
    $(".Lecture-Section").fadeOut();
  }, 700); // Correspond au temps de l'animation CSS
});

//Pour Cantique List Section
$(".Btn-Lyrics").click(function(){
  $(".CantiqueList-Section").css("display", "block"); 
  $(".CantiqueList-Section").css("position", "fixed"); 
  $(".CantiqueList-Section").css("height", "0");
  $(".CantiqueList-Section").css("padding-top", "0");
  $(".CantiqueList-Section").css("padding", "0");
  $(".CantiqueList-Section").css("background", "#1d1d1d");
  $('html, body').animate({ scrollTop: 0 }, 1000); // Scroll vers le haut rapidement
  $(".search-input").val(''); // Efface le texte dans la barre de recherche 

  // Resete elements de la section lecture
  $("#ChordsLyric").css("display", "none");
  $(".Lyrics-Wrapper").css("display", "block");
  
  // Effacer la recherche
  $(".search-input").val(''); // Efface le texte dans la barre de recherche
  $('.Adoration').hide(); // Masque la section Adoration
  $('.Louange').show();   // Affiche la section Louange
  $('.Zik-Card').show();  // Affiche toutes les cartes
  $(".Btn-filter").removeClass("Btn-filter_Active");
  $("#Louange").addClass("Btn-filter_Active");

  $(".CantiqueList-Wrapper").hide();
  $(".Search-Wrapper").hide();
  // $(".Copyright").hide();
  
  // Reset z-index Autres sections
  $(".Annonce-Section").css("z-index", "200");
  $("#main-content").css("z-index", "200");
  $(".Lecture-Section").css("z-index", "200");
  
  // En suite animer la section 
  setTimeout(function () {
    $(".CantiqueList-Section").css("z-index", "500");
    $(".CantiqueList-Section").css("height", "100svh");
  }, 300); 

  // En suite reset la position des autres section et initialiser celle-ci
  setTimeout(function () {
    $(".CantiqueList-Section").css("position", "");
    $(".CantiqueList-Section").css("height", ""); 
    $(".CantiqueList-Section").css("padding-top", "200px");
    $(".CantiqueList-Section").css("background", "transparent"); 

    $(".CantiqueList-Wrapper").fadeIn();
    $(".Search-Wrapper").fadeIn();

    $("#main-content").hide();
    $(".Annonce-Section").hide();
    $(".Lecture-Section").hide();
  }, 700); // Correspond au temps de l'animation CSS
});

// Pour Annonce Section
$(".Btn-Annonce").click(function(){
  $(".Annonce-Section").css("display", "block");
  $(".Annonce-Section").css("position", "absolute");
  $(".Annonce-Section").css("width", "0%");
  $(".Annonce-Section").css("height", "100dvh");
  $(".Annonce-Section").css("background", "#1d1d1d");
  $('html, body').animate({ scrollTop: 0 }, 1000); // Scroll vers le haut rapidement
  $(".search-input").val(''); // Efface le texte dans la barre de recherche 

  // Resete elements de la section lecture
  $("#ChordsLyric").css("display", "none");
  $(".Lyrics-Wrapper").css("display", "block");

  // Effacer la recherche
  $(".search-input").val(''); // Efface le texte dans la barre de recherche
  $('.Adoration').hide(); // Masque la section Adoration
  $('.Louange').show();   // Affiche la section Louange
  $('.Zik-Card').show();  // Affiche toutes les cartes
  $(".Btn-filter").removeClass("Btn-filter_Active");
  $("#Louange").addClass("Btn-filter_Active");
  
  // Reset z-index Autres sections
  $(".CantiqueList-Section").css("z-index", "200");
  $("#main-content").css("z-index", "200");
  $(".Lecture-Section").css("z-index", "200");
  
  // En suite animer la section 
  setTimeout(function () {
    $(".Annonce-Section").css("z-index", "500");
    $(".Annonce-Section").css("width", "100%");
  }, 300);

  // En suite reset la position des autres section et initialiser celle-ci
    setTimeout(function () {
      $(".Annonce-Section").css("position", "relative");
      $(".Annonce-Section").css("height", "auto");
      $(".Annonce-Section").css("background", "transparent");

      $("#main-content").hide();
      $("#main-content").css("display", "none");
      $(".CantiqueList-Section").hide();
      $(".Lecture-Section").hide();
    }, 700); // Correspond au temps de l'animation CSS (800ms)
});

// Pour Lecture Section
$(".Zik-Card, .Card").click(function(){
  $(".Lecture-Section").css("display", "block");
  $(".Lecture-Section").css("position", "absolute");
  $(".Lecture-Section").css("width", "0%");
  $(".Lecture-Section").css("height", "100dvh");
  $(".Lecture-Section").css("background", "#1d1d1d");
  $('html, body').animate({ scrollTop: 0 }, 1000); // Scroll vers le haut rapidement
  $(".search-input").val(''); // Efface le texte dans la barre de recherche 

  // Resete elements de la section lecture
  $("#ChordsLyric").css("display", "none");
  $(".Lyrics-Wrapper").css("display", "block");
  
  // Effacer la recherche
  $(".search-input").val(''); // Efface le texte dans la barre de recherche
  $('.Adoration').hide(); // Masque la section Adoration
  $('.Louange').show();   // Affiche la section Louange
  $('.Zik-Card').show();  // Affiche toutes les cartes
  $(".Btn-filter").removeClass("Btn-filter_Active");
  $("#Louange").addClass("Btn-filter_Active");

  // Reset z-index Autres sections
  $(".CantiqueList-Section").css("z-index", "200");
  $("#main-content").css("z-index", "200");
  $(".Annonce-Section").css("z-index", "200");

  // En suite animer la section 
  setTimeout(function () {
    $(".Lecture-Section").css("z-index", "500");
    $(".Lecture-Section").css("width", "100%");
  }, 300);

  // En suite reset la position des autres section et initialiser celle-ci
    setTimeout(function () {
      $(".Lecture-Section").css("position", "relative");
      $(".Lecture-Section").css("height", "auto");
      $(".Lecture-Section").css("background", "transparent");

      $("#main-content").hide();
      $("#main-content").css("display", "none");
      $(".CantiqueList-Section").hide();
      $(".Annonce-Section").hide();
    }, 700); // Correspond au temps de l'animation CSS (800ms)
});


// ...........................................................
// Click bouton search
$(document).ready(function(){
  $(".search-button").click(function(){
    var button = $(".search-button");
    button.animate({scale: '1.1'}, "300");
    button.animate({scale: '1'}, "300");
  });
});

// ........................
// Pour la Recherche 
$(document).ready(function () {
  $('.search-input').on('input', function () {
    const query = $(this).val().toLowerCase(); // Récupère la valeur saisie (en minuscule)

    if (query.trim() === '') {
      // Si la recherche est vide, réinitialise l'état initial
      $('.Adoration').hide(); // Masque la section Adoration
      $('.Louange').show();   // Affiche la section Louange
      $('.Zik-Card').show();  // Affiche toutes les cartes
      
      // Reinitialise le height de la section
      $(".CantiqueList-Section").css("height", "");
    } else {
      // Si une recherche est en cours
      $('.Adoration').show(); // Affiche la section Adoration temporairement
      $('.Louange').show();   // Affiche aussi la section Louange

      // Ajouter le height sur la section
      $(".CantiqueList-Section").css("height", "100dvh");

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
    }
  });
});


// ........................
// Click Zik card
$(document).ready(function(){
  $(".Zik-Card").click(function(){
    const card = $(this);
    card.addClass("Zik-Card-Click"); // Ajoute la classe pour réduire la taille
    
    // Retire la classe après un délai (1s pour correspondre à la transition)
    setTimeout(() => {
      card.removeClass("Zik-Card-Click");
    }, 600);
  });
});

// ........................
// Click Btn filter
$(document).ready(function () {
  // Écoute le clic sur les boutons de filtre
  $(".Btn-filter").on("click", function () {
    // Supprime la classe 'Btn-filter_Active' de tous les boutons
    $(".Btn-filter").removeClass("Btn-filter_Active");
    // Ajoute la classe 'Btn-filter_Active' uniquement au bouton cliqué
    $(this).addClass("Btn-filter_Active");

    // Ajouter l'effet scale au bouton cliqué
    $(this).css("scale", "1.05");
    setTimeout(() => {
      $(this).css("scale", "1");
    }, 300);

    // Gestion de l'affichage des sections
    if ($(this).attr("id") === "Louange") {
      // Affiche la section Louange et masque Adoration
      $(".Louange").show();
      $(".Adoration").hide();
    } else if ($(this).attr("id") === "Adoration") {
      // Affiche la section Adoration et masque Louange
      $(".Adoration").css("display", "flex");
      $(".Louange").hide();
    }
  });
});

// ........................
// Click bouton Chors Lyric
$(document).ready(function(){
  $(".Btn-ChordsLyric").click(function(){
    var button = $(".Btn-ChordsLyric");
    button.animate({scale: '1.1'}, "300");
    button.animate({scale: '1'}, "300");

    // Afficher l'image
    $("#ChordsLyric").css("display", "block");
    $(".Lyrics-Wrapper").css("display", "none");
  });

});

// ........................
// Dynamisme des donne avec la page BDDLyrics
$(document).ready(function () {
  // Lorsqu'une card est cliquée
  $(".Zik-Card, .Card").on("click", function () {
    const lyricId = $(this).data("id"); // Récupérer l'ID de la card

    // Charger dynamiquement le contenu de la page BDDLyrics.html
    $.get("./BDDLyrics.html", function (data) {
      const $html = $("<div>").html(data); // Charger la page entière dans un conteneur
      const $lyricDiv = $html.find(`#${lyricId}`); // Trouver la div correspondant à l'ID

      if ($lyricDiv.length > 0) {
        // Mettre à jour le contenu de la section Lecture
        $("#ZikTitle").text($lyricDiv.find("#ZikTitle").text());
        $("#ZikAuteur").text($lyricDiv.find("#ZikAuteur").text());
        $("#LyricText").html($lyricDiv.find("#LyricText").html());
        $("#AudioSource").attr("src", $lyricDiv.find("audio source").attr("src"));
        $("#Btn-ZikDownload").attr("href", $lyricDiv.find("audio source").attr("src"));
        $("#ChordsLyric").attr("src", $lyricDiv.find("#ChordsLyric").attr("src"));

        // Recharger l'audio (important pour certains navigateurs)
        $("audio")[0].load();

      } else {
        alert("Les données pour cette chanson ne sont pas disponibles.");
      }
    });
  });
});



