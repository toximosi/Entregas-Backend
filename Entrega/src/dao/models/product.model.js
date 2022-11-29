
export default class Product {
    static get model() {
        return "Products"
    }

    static get schema() {
        return {
            title:String,
            description:String,
            author:String,
            price:Number,
            copies:Number,
            creationDate:Date,
            image:String
        }
    }
}