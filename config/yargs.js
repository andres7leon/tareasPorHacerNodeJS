const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'esta parametro permite crear una tarea', {
        descripcion
    })
    .command('actualizar', 'este parametro permite actualizar una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'este parametro permite eliminar una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}