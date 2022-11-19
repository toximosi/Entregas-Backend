import { productsService } from '../services/index.js';
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

const createProduct = async (req, res) => { 
    console.log('--> createProduct');
    /* console.log(req.body); */
    let image = "";
    /* if (!req.file) return res.status(500).send({ status: 'error', error: 'Error to uploader file' }); */
    if (!req.file || req.file == "" || req.file == undefined || req.file == 'undefined' || req.file == null || req.file == 'null') { 
        /* image = `${req.protocol}://${req.host}:${process.env.PORT}/images/product/product.png`; */
        image = `/images/product/product.png`;
    } else {
        /* image=`${req.protocol}://${req.host}:${process.env.PORT}/images/product/${req.file.filename}`; */
        image=`/images/product/${req.file.filename}`;
    }
    const { product_name, code, description,  price, quantity} = req.body;
    if (!product_name || !code || !description || !price || !quantity) return res.status(400).send({ status: 'error', error: 'Incomplete error' })
    const product = {
        product_name,
        code,
        description,
        quantity,
        price,
        image,
    }
    let result = await productsService.createProduct(product);
    res.send({ status: 'success', playload: result });
}

export default{ 
    createProduct,
}