// Tu código aquí
let popped = 0

// Recupero todos los elementos HTML que representan globos
let balloons = document.querySelectorAll('div.balloon')

// Guardo el número de globos en una variable para saber cuantos hay que explotar. De esta manera, no dependemos de "hardcodear" un número más adelante en cualquier condición. Fíjate la nomenclatura: utilizamos 'const' y además, el nombre de la variable, va en mayúsculas
const TOTAL_BALLOONS = balloons.length

// A cada globo recuperado, le asociamos el evento 'mouseover'
balloons.forEach( (balloon) => {
    balloon.addEventListener('mouseover', popBalloon)
})

function popBalloon(e) {
    e.target.style.backgroundColor = "#ededed";
    e.target.textContent = "POP!";
    popped++;

    // Esta es la forma de eliminar un 'listener' sobre un elemento. ¿Qué listener tenemos que eliminar? Pues exactamente el listener del globo que acabamos de clicar, es decir, el elemento HTMLObject contenido en la propiedad 'e.target'
    e.target.removeEventListener('mouseover', popBalloon)
    checkGameEnd()
}

function checkGameEnd() {

    // Si todavía no hemos explotado todos los globos, acabamos inmediatamente esta función, y no hacemos nada más
    if (popped != TOTAL_BALLOONS) {
        return
    }

    let gallery = document.querySelector('#balloon-gallery');
    let message = document.querySelector('#yay-no-balloons');
    gallery.innerHTML = '';
    message.style.display = 'block';
}
