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

const updateById = async (req, res) => {
    console.log('--> cart controller updateById');
    try{
        const body = await req.body;
        let idProduct = body._id;
        const sesion = req.session;
        let idCart = sesion.user.cart;
        let result = null;
        // { email, role, name, id, cart, image}
        if (!sesion.user) {
            return res.redirect('/login');
        } else {
            let data = await cartService.getBy({_id: idCart});
             if (data.length <= 0) {
                console.log(`-> dont't find cart with id: ${id}`);
                // let result =
                //!  Crear cart del usuario y añadir producto
            } else {
                let existProduct = await cartService.getBy({ $and: [{ _id: idCart }, { 'products._id': idProduct }] });
                 if (existProduct <= 0) {
                    console.log(`-> there is not this product in cart`);
                    result = await await cartService.addBy({ _id: idCart },  { 'products': { _id: idProduct } } );
                 } else { 
                    console.log(`-> there is this product in cart`);
                    let cart = data;
                    let product = cart.products;
                    let productQuantity = 0;
                    product.forEach(e => {
                        if (e._id == idProduct || e._id == `new ObjectId("${idProduct}")`) { 
                            productQuantity = e.quantity + 1;
                        };
                    });
                    result = await cartService.updateBy({ $and: [{ _id: idCart }, { 'products._id': idProduct }] },{ 'products.$.quantity': productQuantity });
                }
            } 
        };
        let message = { status: "success", message: "👍 carts upload", function: '🛒 cart controller updateById ', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🛒 cart controller updateById ', trace: error };
        console.log(message);
        res.status(500).send(message);
    };
};

const cartInfoBy = async (req, res) => {
    console.log('--> User controller userInfoBy');
    try {
        const id = req.params;
        let result = await cartService.getCartPopulate(id);
        let message = { status: "success", message: "👍 carts info find", function: '🛒 cart controller cartInfoBy ', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🛒 cart controller cartInfoBy', trace: error };
        console.log(message);
    };
};



export default {
    getAll,
    getBy,
    updateById,
    cartInfoBy
};

