const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obternet el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}