const html = document.querySelector('html');


//* ----- Type.js -----

var typeEffect = new Typed(".multText", {
    strings: ["Maquiadora", "Profissional"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

//* ----- Scroll animate -----

// seleciona as seções / class
const sections = document.querySelectorAll('.hidden');
const backt_top = document.querySelector('.back-top');

// função que observa os elementos do html
const myObserver = new IntersectionObserver( (entries) => { // função arrow
    // o console funciona quando o scroll está em cima da class
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            backt_top.style.display = 'flex';
        } else{
            entry.target.classList.remove('show');
            backt_top.style.display = 'none';
        }
    })
});

sections.forEach( (element) => myObserver.observe(element));
