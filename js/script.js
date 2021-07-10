const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: false
})

ScrollReveal().reveal('.header', { delay: 200 });
ScrollReveal().reveal('.content', { delay: 400 });

var typed = new Typed('.subtitle', {
    strings: ["", "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."],
    typeSpeed: 20
  });