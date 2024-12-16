/**
 * A este archivo se le llama "Archivo BARRIL", por lo que exporta todos los otros módulos, permitiendo importar 
 * un conjunto de módulos despúes, simplemente importando este archivo index 
 */
export { crearDeck } from './crear-deck';
export { repartirCarta} from './repartir-carta';
export { shuffle } from './mezclar-mazo';
export { actualizarJuego, actualizarPuntos } from './actualizar-datos';
export { turnoCrupier } from './turno-crupier';