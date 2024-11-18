// @ts-nocheck
// Afficher l'avertissement sur les écrans larges
function checkScreenWidth() {
  const desktopWarning = document.getElementById('desktop-warning');
  const mainContent = document.getElementById('main-content');
  const loadingScreen = document.getElementById('loading-screen');

  if (window.innerWidth > 1025) { // Seuil pour les écrans plus grands qu'une tablette
      desktopWarning.style.display = 'flex';
      mainContent.style.display = 'none';
      loadingScreen.style.display = 'none';
  } else {
      desktopWarning.style.display = 'none';
      mainContent.style.display = 'block';
  }
}

// Vérifie la taille de l'écran au chargement et lors des redimensionnements
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);


// Script pour gérer la transition de chargement
window.addEventListener('load', () => {
  setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      const mainContent = document.getElementById('main-content');

      // Ajout de la classe pour réduire la hauteur
      // @ts-ignore
      loadingScreen.classList.add('hide');

      // Après l'animation de réduction, masquez complètement la div
      setTimeout(() => {
          // @ts-ignore
          loadingScreen.style.display = 'none';
          // @ts-ignore
          mainContent.style.display = 'block';
      }, 1000); // Correspond à la durée de transition de 1 seconde
  }, 2000); // Temps de chargement initial (ici 3 secondes)
});
