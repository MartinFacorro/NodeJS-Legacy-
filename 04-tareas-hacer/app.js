const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors');


console.clear();

const main = async()=>
{
    let opt ='';
    const tareas = new Tareas();
    do {
        //IMPRIMIR EL MENU
        opt = await inquirerMenu(); 

        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea( desc );
                break;
            
            case '2':
                console.log ( tareas.listadoArr );
        
            default:
                break;
        }


        
        await pausa();

    } while(opt !== '0')
}

main();