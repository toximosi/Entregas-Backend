import options from './options/mysql.js';
import knex from 'knex';
const database = knex(options);

//ordena coches por precio decendente
database.from('cars').select('name', 'price').orderBy('price', 'desc')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    }).catch((err) => {
        console.log(err);
        throw err;
    }).finally(() => {
        database.destroy();
    });