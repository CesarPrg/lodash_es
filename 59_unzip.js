Este método es como `_.zip` excepto que acepta una serie de archivos agrupados elementos y crea una matriz reagrupando los elementos en su configuración pre-zip.
  
parámetros {Array} array El array de elementos agrupados para procesar.
devuelve {Array} Devuelve el nuevo array de argumentos reagrupados.

Ejemplo:
import _ from 'lodash';
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
devuelve => [['a', 1, true], ['b', 2, false]]
 
_.unzip(zipped);
devuelve => [['a', 'b'], [1, 2], [true, false]]
 