Este método es como `_.uniq` excepto que acepta `comparator` que se invoca para comparar elementos de `array`. 
El orden de los valores de los resultados es determinado por el orden en que ocurren en la matriz.
Se invoca el comparador con dos argumentos: (arrVal, othVal).

parámetros {Array} array El array a inspeccionar.
parámetros {Function} [comparator] El comparador invocado por elemento.
devuelve {Array} Devuelve el nuevo array libre de duplicados.

Ejemplo:
import _ from 'lodash';
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.uniqWith(objects, _.isEqual);
devuelve => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]