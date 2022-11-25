import { productsService } from '../services/services.js';
import config from "../config/config.js";

/* const schema = new mongoose.Schema({
    product_name:String,
    code:String,
    description: String,
    price: Number,
    quantity: Number,
    image: String
})
 */
const getAll = async (req, res) => { 
    console.log('--> Run Product getAll');

    const result = await productsService.getAll();
    if (!result) return res.status(404).send({ status: "error", error: "Product don't find" });
    res.send({ status: "success", payload: result })

};

const getBy = async (req, res) => {
    console.log('--> Run Product getBy');

    const data = req.params;
    const id = data.id;
    
    const result = await productsService.getBy({_id:id});
    if (!result) return res.status(404).send({ status: "error", error: "Product don't find" });
    res.send({ status: "success", payload: result })
}

const create = async (req, res) => { 
    console.log('--> Run Product create');
    let image = "";
    /* if (!req.file) return res.status(500).send({ status: 'error', error: 'Error to uploader file' }); */
    if (!req.file || req.file == "" || req.file == undefined || req.file == 'undefined' || req.file == null || req.file == 'null') { 
        image = `/images/product/product.png`;
    } else {
        image=`/images/product/${req.file.filename}`;
    }
    const { product_name, code, description,  price, quantity} = req.body;
    if (!product_name || !code || !description || !price || !quantity) return res.status(400).send({ status: 'error', error: 'Incomplete values' })
    const product = {
        product_name,
        code,
        description,
        quantity,
        price,
        image,
    }
    let result = await productsService.save(product);
    res.send({ status: 'success', playload: result });
}

export default { 
    getAll,
    getBy,
    create,
}