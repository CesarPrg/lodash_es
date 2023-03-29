Este método es como `_.union` excepto que acepta `iteratee` que es invocado para cada elemento de cada `matriz` para generar el criterio por qué unicidad se calcula. Los valores de los resultados se eligen de la primera matriz en la que se produce el valor. 
El iterado se invoca con un argumento: (valor).

parámetros {...Array} [arrays] El array a inspeccionar.
parámetros {Function} [iteratee=_.identity] El iterador invocado por cada elemento.
devuelve {Array} Devuelve el array de elementos combinados.

Ejemplo:
import _ from 'lodash';
_.unionBy([2.1], [1.2, 2.3], Math.floor);
devuelve => [2.1, 1.2]