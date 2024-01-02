//https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback


const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

const base = 8;


crearArchivo (base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log( err ) );


