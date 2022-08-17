import options from './options/mysql.js';
import knex from 'knex';
const database = knex(options);

//devuelve coches con precio superior a 3
database.from('cars').select('name', 'price').where('price', '>', '3')
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