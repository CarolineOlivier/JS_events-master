// Sélectionner l'élément footer
const footer = document.querySelector('footer');

// Déclarer une variable compteur pour compter les clics
let clickCount = 0;

// Ajouter un écouteur d'événement pour détecter le clic
footer.addEventListener('click', function() {
  // Incrémenter le compteur de clics
  clickCount++;
  
  // Afficher le nombre de clics en console
  console.log(`clic numéro ${clickCount}`);
});
PeriodicWave