import { cartService } from "../services/services.js";

const getAll = async (req, res) => {
    console.log('--> cart controller getAll');
    try {
        const result = await cartService.getAll();
        //COMPROBACION -------------------------------------------------
        if (!result || result.length == 0) { 
            let message = { status: "without result", message: "🌪 There are not any User", function: '👩‍🚀 User controller getAll'};
            console.log(message);
            res.status(200).send(message);
        }
        //----------------------------------------------------------------
        /* const carts = result.map(u=>new cartPresenterDTO(u));
        res.send({ carts }); */
        let message = { status: "success", message: "👍 carts find", function: '🛒 cart controller getAll', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🛒 cart controller getAll', trace: error };
        console.log(message);
        res.status(500).send(message);
    };
};

const getBy = async (req, res) => {
    console.log('--> cart controller getBy');
    try {
        const params = await req.params;
        const result = await cartService.getBy(params);
        /* const carts = result.map(u=>new cartPresenterDTO(u));
        res.send({ carts }); */
        let message = { status: "success", message: "👍 carts find", function: '🛒 cart controller getBy', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🛒 cart controller getBy', trace: error };
        console.log(message);
        res.status(500).send(message);
    };
};

/* const save = async (req, res) => {
    console.log('--> cart controller create');
    try {
        let { code, cart_name, description, price, offer, stock } = req.body;
        //if(!req.file) return res.status(500).send({status:"error",error:"No se pudo cargar el avatar"});
        let cart = await cartService.getBy({code: code});
        if (cart) return res.status(400).send({ status: "error", error: `🛒 cart with code:${code} exist` });
        const newcart = {
            code,
           cart_name,
            description,
            price,
            offer,
            stock,
            image: '/images/cart/cart.png'
        }
        //const insertcart = new cartInsertDTO(newcart);
        let result = await cartService.save(newcart);
        let message = { status: "success", message: "👍 cart save", function: '🛒 cart controller create', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🛒 cart controller create', trace: error };
        console.log(message);
        res.status(500).send(message);
    }
}; */

/* const updateBy = async (req, res) => {
    console.log('--> cart controller updateBy');
    try {
        const param = req.params;
        //comprobación-----------------------------------------        
        //-----------------------------------------------------
        let { code, cart_name, description, price, offer, stock } = req.body;
        const data = {
                code,
               cart_name,
                description,
                price,
                offer,
                stock,
                image: '/images/cart/cart.png'
        }
        const result = await cartService.updateBy(param, data);
        let message = { status: "success", message: `👍 cart ${param} update`, function: '🛒 cart controller updateBy', change: data};
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🛒 cart controller updateBy', trace: error };
        console.log(message);
        res.status(500).send(message);
    }
}; */

/* const deleteBy = async (req, res) => {
    console.log('--> cart controller deleteById ');
    try {
        const param = await req.params;
        const result = await cartService.deleteBy(param);
        let message = { status: "success", message: `👍 cart ${JSON.stringify(param)} delete `, function: '🛒 cart deleteById ', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🛒 cart deleteById ', trace: error };
        console.log(message);
    };
}; */

export default {
    getAll,
    getBy,
    /* save,
    updateBy,
    deleteBy */
};

