Este método es como `_.xor` excepto que acepta `iteratee` que es invocado para cada elemento de cada `matriz` para generar el criterio por el cual se comparan. El orden de los valores de los resultados se determina por el orden en que ocurren en las matrices. 
El iterado se invoca con un argumento: (valor).

parámetros {...Array} [arrays] El array a inspeccionar.
parámetros {Function} [iteratee=_.identity] La iteracion invocada por elemento.
devuelve {Array} Devuelve el nuevo array de valores filtrados.

Ejemplo:
import _ from 'lodash';
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
devuelve => [1.2, 3.4]

_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
devuelve => [{ 'x': 2 }]