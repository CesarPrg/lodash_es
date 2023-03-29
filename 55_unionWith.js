Este método es como `_.union` excepto que acepta `comparator` que se invoca para comparar elementos de `matrices`. 
Los valores de los resultados se eligen de la primera matriz en la que aparece el valor. 
Se invoca el comparador con dos argumentos: (arrVal, othVal).

parámetros {...Array} [arrays] El array a inspeccionar.
parámetros {Function} [comparator] El comparador invocado por cada elemento.
devuelve {Array} Devuelve el array de elementos combinados.

Ejemplo:
import _ from 'lodash';
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.unionWith(objects, others, _.isEqual);
devuelve => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]