require('colors');

const mostrarMenu= () =>
{

    return new Promise ( resolve => {

        console.clear();
        console.log('========================='.green);
        console.log(' Seleccione una opcion'.green);
        console.log('=========================\n'.green);
    
        console.log(`${'1.'.green } Crear tarea`);
        console.log(`${'2.'.green } Listar tareas`);
        console.log(`${'3.'.green } Listar tareas completadas`);
        console.log(`${'4.'.green } Listar tareas pendientes`);
        console.log(`${'5.'.green } Completar tareas(s)`);
        console.log(`${'6.'.green } Borrar tarea`);
        console.log(`\n${'0.'.green } Salir \n`);
    
        //habilitar la intervencion del usuario
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        //utilizado para el stdout
        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
    
        });
    

    });



}

//pausar aplicacion
const pausa = () => { 
    return new Promise (resolve => {
            const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        //utilizado para el stdout
        readline.question(`\nPresione ${ 'ENTER'.green} para continuar`, (opt) => {
            readline.close();
            resolve();

        });
    });


}

module.exports = {
    mostrarMenu,
    pausa
}