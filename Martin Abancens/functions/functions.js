const async = require('async');

exports.run = (config) => {

    async.waterfall([
        (cb) => {
            // Llamo la funcion por primera vez y falla porque config no esta creado
            exports.funcionQueHariaAlgo(config, (err, result) => {
                console.log('Primera Ejecucion: Falla porque no esta configurado el singleton');
                if (err || !result) {
                    console.log('Error: ', err);
                    console.log('--------------');
                    // Lo configuramos porque fallo
                    config.setConfig({
                        mySql: {
                            host: 'blabla.asd.com'
                        }
                    });

                    return cb(null);
                }
            });
        },
        (cb) => {
            // Vuelvo a llamarla como muestra de que esta configurado
            exports.funcionQueHariaAlgo(config, (err, result) => {
                console.log('Segunda Ejecucion: Ya esta configurado asi que no entrara en el error');
                if (err || !result) {
                    return cb(err);
                }

                return cb(null, result);
            });
        }
    ], (err, result) => {
        // No retorno el cb del primer caso para demostrar el seteo
        if (err) {
            console.log(err);
        }

        console.log(result);
    })
}

exports.funcionQueHariaAlgo = (config, cb) => {
    config.getConfig((err, result) => {
        if (err) {
            return cb(err);
        }
        // Aca haria algo, such wow
        return cb(null, result);
    })
}