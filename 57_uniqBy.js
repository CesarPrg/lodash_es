Este método es como _.uniq excepto que acepta iteratee, que se invoca para cada elemento de la matriz, para generar el criterio por el cual se calcula la unicidad. 
El orden de los valores de resultado está determinado por el orden en que aparecen en la matriz. 
El iterado se invoca con un argumento (valor).

parámetros {Array} array El array a inspeccionar.
parámetros {Function} [iteratee=_.identity] El iterador invocado por cada elemento.
devuelve {Array} Devuelve el nuevo array libre de duplicados.

Ejemplo:

_.uniqBy([2.1, 1.2, 2.3], Math.floor);
devuelve => [2.1, 1.2]
