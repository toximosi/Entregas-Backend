import { productsService } from '../services/index.js';

/* const schema = new mongoose.Schema({
    name:String,
    code:String,
    description:String,
    price: Number,
    quantity: Number,
    image: String
}) */

const createProduct = async (req, res) => { 
    if (!req.file) return res.status(500).send({ status: 'error', error: 'Error to uploader file' });
    const { name, code, description,price, quantity } = req.body;
    if (!name || !code || !description|| !price || !quantity) return res.status(400).send({status:'error', error: 'Incomplete error'})
    const product = {
        name,
        code,
        description,
        quantity,
        image: `${req.protocol}://${req.host}:${process.env.PORT}/images/${req.file.filename}`
    }
    let result = await productsService.createProduct(product);
    res.send({ status: 'success', playload: result });
}

export default{ 
    createProduct,
}