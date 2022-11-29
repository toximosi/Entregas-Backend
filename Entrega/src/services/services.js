import Dao from '../dao/dao.js';
import UserRepository from './user.repository.js';
import ProductRepository from './product.repository.js';
import cartRepository from './cart.repository.js';

const dao = new Dao();

export const userService = new UserRepository(dao);
export const productService = new ProductRepository(dao);
export const cartService = new cartRepository(dao);