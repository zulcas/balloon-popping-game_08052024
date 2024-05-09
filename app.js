// tu código aquí


// Recupero todos los elementos del DOM con la class="balloon"
const balloons = document.querySelectorAll('.balloon');
console.log("🚀 ~ file: app.js:4 ~ balloons:", balloons);

// variable de estado que me indica cuantos balones quedan por explotar
let totalBalloonstoBePooped = balloons.length;
console.log("🚀 ~ file: app.js:10 ~ totalBalloonstoBePooped:", totalBalloonstoBePooped);
document.querySelector('#left').textContent = totalBalloonstoBePooped;

// defino una función para gestionar el evento mouseover
function popBallon(event) {
    // 1. Debemos actualizar la propiedad event.target.textContent adecuadamente para simular que hemos hecho "POOP!" en el globo
    console.log(event);
    event.target.textContent = "POOP!";

    // 2. Temos que actualizar los estilos en línea de event.target.style adecuadamente
    event.target.style.background = "none";

    // 3. Fijaos que el contador de globos que faltan por explotar, no funciona. Solucionadlo!
    totalBalloonstoBePooped = totalBalloonstoBePooped - 1;
    document.querySelector('#left').textContent = totalBalloonstoBePooped;

    // PAra eliminar un listener de un elemento (el globo que acava de 'petar') tenemos que usar el método 
    // El primer parámetro es el nombre del evento, y el segundo, el nombre de la función
    event.target.removeEventListener('mouseover', popBallon);

    // FALTA: Si el número de globos ha llegado a 0, debemos ocultar todos los balones y mostrar el div <div id="yay-no-balloons">
    if (totalBalloonstoBePooped == 0) {
        document.querySelector('#yay-no-balloons').style.display = "block";
        document.querySelector('#balloon-gallery').style.display = "none";
    }

}

// Voy a asociar a cada uno de estos elementos, un listener, para esuchar el evento mouseover
// Lo que hacemos con forEach, es iterar por cada elemento del array de nodos, y asociarle un listener
balloons.forEach(elem => {
    elem.addEventListener('mouseover', popBallon);
});