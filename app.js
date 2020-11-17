const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const comando = argv._[0];
const colors = require('colors')

switch (comando) {

    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('==========='.green)
            console.log(tarea.descripcion)
            console.log(tarea.completado)
            console.log('==========='.green)
        }
    break;    

    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.c)
        console.log(actualizado)
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('La tarea que se ha eliminado es: ');
        console.log(borrado);
        console.log('==========='.red);
    break;

    default:
        console.log('Comando no reconocido');
    
}
