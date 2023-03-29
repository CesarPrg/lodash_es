Este método es como `_.fromPairs` excepto que acepta dos matrices, uno de identificadores de propiedad y uno de valores correspondientes.

parámetros {Array} [props=[]] Los identificadores de propiedad.
parámetros {Array} [values=[]] Los valores de las propiedades.
devuelve {Object} Devuelve el nuevo objeto.

Ejemplo:
import _ from 'lodash';
_.zipObject(['a', 'b'], [1, 2]);
devuelve => { 'a': 1, 'b': 2 }