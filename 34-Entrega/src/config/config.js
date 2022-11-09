export default {
    app:{
        DOMAIN: process.env.DOMAIN,
        PORT: process.env.PORT
    },
    session:{
        ADMIN_EMAIL:process.env.ADMIN_EMAIL,
        ADMIN_PWD: process.env.ADMIN_PWD
    },
    mongo:{
        USER:process.env.MONGO_USER,
        PWD:process.env.MONGO_PWD,
        DB:process.env.MONGO_DATABASE
    },
    jwt:{
        SECRET:process.env.JWT_KEY,
        COOKIE:process.env.JWT_COOKIE
    }
}