const argv = require('./config/yargs').argv;
const porHacer = require('./por_hacer/por_hacer')
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getlistado();
        console.log("listado", listado)
        for (let tarea of listado) {
            console.log("===== Por Hacer ========".green);
            console.log(tarea.descripcion);
            console.log("estado:", tarea.completado);
            console.log("========================".green);

        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        console.log('actualiza una tarea por hacer');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        console.log('elimina una tarea por hacer');
        break;
    default:
        console.log('comando no reconocido');
        break;
}