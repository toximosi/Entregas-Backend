
export default class Product {
    static get model() {
        return "Products"
    }

    static get schema() {
        return {
            code: {
                type: String,
                require: true
            },
            product_name: {
                type: String,
                require: true
            },
            description: {
                type: String,
                require: false
            },
            price: {
                type: Number,
                require: true
            },
            offer: {
                type: Number,
                require: false,
                default: 0
            },
            stock: {
                type: Number,
                require: true
            },
            image:{
                type: String,
                default: '/images/product/product.png'
            }
        }
    }
}