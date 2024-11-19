                                                  // Fonctionnalité 1 : Afficher "clic" en console lors du clic sur le footer
                                                 // Fonctionnalité 1 : Afficher "clique" en console lors du clic sur le footer
                                                // Fonctionnalité 1-bis : Afficher "clic numéro x" en console avec incrémentation à chaque clic

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

                                                // Fonctionnalité 2 : Activer/désactiver le menu hamburger au clic

// Sélectionner le bouton hamburger
const hamburgerButton = document.querySelector('.navbar-toggler');

// Sélectionner l'élément navbarHeader
const navbarHeader = document.getElementById('navbarHeader');

// Ajouter un écouteur d'événement au bouton hamburger
hamburgerButton.addEventListener('click', function() {
  // Utiliser toggle pour ajouter/enlever la classe "collapse"
  navbarHeader.classList.toggle('collapse');
});

                                               // Fonctionnalité 3 : Changer la couleur du texte de la première card en rouge lors du clic sur "Edit"

// Sélectionner la première card
const firstCard = document.querySelectorAll('.card')[0];

// Sélectionner le bouton "Edit" de la première card
const editButtonFirstCard = firstCard.querySelector('.btn-outline-secondary');

// Ajouter un écouteur d'événement pour le clic sur le bouton "Edit"
editButtonFirstCard.addEventListener('click', function() {
  // Changer la couleur du texte de la card en rouge
  firstCard.style.color = 'red';
});

                                              // Fonctionnalité 4 : Alterner la couleur du texte de la deuxième card entre vert et la couleur d'origine

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

                                              // Fonctionnalité 5 : Désactiver/réactiver Bootstrap en double-cliquant sur la navbar

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

                                              // Fonctionnalité 6 : Réduire l'image et cacher le texte au survol du bouton "View" de chaque card

// Sélectionner toutes les cards
const allCards = document.querySelectorAll('.card');

// Parcourir toutes les cards
allCards.forEach(card => {
  // Sélectionner le bouton "View" de chaque card
  const viewButton = card.querySelector('.btn-success');
  
  // Sélectionner l'image de la card
  const cardImage = card.querySelector('.card-img-top');
  
  // Sélectionner le texte de la card
  const cardText = card.querySelector('.card-text');

  // Variable pour suivre l'état de la réduction
  let isReduced = false;  //isReduced est initialisée à false.
//Cela signifie que, par défaut, l'image est dans son état normal.

  // Ajouter un écouteur d'événement 'mouseover' sur le bouton "View"
  viewButton.addEventListener('mouseover', function() {
    if (!isReduced) {   //Appliquer la réduction seulement si l'image n'est pas déjà réduite 
      //(permet de réduire les recalculs et d'éviter les effets de tremblement.)
      cardImage.style.transition = 'transform 0.3s ease';
      cardImage.style.transform = 'scale(0.2)';   // Utilisation de  scale pour réduire l'image et éviter les recalculs excessifs
      
      // Cacher le texte de la card en utilisant opacity au lieu de display pour minimiser les recalculs
      cardText.style.transition = 'opacity 0.3s ease';
      cardText.style.opacity = '0';
      isReduced = true;  //la variable isReduced est mise à jour à true pour indiquer que l'image est maintenant réduite.
      //Cela permet de s'assurer que l'image n'est réduite qu'une seule fois lors du survol.
    }
  });

  // Ajouter un écouteur d'événement 'mouseout' sur le bouton "View"
  viewButton.addEventListener('mouseout', function() {
    if (isReduced) {       //Restaurer la taille de l'image et le texte seulement si l'image est réduite
      // Remettre l'image à sa taille normale
      cardImage.style.transform = 'scale(1)';
      
      // Réafficher le texte de la card
      cardText.style.opacity = '1';

      // Mise à jour de  l'état  pour indiquer que la réduction a été annulée
      isReduced = false;  //la variable isReduced est mise à false pour indiquer que l'image a été restaurée à son état initial (non réduite).
    }
  });
});

// La condition if permet de ne pas appliquer des changements inutiles si l'image est déjà réduite ou déjà à sa taille normale.
// Cela permet d'éviter de provoquer des recalculs constants qui entraînent des effets de tremblement.

//La fonction transform: scale(0.2) modifie la taille perçue de l'élément, en l'échelle à 20% de sa taille originale, 
//ce qui est visuellement équivalent à width: 20% ( problèmes de tremblement à cause des recalculs du layout.)
//Cependant, scale() ne modifie pas la taille dans le sens du calcul du layout de la page.
// C'est pourquoi c'est moins coûteux en recalculs et en changements de mise en page.
// cette solution est plus stable que l'utilisation de width et plus efficace pour éviter les recalculs excessifs.

                                                // Fonctionnalité 7 : Déplacer la dernière card en premier au clic sur le bouton gris "==>"

const moveCardButton = document.querySelector('.btn.btn-secondary.my-2'); // Sélectionner le bouton gris "==>"
const cardContainer = document.querySelector('.album .row'); // Sélectionner le conteneur des cards

//Le bouton gris est un lien (<a>), donc cliquer dessus risque de rafraîchir la page ou de la rediriger.
moveCardButton.addEventListener('click', function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien 
  //(href="#" signifie que le lien pointe vers le haut de la page courante (ancre de l'ID vide).
 //cf ligne fichier html :    <a href="#" class="btn btn-secondary my-2">==></a>
  //en cliquant sur le lien, le navigateur :
//Rafraîchit la page ou fait défiler la page vers le haut, ce qui est l'action par défaut.

  // Sélection de la dernière card
  const lastCard = cardContainer.lastElementChild;

  // Déplacement de la dernière card en première position
  cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
});

