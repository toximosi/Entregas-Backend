export default {
    app:{
        DOMAIN: process.env.DOMAIN,
        PORT: process.env.PORT || 8081
    },
    session:{
        ADMIN_EMAIL:process.env.ADMIN_EMAIL || "toximosi@toximosi.es",
        ADMIN_PWD: process.env.ADMIN_PWD || "1234"
    },
    mongo:{
        USER:process.env.MONGO_USER || "toximosi",
        PWD:process.env.MONGO_PWD || "Quier0Entrar",
        DB:process.env.MONGO_DATABASE || "34Entrega"
    },
    jwt:{
        SECRET:process.env.JWT_KEY || "SecretToken",
        COOKIE:process.env.JWT_COOKIE || "CookieLogin"
    },
    test: {
        EMAIL: process.env.TEST_EMAIL || "TEST@mail.es"
    }
}