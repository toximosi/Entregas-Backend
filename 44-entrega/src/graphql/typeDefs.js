import { gql } from "apollo-server-express";

const typeDefs = gql`
    type User{
        _id: ID
        first_name: String
        last_name: String
        email: String
        password: String
        age: String
        image: String
        role: String
        phone: String
        cart: String
    }

    type Product{
        _id: ID
        product_name: String
        code: String
        description: String
        price: String
        quantity: String
        image: String
    }


    type Query{
        test: String
        getAllUsers: [User]
        getAllProducts: [Product]
    }

`;

export default typeDefs;