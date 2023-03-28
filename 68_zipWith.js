Este método es como `_.zip` excepto que acepta `iteratee` para especificar cómo deben combinarse los valores agrupados. 
El iterado se invoca con los elementos de cada grupo: (...grupo).

parámetros {...Array} [arrays] Los arrays a procesar.
parámetros {Function} [iteratee=_.identity] La funcion para combinar los valores agrupados.
devuelve {Array} Devuelve el nuevo array de elementos agrupados.

Ejemplo:

_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
devuelve => [111, 222]
