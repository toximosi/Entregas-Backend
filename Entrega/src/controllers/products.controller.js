import { productService } from "../services/services.js";

const getAll = async (req, res) => {
    console.log('--> Product controller getAll');
    try {
        const result = await productService.getAll();
        /* const Products = result.map(u=>new ProductPresenterDTO(u));
        res.send({ Products }); */
        let message = { status: "success", message: "👍 Products find", function: '🧳 Product controller getAll', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🧳 Product controller getAll', trace: error };
        console.log(message);
        res.status(500).send(message);
    };
};

const getBy = async (req, res) => {
    console.log('--> Product controller getBy');
    try {
        const params = await req.params;
        const result = await productService.getBy(params);
        /* const Products = result.map(u=>new ProductPresenterDTO(u));
        res.send({ Products }); */
        let message = { status: "success", message: "👍 Products find", function: '🧳 Product controller getBy', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🧳 Product controller getBy', trace: error };
        console.log(message);
        res.status(500).send(message);
    };
};

const save = async (req, res) => {
    console.log('--> Product controller create');
    try {
        let { code, product_name, description, price, offer, stock } = req.body;
        /* if(!req.file) return res.status(500).send({status:"error",error:"No se pudo cargar el avatar"}); */
        let product = await productService.getBy({code: code});
        if (product) return res.status(400).send({ status: "error", error: `🧳 Product with code:${code} exist` });
        const newProduct = {
            code,
            product_name,
            description,
            price,
            offer,
            stock,
            image: '/images/product/product.png'
        }
        /* const insertProduct = new ProductInsertDTO(newProduct); */
        let result = await productService.save(newProduct);
        let message = { status: "success", message: "👍 Product save", function: '🧳 Product controller create', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🧳 Product controller create', trace: error };
        console.log(message);
        res.status(500).send(message);
    }
};

const updateBy = async (req, res) => {
    console.log('--> Product controller updateBy');
    try {
        const param = req.params;
        //comprobación-----------------------------------------        
        /* const exist = await productService.getBy(param);
        if (!exist) { 
            let message = { status: "error", message: `👍 Product ${param} No exist`, function: '🧳 Product controller updateBy'};
            console.log(message);
            res.status(400).send(message);
        }; */
        //-----------------------------------------------------
        let { code, product_name, description, price, offer, stock } = req.body;
        const data = {
                code,
                product_name,
                description,
                price,
                offer,
                stock,
                image: '/images/product/product.png'
        }
        const result = await productService.updateBy(param, data);
        let message = { status: "success", message: `👍 Product ${param} update`, function: '🧳 Product controller updateBy', change: data};
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🧳 Product controller updateBy', trace: error };
        console.log(message);
        res.status(500).send(message);
    }
};

const deleteBy = async (req, res) => {
    console.log('--> Product controller deleteById ');
    try {
        const param = await req.params;
        const result = await productService.deleteBy(param);
        let message = { status: "success", message: `👍 Product ${JSON.stringify(param)} delete `, function: '🧳 Product deleteById ', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🧳 Product deleteById ', trace: error };
        console.log(message);
    };
};

export default {
    getAll,
    getBy,
    save,
    updateBy,
    deleteBy
};

