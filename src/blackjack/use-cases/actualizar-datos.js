import {valorCarta} from './valor-carta';

/**
 * Esta función permite actualizar los puntos del juego
 * @param {Number} indexParticipante ID de jugador 
 * @param {String} carta Carta repartida
 * @param {Array<Number>} puntosParticipantes Puntos de los jugadores
 */

export const actualizarPuntos = (indexParticipante,carta,puntosParticipantes) => {
    puntosParticipantes[indexParticipante] += valorCarta(carta);
};

/**
 * Esta función permite renderizar el juego al pedir una carta
 * @param {Number} indexParticipante ID de jugador
 * @param {Number} puntos Puntos del jugador
 * @param {String} carta Carta repartida
 */
export const actualizarJuego = (indexParticipante,puntos,carta) => {
    let cartaHTML =  document.createElement('img');
    const jugadorCartas = document.querySelector('#jugador-cartas');
    const computadoraCartas = document.querySelector('#computadora-cartas');
    let puntosHTML = document.querySelectorAll('small');
    cartaHTML.src = `assets/cartas/${carta}.png`;
    cartaHTML.classList.add('carta');

    (indexParticipante === 0) ? jugadorCartas.append(cartaHTML) : computadoraCartas.append(cartaHTML);
    puntosHTML[indexParticipante].innerText = puntos;
};