import { productService } from "../services/services.js";

const getAll = async (req, res) => {
    console.log('--> Product controller getAll');
    try {
        const result = await productService.getAll();
        //COMPROBACION -------------------------------------------------
        if (!result || result.length == 0) { 
            let message = { status: "without result", message: "🌪 There are not any User", function: '👩‍🚀 User controller getAll'};
            console.log(message);
            res.status(200).send(message);
        }
        //----------------------------------------------------------------
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
        console.log('req.body')
        console.log(await req.body)

        console.log('req.file');
        console.log(req.file);

        let { code, product_name, description, price, offer, stock } = req.body;
        if(!code || !product_name || !description) return res.status(400).send({status:'error', error:'💀 incomplet values', function: '🔑 Session controller product',});
        /* if(!req.file) return res.status(500).send({status:"error",error:"Can not upload product image"}); */
        let image = " ";
        if (!req.file || req.file == "" || req.file == undefined || req.file == 'undefined' || req.file == null || req.file == 'null') { 
            image = `/images/product/product.png`;
        } else {
            image =`/images/${req.file.filename}`;
        }
        let product = await productService.getBy({code: code});
        if (product) return res.status(400).send({ status: "error", error: `🧳 Product with code:${code} exist` });
        const newProduct = {
            code,
            product_name,
            description,
            price,
            offer,
            stock,
            image
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
        let { code, product_name, description, price, offer, stock } = req.body;
        let productInfo = await productService.getBy(param);
        const imageOld = productInfo.image;
        console.log("productInfo"); 
        console.log(productInfo); 
        console.log("imageOld"); 
        console.log(imageOld); 
        let imageNew = " ";
        if (!req.file || req.file == "" || req.file == undefined || req.file == 'undefined' || req.file == null || req.file == 'null') { 
            imageNew = imageOld;
        }else {
            imageNew =`/images/${req.file.filename}`;
        }
        const data = {
                code,
                product_name,
                description,
                price,
                offer,
                stock,
                image: imageNew
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

