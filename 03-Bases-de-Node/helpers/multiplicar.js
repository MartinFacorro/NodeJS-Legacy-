const FileSystem = require('fs');

const crearArchivo = async(base = 0) => {

    try {

        let salida = '';

        console.log ( '=============================' );
        console.log ( 'Tabla del: ' + base );
        console.log ( '=============================' );
        
        
    
        for (let indice = 1 ; indice <= 10; indice++) {
            salida += `${ base } x ${ indice } = ${ base * indice }\n`;
        }
        
        console.log( salida );
        
        FileSystem.writeFileSync(`tabla-${ base }.txt`, salida);
            
        return `Se creo el archivo tabla-${ base }.txt`;
            
    } catch (err) {
        throw err;
    }

};

module.exports = {
    crearArchivo
};