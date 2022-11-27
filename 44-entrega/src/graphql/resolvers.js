import { productsService, usersService } from "../services/services.js";

const resolvers = {
    Query: {
        hello: () => 'hola kitty',
        getAllUsers: async () => { 
            let users = await usersService.getAll();
            return users;
        },
        getAllProducts: async () => { 
            let products = await productsService.getAll();
            return products;
        }
    }
}

export default resolvers;