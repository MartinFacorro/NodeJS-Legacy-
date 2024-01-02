console.log('Inicia programa');

// setTimeout(su callback no es bloqueante)
setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 ); // Ejecuta luego de 3 segundos.

setTimeout( () => {
    console.log('Segundo Timeout');
}, 0 );

setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );



console.log('Fin programa');

/*
Inicia programa
Fin programa
Segundo Timeout
Tercer Timeout
Primer Timeout
*/