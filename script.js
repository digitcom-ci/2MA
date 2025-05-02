// Gérer hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('active');
});

// Gérer hambur-ger
const hamburGer = document.querySelector('.hambur-ger');
const navlinks = document.querySelector('.navlinks');

if (hamburGer && navlinks) {
    hamburGer.addEventListener('click', () => {
        hamburGer.classList.toggle('open');
        navlinks.classList.toggle('active');
    });
}


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // change toutes les 5 secondes

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
    }, 800); // correspond à la durée de la transition CSS
  }, 800); // 3 secondes de chargement minimum
});


