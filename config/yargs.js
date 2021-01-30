const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
}

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente una tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Atualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra alguna tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}