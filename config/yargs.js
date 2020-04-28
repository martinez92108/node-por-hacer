//require
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'

}
const argv = require('yargs')
    .command('crear', 'crear un nuevo elemento', {
        descripcion

    })
    .command('actualizar', 'lista todos los elementos', {
        descripcion,
        completado
    })
    .command('borrar', 'elimina los archivos seleccionados', {
        descripcion

    })
    .help()
    .argv;
module.exports = {
    argv
}