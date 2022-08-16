import options from './options/mysql.js';
import knex from 'knex';
const database = knex(options);

//tabla
database('cars').select('*')
    .then(() => { 
    console.log('data inserted');
}).catch((err) => { 
    console.log(err);
    throw err;
}).finally(() => {
    database.destroy();
})