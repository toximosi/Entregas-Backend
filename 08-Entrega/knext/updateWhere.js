import options from './options/mysql.js';
import knex from 'knex';
const database = knex(options);

//actualiza coches con precio de 4 a 5
database.from('cars').where('price', '4').update({price:5})
    .then(() => {
            console.log('car update');
    }).catch((err) => {
        console.log(err);
        throw err;
    }).finally(() => {
        database.destroy();
    });