/**
 * Esta función permite obtener el valor de una carta del mazo
 * @param {String} carta Ejemplo: 'AD' (As de diamantes)
 * @returns {Number} Devuelve un valor entero
 */
export const valorCarta = (carta) => {
    if(typeof carta !== "string")
        throw Error('Formato de carta incorrecto!');

    let valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
            ('A' === valor) ? 11 : 10
            : valor * 1;
};