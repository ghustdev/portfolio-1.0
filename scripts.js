const html = document.querySelector('html');
const checkbox = document.getElementById('checkbox');


checkbox.addEventListener('change', function() {
    html.classList.toggle('dark-mode')
})

// ----- Type.js -----

var typeEffect = new Typed(".multText", {
    strings: ["coder", "dev", "creator",'UX'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})
