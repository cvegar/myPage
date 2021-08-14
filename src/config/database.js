
    const { Pool } = require('pg');
    //ConnectionConfiguration
    const config={
        user: 'postgres',
        host: 'localhost',
        password:'pgsql',
        database: 'postgres'
    }
    const pool =new Pool(config);
    pool.on('connect', () => {
        console.log('conexion estrablecida c:');
    });

    module.exports = pool;
