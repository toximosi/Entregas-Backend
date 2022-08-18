import options from './options/mysql.js';
import knex from 'knex';
const database = knex(options);

const cars = [
    { name: 'car01', price: 1 },
    { name: 'car02', price: 2 },
    { name: 'car03', price: 3 },
    { name: 'car04', price: 4 },
    { name: 'car05', price: 5 },
    { name: 'car06', price: 6 },
    { name: 'car07', price: 7 },
    { name: 'car08', price: 8 },
]

//tabla
database('cars').insert(cars).then(() => { 
    console.log('data inserted');
}).catch((err) => { 
    console.log(err);
    throw err;
}).finally(() => {
    database.destroy();
})