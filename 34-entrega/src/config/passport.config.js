import passport from "passport";
import local from 'passport-local';
import userModel from '../models/users.model.js';
import FunctionsService from '../services/carts.service.js';
const fun = new FunctionsService();
import cartsService from '../services/carts.service.js';
const funCart = new cartsService();
import { createHash, isValidPassword } from "../utils.js";
import GithubStrategy from 'passport-github2';

const LocalStrategy = local.Strategy; //local = username + password

const initializePassport = () => {

    passport.use('register', new LocalStrategy({ passReqToCallback: true, usernameField: 'email' }, async (req, email, password, done) => {
        try {
            const { nombre, email, password } = req.body;
            if (!nombre || !email || !password) return done(null, false);
            let exists = await userModel.findOne({ email: email });
            if (exists) return done(null, false);
            
            await funCart.createCartEmpty(email);
            let result = await userModel.create({
                nombre,
                email,
                cartid : email,
                password: createHash(password)
            })
            //SI TODO SALIÓ BIEN
            return done(null, result)
        }
        catch (error) {
            return done(error);
        }
    }));

    passport.use('login',new LocalStrategy({usernameField:"email"},async(email,password,done)=>{
        try{
            if(!email||!password) return done(null,false);
            let user = await userModel.findOne({email:email});
            if(!user) return done(null,false);
            if(!isValidPassword(user,password)) return done(null,false);
            return done(null,user)
        }catch(error){
            console.log(error);
            return done(error);
        }
    }));

    passport.use('github', new GithubStrategy({
        clientID:'Iv1.67d490ee9ddf23c6',
        clientSecret:'c554d03d4b56c6957b1786cbdc188b37c2e7fd4b',
        callbackURL:'http://localhost:8080/api/sessions/githubcallback'
    },async(accesToken,refreshToken,profile,done)=>{
        try{
            let user = await userModel.findOne({email:profile._json.email})
            if(!user){//Create
                let newUser = {
                    nombre:profile._json.nombre,
                    email:profile._json.email,
                    password:''
                }
                let result = await userModel.create(newUser);
                return done(null,result);
            }
            else{
                return done(null,user);
            }
        }catch(error){
            console.log(error);
            done(error);
        }
    }));

    passport.serializeUser((user,done)=>{
        done(null,user._id)
    });
    passport.deserializeUser(async(id,done)=>{
        let result = await userModel.findOne({_id:id})
        return done(null,result);
    });
}

export default initializePassport;
