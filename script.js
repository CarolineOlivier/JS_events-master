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

// Sélectionner le bouton hamburger
const hamburgerButton = document.querySelector('.navbar-toggler');

// Sélectionner l'élément navbarHeader
const navbarHeader = document.getElementById('navbarHeader');

// Ajouter un écouteur d'événement au bouton hamburger
hamburgerButton.addEventListener('click', function() {
  // Utiliser toggle pour ajouter/enlever la classe "collapse"
  navbarHeader.classList.toggle('collapse');
});

// Sélectionner la première card
const firstCard = document.querySelectorAll('.card')[0];

// Sélectionner le bouton "Edit" de la première card
const editButtonFirstCard = firstCard.querySelector('.btn-outline-secondary');

// Ajouter un écouteur d'événement pour le clic sur le bouton "Edit"
editButtonFirstCard.addEventListener('click', function() {
  // Changer la couleur du texte de la card en rouge
  firstCard.style.color = 'red';
});


// Sélectionner la deuxième card
const secondCard = document.querySelectorAll('.card')[1];

// Sélectionner le bouton "Edit" de la deuxième card
const editButtonSecondCard = secondCard.querySelector('.btn-outline-secondary');

// Ajouter un écouteur d'événement pour le clic sur le bouton "Edit"
editButtonSecondCard.addEventListener('click', function() {
  // Vérifier la couleur actuelle de la card et alterner entre vert et la couleur d'origine
  if (secondCard.style.color === 'green') {
    // Remettre la couleur d'origine (par défaut)
    secondCard.style.color = '';
  } else {
    // Changer la couleur du texte de la card en vert
    secondCard.style.color = 'green';
  }
});

// Sélectionner la navbar
const navbar = document.querySelector('.navbar');

// Sélectionner la balise <link> qui charge Bootstrap
const bootstrapLink = document.querySelector('link[rel="stylesheet"]');

// Ajouter un écouteur d'événement double-clic sur la navbar
navbar.addEventListener('dblclick', function() {
  // Si Bootstrap est actif, on le désactive
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false; // Réactiver Bootstrap
  } else {
    bootstrapLink.disabled = true; // Désactiver Bootstrap
  }
});
