import { crearDeck, repartirCarta as repartir, shuffle, actualizarJuego, actualizarPuntos, 
    turnoCrupier} from './use-cases/index';

(() => {
    'use strict'

    let tipos = ['C','D','H','S'];
    let especiales = ['A','K','Q','J'];
    let deck = [];
    let puntos = [0,0]; //Puntos[0] -> Jugador 1 & puntos[N] -> Jugador N (Computadora)

    //Referencias del HTML
    const btnNuevo = document.querySelector('#btnNuevo');
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    const jugadorCartas = document.querySelector('#jugador-cartas');
    const computadoraCartas = document.querySelector('#computadora-cartas');
    let puntosHTML = document.querySelectorAll('small');

    //EVENTOS
    btnPedir.addEventListener('click', () => {
        let carta = repartir(deck);
        actualizarPuntos(0,carta,puntos);
        if(puntos[0] > 21){
            alert('Lo siento mucho, perdiste!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoCrupier(deck,puntos);
        }
        else if(puntos[0] === 21){
            alert('Lograste 21, excelente!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoCrupier(deck,puntos);
        }

        actualizarJuego(0,puntos[0],carta);
    });
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCrupier(deck,puntos);
    });
    btnNuevo.addEventListener('click', () => {

        deck = crearDeck(tipos,especiales);
        shuffle(deck); //Mezcla el mazo

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        puntos[0] = 0;
        puntos[1] = 0;
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        jugadorCartas.innerHTML = '';
        computadoraCartas.innerHTML = '';
    
    });

})();

