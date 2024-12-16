
/**
 * Esta función me permite mezclar el mazo.
 * @param {Array<String>} deck Ejemplo: ['AD','10S','7C','JD']
 */
export const shuffle = (deck) => {
    let randomIndex = undefined;
    let aux = undefined;

    for (let i = deck.length; i > 0; i--){
        randomIndex = Math.floor(Math.random() * i);
        aux = deck[i-1];
        deck[i-1] = deck[randomIndex];
        deck[randomIndex] = aux; 
    }
}