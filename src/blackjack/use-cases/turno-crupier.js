import { repartirCarta as repartir, actualizarJuego, actualizarPuntos} from './index';

/**
 * Esta función contiene la LOGICA CRUPIER: El jugador seleccionó "detener", llegó a 21 o se paso y perdió.
 * @param {Array<String>} deck Mazo de cartas
 * @param {Number} puntos Puntos del jugador
 */
export const turnoCrupier = (deck, puntos) => {
    if(puntos[0] > 21){
        alert('La computadora ganó!');
    }
    else{
        do{
            let carta = repartir(deck);
            actualizarPuntos(1,carta,puntos);
            actualizarJuego(1,puntos[1],carta);
        }while(puntos[1] <= puntos[0] && puntos[1] < 21);
        
        if(puntos[1] > 21){
            alert('Felicitaciones, ganaste!');
        }
        else if (puntos[1] === puntos[0]){
                alert('Empataste, intentalo nuevamente!');
        }    
        else{
            alert('Lo siento mucho, perdiste!');
        }
    }
};