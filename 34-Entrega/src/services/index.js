import UsersDao from "../dao/user.dao.js";
import CartsDao from "../dao/cart.dao.js";

import UserService from "./user.service.js";
import CartsService from "./cart.service.js";

export const usersService =  new UserService(new UsersDao());
export const cartsService = new CartsService(new CartsDao());