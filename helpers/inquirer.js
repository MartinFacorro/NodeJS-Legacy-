const inquirer = require('inquirer');
require('colors');

const prompt = inquirer.createPromptModule();

const preguntas = [
    {
        type : 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green } Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green } Listar tareas`
            },        
            {
                value: '3',
                name: `${'3.'.green } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green } Completar tareas(s)`
            },
            {
                value: '6',
                name: `${'6.'.green } Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green } Salir`
            }
        ]
    }
];

const inquirerMenu = async() => {
    //console.clear();
    console.log('========================='.green);
    console.log(' Seleccione una opcion'.green);
    console.log('=========================\n'.green);
    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presiones ${'Enter'.green} para continuar`
        }
    ];

    console.log ('\n');
    await inquirer.prompt(question);
}


module.exports = {
    inquirerMenu,
    pausa
}