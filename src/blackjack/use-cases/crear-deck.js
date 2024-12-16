/**
 * Esta función permite crear el mazo
 * @param {array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {array<string>} tiposEspeciales Ejemplo: ['A','K','Q','J']
 * @returns {array<string>} retorna un nuevo mazo de cartas.
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if( !tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('Tipos de carta es obligatorio como un arreglo de string');

    if( !tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('Tipos especiales es obligatorio como un arreglo de string');
    
    
    let deck = [];

    for(let i=2; i<=10; i++){
        for(let tipo of tiposDeCarta){
            deck.push(i + tipo);
        }
    }
    for(let esp of tiposEspeciales){
        for(let tipo of tiposDeCarta){
            deck.push(esp + tipo);
        }
    }
    return deck;
};