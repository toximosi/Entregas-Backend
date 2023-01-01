import * as dotenv from 'dotenv';
dotenv.config();

export default {
    app:{
        DOMAIN: process.env.DOMAIN,
        PORT: process.env.PORT, 
    },
    session:{
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PWD: process.env.ADMIN_PWD
    },
    mongo:{
        USER: process.env.MONGO_USER,
        PWD: process.env.MONGO_PWD,
        HOST: process.env.MONGO_HOSTNAME,
        DB: process.env.MONGO_DATABASE,
        CONEXION: process.env.MONGO_CONEXION
    },
    jwt:{
        SECRET: process.env.JWT_KEY,
        COOKIE: process.env.JWT_COOKIE
    },
    test: {
        EMAIL_USER: process.env.TEST_EMAIL_USER, 
        EMAIL_PASS: process.env.TEST_EMAIL_PASS,
        EMAIL_PORT: process.env.TEST_EMAIL_PORT 
    }
}