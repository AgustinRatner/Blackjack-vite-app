
/**
 * Esta función reparte una carta del mazo
 * @param {Array<String>} deck 
 * @returns {String} Retorna una carta
 */
export const repartirCarta = (deck) => {
    console.log(deck)
    if(deck.length === 0){
        throw 'No se pueden repartir más cartas!';
    }

    return deck.pop();
};