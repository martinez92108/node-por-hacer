const fs = require('fs');
let listado_por_hacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listado_por_hacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no s epudo grabar', err);

    });
}
const cargarDB = () => {
    try {
        listado_por_hacer = require('../db/data.json');

    } catch (error) {
        listado_por_hacer = []

    }


}

const getListado = () => {
    cargarDB();
    return listado_por_hacer;


}

const crear = (descripcion => {
    cargarDB();
    let porhacer = {
        descripcion,
        completado: false
    };

    listado_por_hacer.push(porhacer);
    guardarDb();

    return porhacer;

})
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listado_por_hacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listado_por_hacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevolistado = listado_por_hacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })
    if (listado_por_hacer.length === nuevolistado.length) {
        return false;

    } else {
        listado_por_hacer = nuevolistado;
        guardarDb();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}