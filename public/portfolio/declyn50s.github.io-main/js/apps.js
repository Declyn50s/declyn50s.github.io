// Initialisation du plugin Owl Carousel
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});

// Gestion du clic sur les éléments du carousel
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

// Récupération des éléments HTML
const carousel = document.querySelector('.owl-carousel');
const items = document.querySelectorAll('.item');

// Initialisation de l'index de l'élément actif
let currentItem = 0;

// Gestion de la navigation au clavier
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) { // touche "flèche gauche"
    currentItem = (currentItem === 0) ? items.length - 1 : currentItem - 1; // gestion de la boucle
  } else if (event.keyCode === 39) { // touche "flèche droite"
    currentItem = (currentItem === items.length - 1) ? 0 : currentItem + 1; // gestion de la boucle
  }

  // Mise à jour de la classe "active" pour l'élément actif
  items.forEach(item => item.classList.remove('active'));
  items[currentItem].classList.add('active');

  // Défilement du carousel jusqu'à l'élément actif
  carousel.scrollTo({
    left: items[currentItem].offsetLeft - carousel.offsetLeft,
    behavior: 'smooth'
  });
});

// Récupération des éléments HTML de la navigation
const navLinks = document.querySelectorAll('nav a');

// Récupération des sections
const sections = document.querySelectorAll('section');

// Fonction qui vérifie quelle section est visible à l'écran et ajoute la classe "nav-active" à la nav correspondante
function setActiveNav() {
  const scrollPos = window.scrollY;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('nav-active');
        } else {
          link.classList.remove('nav-active');
        }
      });
    }
  });
}

// Appel initial de la fonction
setActiveNav();

// Gestion de l'événement de scroll pour mettre à jour la navigation
window.addEventListener('scroll', setActiveNav);

// Gestion du menu burger
function toggleMenu() {
  var menu = document.querySelector('.side-menu');
  menu.classList.toggle('show-menu');
}

//Scroll Progress

const scrollLine = document.querySelector('.scroll-line');

function fillScrollLine() {
  const windowHeight    = window.innerHeight;
  const fullHeight      = document.body.clientHeight;
  const scrolled        = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

  scrollLine.style.width = `${percentScrolled}%`;
}

window.addEventListener('scroll', debounce(fillScrollLine));

function debounce(func, wait = 15, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// sélectionne le bouton de défilement en haut de la page
var scrollBtn = document.querySelector('.scroll-up');

// écoute l'événement de défilement de la page
window.onscroll = function() {
  // si la page a été défilée de plus de 100 pixels, affiche le bouton
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// écoute l'événement du clic sur le bouton de défilement
scrollBtn.onclick = function() {
  // fait défiler la page vers le haut avec une animation de 500 millisecondes
  window.scrollTo({ top: 0, behavior: 'smooth' });
};