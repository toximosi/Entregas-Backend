import UsersDao from "../dao/user.dao.js";
import CartsDao from "../dao/cart.dao.js";
import ProductsDao from "../dao/product.dao.js";

import UserService from "./user.service.js";
import CartsService from "./cart.service.js";
import ProductsService from "./product.service.js";
import DataService from "./data.service.js";

export const usersService =  new UserService(new UsersDao());
export const cartsService = new CartsService(new CartsDao());
export const productsService = new ProductsService(new ProductsDao());
export const dataService = new DataService(); 