Crea una matriz de valores únicos que es el [diferencia simétrica](https://en.wikipedia.org/wiki/Symmetric_difference) de las matrices dadas. 
El orden de los valores de resultado está determinado por el orden que tienen en las matrices.

parámetros {...Array} [arrays] El array a  inspeccionar.
devuelve {Array} Devuelve el nuevo array de elementos filtrados.

Ejemplo:
import _ from 'lodash';
_.xor([2, 1], [2, 3]);
devuelve => [1, 3]