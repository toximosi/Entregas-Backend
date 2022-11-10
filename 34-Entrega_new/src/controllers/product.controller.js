import { productsService } from '../services/index.js';

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
    console.log(req.body);
    if (!req.file) return res.status(500).send({ status: 'error', error: 'Error to uploader file' });
    const { product_name, code, description,  price, quantity } = req.body;
    if (!product_name || !code || !description || !price || !quantity) return res.status(400).send({ status: 'error', error: 'Incomplete error' })
    const product = {
        name,
        code,
        description,
        quantity,
        price,
        image: `${req.protocol}://${req.host}:${process.env.PORT}/images/product/${req.file.filename}`
    }
    let result = await productsService.createProduct(product);
    res.send({ status: 'success', playload: result });
}

export default{ 
    createProduct,
}