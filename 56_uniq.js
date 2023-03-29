Crea una versión sin duplicados de una matriz, utilizando [`SameValueZero`](http:ecma-international.org/ecma-262/7.0/#sec-samevaluezero) para comparaciones de igualdad, en las que solo la primera aparición de cada elemento se mantiene. 
El orden de los valores de resultado está determinado por el orden en que ocurren en la matriz.

parámetros {Array} array El array a inspeccionar.
devuelve {Array} Devuelve el array libre de duplicados.

Ejemplo:
import _ from 'lodash';
_.uniq([2, 1, 2]);
devuelve => [2, 1]
