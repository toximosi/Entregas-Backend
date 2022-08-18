//import 
import knex from "knex";

//BD MariaDB.js
const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        pasword: '',
        database: 'first_db_product'
        
    }
};

let db = knex(dbMysql);
createTable = () => {
    
    bd.schema.createTable('products', table => {
        //table.primary('id');
        table.increments('id');
        table.string('title', 40).nullable(false);
        table.integer('price').nullable(false);
        table.string('image', 100).nullable(false);
    });
};
createTable();

export default db;