import knex from "knex";

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

export default class Products extends MongoDBContainer { 
    constructor() { 
        super(options, bd);
    }
}