import dotenv from 'dotenv';

const mode = process.argv.slice(2)[0];

dotenv.config({
    path: mode === "PROD" ? './.env.production' : './.env.development'
});

export default {
    app: {
        MODE: process.env.MODE ||   'DEV',
        PORT: process.env.PORT ||   8080,
        DEBUG: process.env.DEBUG || false,
        SECRET: process.env.SECRET
    },
    mongo: {
        MONGO_URI: process.env.MONGO_URI,
        MONGO_USER: process.env.MONGO_USER,
        MONGO_PASS: process.env.MONGO_PASS,    
        MONGO_DB : process.env.MONGO_DB
    }
}