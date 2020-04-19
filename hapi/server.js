//  'use strict';

const Hapi = require('@hapi/hapi');
const {configureRoutes} = require('./src/routes/routes');


const init = async () => 
{

    const server = Hapi.server({
        port: 81,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    await configureRoutes(server)
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
