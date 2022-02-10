let palabras = [
    'LOGICA',
    'PYTHON',
    'ALURA',
    'AHORCADO',
    'VARIABLES',
    'JAVASCRIPT',
    'MEXICO',
    'PROGRAMACION',
    'UNODOSTRES',
    'ORACLEONE',
];
let letras = '';
let palabraOculta = ''; //Palabra oculta
let palabraAdivinada = ''; //palabra adivinada
let vidas = 7;
let botonVerificar = document.querySelector('.comprobar');
let juego = document.querySelector('.jugar');
let inputahorcado = document.querySelector('.letra');
let nuevo = document.querySelector('.iniciar');
let agregando = document.querySelector('.nuevapalabra');
let palabraAgregada = document.querySelector('.agregarpalabra');

//ALERT CON SWEET ALERT 2

swal({
    title: 'Instrucciones',
    text: 'Bienvenido al juego del ahorcado donde tendrás \n que adivinar una palabra al azar. \n\n Para comenzar el juego debes dar click en iniciar juego \n luego colocar una letra en el recuadro morado para luego\n darle al boton de comprobar hasta adivinar la palabra,\ncada letra que uses la veras del lado derecho y si haz \n perdido para volver a iniciar deberás darle al boton nuevo juego. \n\n Si quieres agregar una nueva palabra y desafiar a tus amigos \n puedes hacerlo en el recuadro naranja y darle \n al boton agregar para guardar tu palabra',
    button: 'Entendido!',
});

//FUNCIONES

function nuevoJuego() {
    window.location.reload();
    inputahorcado.value = document.querySelector('placeholder');
}
nuevo.onclick = nuevoJuego;

function sortearPalabra() {
    inputahorcado.focus();
    iniciar();
    plataforma();
}

juego.onclick = sortearPalabra;

function iniciar() {
    palabraOculta = palabras[Math.floor(Math.random() * palabras.length)];
    console.log(palabraOculta);
    for (let i = 0; i < palabraOculta.length; i++) {
        palabraAdivinada += '_';
    }
    document.querySelector('.palabra').innerHTML = palabraAdivinada;
}

function comprobar() {
    let letra = document.querySelector('.letra').value.toUpperCase();
    console.log(letra);
    let nuevaPalabra = '';
    for (let i = 0; i < palabraOculta.length; i++) {
        if (letra == palabraOculta[i]) {
            nuevaPalabra = nuevaPalabra + letra;
        } else {
            nuevaPalabra = nuevaPalabra + palabraAdivinada[i];
        }
    }
    if (nuevaPalabra == palabraAdivinada) {
        vidas--;
        document.querySelector(
            '.vida'
        ).innerHTML = `El número de vidas que restan son: ${vidas}`;
    }

    palabraAdivinada = nuevaPalabra;
    document.querySelector('.palabra').innerHTML = palabraAdivinada;

    if (vidas == 0) {
        document.querySelector('.derrota').innerHTML =
            'Una lastima haz perdido suerte la próxima';
        swal({
            title: 'Perdiste',
            text: 'Recuerda que si quieres volver a jugar debes darle\nal boton de nuevo juego',
            button: 'Entendido!',
        });
    }
    if (palabraAdivinada.search('_') == -1) {
        document.querySelector('.victoria').innerHTML =
            'Felicidades haz ganado!!';
    }
    ahorcado();
    letraIncorrecta();
    inputahorcado.value = '';
    inputahorcado.focus();
}
botonVerificar.onclick = comprobar;

function ahorcado() {
    if (vidas == 6) {
        soga();
    }
    if (vidas == 5) {
        cabeza();
    }
    if (vidas == 4) {
        cuerpo();
    }
    if (vidas == 3) {
        brazoIzq();
    }
    if (vidas == 2) {
        brazoDer();
    }
    if (vidas == 1) {
        piernaIzq();
    }
    if (vidas == 0) {
        piernaDer();
    }
}

function agregarPalabra() {
    palabras.push(agregando.value.toUpperCase());
    agregando.value = document.querySelector('placeholder');
    console.log(palabras);

    swal({
        title: 'Grandioso!!',
        text: 'Haz agregado una nueva palabra con éxito',
        icon: 'success',
        button: 'Entendido!',
    });
}

palabraAgregada.onclick = agregarPalabra;

function letraIncorrecta() {
    let letraUsada = document.querySelector('.letra').value;
    letras += letraUsada;
    console.log(letras);
    document.querySelector('.letrausada').textContent = `${letras}`;
}

//CANVAS

let tablero = document.querySelector('.canvas');
let pincel = tablero.getContext('2d');

function soga() {
    pincel.beginPath();
    pincel.lineWidth = 8;
    pincel.moveTo(504, 150);
    pincel.lineTo(504, 250);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();
}

function cabeza(x, y, radio, color) {
    pincel.beginPath();
    pincel.lineWidth = 8;
    pincel.arc(504, 300, 50, 0, 2 * Math.PI);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();
}
function cuerpo() {
    pincel.beginPath();
    pincel.lineWidth = 8;
    pincel.moveTo(504, 350);
    pincel.lineTo(504, 570);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();
}
function brazoIzq() {
    pincel.beginPath();
    pincel.lineWidth = 8;
    pincel.moveTo(504, 400);
    pincel.lineTo(410, 470);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();
}
function brazoDer() {
    pincel.beginPath();
    pincel.lineWidth = 8;
    pincel.moveTo(504, 400);
    pincel.lineTo(590, 470);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();
}
function piernaIzq() {
    pincel.beginPath();
    pincel.lineWidth = 8;
    pincel.moveTo(504, 566);
    pincel.lineTo(410, 655);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();
}
function piernaDer() {
    pincel.beginPath();
    pincel.lineWidth = 8;
    pincel.moveTo(504, 566);
    pincel.lineTo(590, 655);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();
}
function plataforma() {
    pincel.beginPath();
    pincel.lineWidth = 8;
    /* (x-derecha,y-abajo) */
    pincel.moveTo(1000, 150);
    pincel.lineTo(500, 150);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();

    pincel.beginPath();
    pincel.lineWidth = 8;
    /* (x-derecha,y-abajo) */
    pincel.moveTo(1000, 150);
    pincel.lineTo(1000, 700);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();

    pincel.beginPath();
    pincel.lineWidth = 8;
    /* (x-derecha,y-abajo) */
    pincel.moveTo(1000, 698);
    pincel.lineTo(900, 780);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();

    pincel.beginPath();
    pincel.lineWidth = 8;
    /* (x-derecha,y-abajo) */
    pincel.moveTo(1000, 698);
    pincel.lineTo(1100, 780);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();

    pincel.beginPath();
    pincel.lineWidth = 8;
    /* (x-derecha,y-abajo) */
    pincel.moveTo(1098, 778);
    pincel.lineTo(901, 778);
    pincel.strokeStyle = 'lime';
    pincel.stroke();
    pincel.closePath();
}
