Crea una matriz de elementos agrupados, el primero de los cuales contiene los primeros elementos de las matrices dadas, el segundo de los cuales contiene los segundos elementos de las matrices dadas, y así sucesivamente.

parámetros {...Array} [arrays]Los arrays a procesar.
devuelve {Array} Devuelve el nuevo array de elementos agrupados.

Ejemplo:
import _ from 'lodash';
_.zip(['a', 'b'], [1, 2], [true, false]);
devuelve => [['a', 1, true], ['b', 2, false]]