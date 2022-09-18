import { Router } from 'express';
const router = Router();
import session from 'express-session';


import CookiesServices from "../services/cookies.service.js";
const cook = new CookiesServices();

//var -----------------------------------------------------
let style =`<style>body{display: flex;flex-direction: column;align-content: center;justify-content: center;align-items: center;width: 100%;height: 100%;text-align: center;}.content{display: inline-block;border: 1px solid gray;padding: 50px;border-radius: 10px;}</style>`

//code -----------------------------------------------------
router.post('/', async (req, res) => { 
    
});
router.get('/visita', async (req, res) => { 
    
    if (req.session.counter) {
        req.session.counter ++;
        res.send(`${style}<div class="content">
        <h1>Hola de nuevo 👽<h1>
        visitante es tu ${req.session.counter}º visita
        </div>`);
    } else { 
        req.session.counter = 1;
        res.send(`${style}<div class="content"><h1>Bienvenido 🖖<h1></div>`)
    }

});
/* router.post('/login', async (req, res) => { 
    try {
        const { email, password } = await req.body;
        if (email === "mail@mail.com" && password === "123") { 
            req.session.user = {
                email,
                role : 'user'
            }
        }
    } catch (err) { console.log(err) };
    
}); */
router.get('/current', async (req, res) => { 
    try {
        if (req.session.user) { 
            res.send(req.session.user);
        }else{
            res.send(`${style} <div class="content"><h1>por favor logeate<h1></div>`);
        }
    } catch (err) { console.log(err) };

});
router.put('/:id', async (req, res) => { 

});
router.delete('/:id', async (req, res) => { 

});

export default router;