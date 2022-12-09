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
    /* try{ */
        const body = await req.body;
        console.log('body')
        console.log(body)
        let idProduct = body._id;
        console.log('idProduct')
        console.log(idProduct)
        const sesion = req.session;
        console.log('sesion')
        console.log(sesion)
        let idCart = sesion.user.cart;
        console.log('idProduct -> ' + idProduct);
        console.log('idCart -> ' + idCart);
        
    /*         const newCart = await cartService.updateBy({ _id: idCart }, { 'products.product.id': idProduct, 'product.quantity': 1 }); */
    /* updateOne({ _id: cart_Id},{ $push: { 'products': obj }}); */
    

    const newCart = await cartService.addBy({ _id: idCart },  { 'products': { _id: idProduct } } );

    console.log('newCart')
    console.log(newCart)
    
        // { email, role, name, id, cart, image}
        /* if (!sesion.user) {
            return res.redirect('/login');
        } else {
            let productNew = false;
            let productId = "";
            let data = await cartService.getBy({_id:idCart});
            // console.log('data');
            //console.log(data); 
                if (data.length <= 0) {
                    console.log(`dont't find cart with id: ${id}`);
                //!  Crear cart del usuario y añadir producto
            } else {
                let existProduct = await cartService.findOne({ $and: [{ _id: idCart }, { 'products.id': idProduct }] });
                    
                if (existProduct <= 0) {
                    let obj = {
                        id: idProduct,
                        quantity: 1
                    }
                    await cartService.addProduct(idCart, obj);
                } else { 
                    let cart = data;
                    let product = cart.products;
                    let productQuantity = 0;
                    product.forEach(e => {
                        if (e.id == idProduct) { 
                            productQuantity = e.quantity + 1;
                        };
                    });
                    await cartService.update({ $and: [{ _id: idCart }, { 'products.id': idProduct }] },{ 'products.$.quantity': productQuantity });
                }
            } 



        // const cartId = sesion.user.cart;
        //    cartsService.update(idProduct.id, cartId);
        //    console.log(`Add product ${idProduct.id} in cart ${cartId}`);
        };
        let message = { status: "success", message: "👍 carts upload", function: '🛒 cart controller updateById ', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🛒 cart controller updateById ', trace: error };
        console.log(message);
        res.status(500).send(message);
    };*/
};

export default {
    getAll,
    getBy,
    updateById,
    /* save,
    deleteBy */
};

