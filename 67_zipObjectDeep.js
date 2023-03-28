Este método es como `_.zipObject` excepto que admite rutas de propiedad.

parámetros {Array} [props=[]] Los identificadores de propiedad.
parámetros {Array} [values=[]] Los valores de las propiedades.
devuelve {Object} Devuelve el nuevo objeto.

Ejemplo:

_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
devuelve => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
