//import 
import knex from "knex";

const optionsMy = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',//equivalente a localhost
        user: 'root',
        pasword: '',
        database: 'base_mysql'
    },
    pool: { min: 0, max: 7 }
};

//SQLite
const options = {
    client: 'sqlite3',
    connection: {
        filename: "./mydb.sqlite"        
    },
    useNullAsDefault: true
};

let bd = knex(options);

/* createTable = async() => { 
    try {
        await db.schema.createTable('chats', (table => { 
        table.increments('id');
        table.string('user', 40).nullable(false);
        table.string('text').nullable(false);
        table.string('date', 30);
    }));
    } catch (err) {
        console.log(err);
    }
}
createTable(); */

export default {options, bd}; 