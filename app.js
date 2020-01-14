// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
//const porHacer = require('./por-hacer/por-hacer');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = getListado();
        for (const tarea of listado) {

            console.log(colors.green('======== Por hacer ========='));
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log(colors.green('============================'));
        }
        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}