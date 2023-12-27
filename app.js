const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors');


console.clear();

const main = async()=>
{
    let opt ='';
    do {
        //opt = await inquirerMenu();
        //console.log({opt});

        //const tareas = new Tareas();
        //console.log(Tareas);

        //const tarea = new Tarea('Comprar comida');
        //console.log(tarea);

        
        await pausa();

    } while(opt !== '0')
}

main();