Crea una matriz que excluye todos los valores dados usando [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) para comparaciones de igualdad.

Nota: A diferencia de `_.pull`, este método devuelve una nueva matriz.

parámetros {Array} El array a inspeccionar.
parámetros {...} [values] Los valores a excluir.
devuelve {Array} Devuelve el nuevo array de valores filtrados.

Ejemplo:

_.without([2, 1, 2, 3], 1, 2);
devuelve => [3]
