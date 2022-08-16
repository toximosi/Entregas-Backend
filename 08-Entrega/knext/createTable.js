import options from './options/mysql.js';
import knex from 'knex';
const database = knex(options);

//Creación de unatabla
database.schema.createTable('cars', table => {
    table.increments('id') //AUTO_INCREMENT
    table.string('name', 30) //VARCHANT(30)
    table.integer('price') //FLOAR
}).then(() => {
    console.log('table created');
}).catch(err => {
    console.log(err);
    throw err;
}).finally(() => {
    database.destroy();
});
