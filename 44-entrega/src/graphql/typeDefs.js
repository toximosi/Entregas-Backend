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
    type Query{
        hello: String
    }

`;

export default typeDefs;