//import 
import knex from "knex";
import db from "./mariaDB";

//SQLite
const options = {
    client: 'sqlite3',
    connection: {
        filename: "./DB/sqlitedb.sqlite"        
    },
    useNullAsDefault: true
};

let dbSqlite = knex(options);

createTable = async() => { 
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
createTable();

export default dbSqlite;