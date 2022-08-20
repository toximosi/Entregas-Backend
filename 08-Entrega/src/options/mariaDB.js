//import 
import knex from "knex";

//BD MariaDB.js
const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',//equivalente a localhost
        user: 'root',
        pasword: '',
        database: 'base_mysql'
    },
    pool: { min: 0, max: 7 }
};

let bd = knex(options);
/* export default bd;  */


export default {options, bd}; 