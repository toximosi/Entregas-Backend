import Dao from '../dao/dao.js';
import UserRepository from './user.repository.js';
import ProductRepository from './product.repository.js';
import CartRepository from './cart.repository.js';

const dao = new Dao();

export const usersService = new UserRepository(dao);
export const productsService = new ProductRepository(dao);
export const cartsService = new CartRepository(dao);