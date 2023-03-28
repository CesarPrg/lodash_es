Este método es como `_.xor` excepto que acepta `comparator` que es invocado para comparar elementos de `matrices`. El orden de los valores de los resultados es determinado por el orden en que ocurren en las matrices. 
Se invoca el comparador con dos argumentos: (arrVal, othVal).

parámetros {...Array} [arrays] El array a inspeccionar.
parámetros {Function} [comparator] El comparador invocado por el elemento.
devuelve {Array} Devuelve el nuevo array de elementos filtrados.

Ejemplo:

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.xorWith(objects, others, _.isEqual);
devuelve => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]