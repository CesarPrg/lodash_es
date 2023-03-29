Este método es como `_.unzip` excepto que acepta `iteratee` para especificar cómo deben combinarse los valores reagrupados.
El iterado se invoca con el elementos de cada grupo: (...grupo).

parámetros {Array} El array de elementos a procesar.
parámetros {Function} [iteratee=_.identity] La funcion para reagrupar los valores combinados.
devuelve {Array} El array de elementos reagrupados.

Ejemplo:
import _ from 'lodash';
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
devuelve => [[1, 10, 100], [2, 20, 200]]

_.unzipWith(zipped, _.add);
devuelve => [3, 30, 300]
