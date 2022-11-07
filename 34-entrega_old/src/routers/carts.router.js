import Router from 'express';
const router = Router();

//& DB ----------------------------------------------
import cartsModel from '../models/carts.model.js';
const model = cartsModel;

//function
import FuctionsServices from "../services/manager.service.js";
const fun = new FuctionsServices();
import CartsService from '../services/carts.service.js';
const funCart = new CartsService();
//Code ----------------------------------------------
//app.use('/api/carts', cartsRouter );
/* const cartsSchema = mongoose.Schema({
        id: String,
		timestamp: Date,
		products: [
				{
				id: String,
				quantity: {Number, default: 1}
				}			
			]
}); */
//CRUD
//* CREATE

router.post('/createempty', async (req, res) => { 
    console.log('hola')
    try { 
        const {id}  = await req.body;
        if(!id) res.status(400).send({ status: 'error', error: 'incomplete values', values: 'id'});
        
        const data = await funCart.createCartEmpty(id);
        res.send(`👍 Add data is ok.\n
                  data create empty cart -> ${data}`);
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});

router.post('/create', async (req, res) => {
    /* console.log('post carts create'); */
    try { 
        const { id, products = [] } = await req.body;
        if (!id || !products ) { 
             return res.status(400).send({ status: 'error', error: 'incomplete values', values: 'id, userid'});
        }
        let obj = {
            id,
            /* timestamp: { type: Date, default: Date.now() }, */
            timestamp: Date.now(),
            /* userid, */
            products
        }
        const data = await fun.addObj(model, obj);
        res.send(`👍 Add data is ok.\n
                  data create carts -> ${data}`);

    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});

router.post('/addproducts', async (req, res) => { 
    
    try { 
        const { id, products, } = await req.body;
        if (!id || !products ) { 
             return res.status(400).send({ status: 'error', error: 'incomplete values', values: 'products, id'});
        }
    
        const data = await funCart.addProduct(id, products);
        res.send(`👍 Add products ok.`);

    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }

});



export default router;

