import Dao from '../dao/dao.js';
import UserRepository from './_user.repository.js';
import CartRepository from './cart.repository.js';


const dao = new Dao();

export const userService = new UserRepository(dao);
export const cartService = new CartRepository(dao);
