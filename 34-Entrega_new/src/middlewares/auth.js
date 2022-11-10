import jwt from 'jsonwebtoken';
import config from '../config/config.js';


//Comun var
//function
export const publicValidation = (req, res, next) => {
    try {
        const token = req.cookies[config.jwt.COOKIE];
        if (token) {
            return res.redirect('/');
        } else {
            next();
        };
    } catch (erro) {
        console.log('error');
        next();
    };
};

export const privateValidation = (req, res, next) => {
    try {
        const token = req.cookies[config.jwt.COOKIE]; 
        if (!token) return res.redirect('/login');
        const user = jwt.verify(token, config.jwt.SECRET);
        req.user = user;
        next();
    } catch (error) {
        if (error.expiredAt) { 
            res.redirect('/login');
        };
    };
};

/* export const executePolices = (policies) => {
    return (req, res, next) => {
        if (policies[0].toUppercase() === 'PUBLIC') return next();
        if(policies.includes(req.user.role.toString().toUpperCase())) return next();
        res.redirect('/');
    };
}; */