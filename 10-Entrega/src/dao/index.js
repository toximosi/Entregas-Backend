//MEMORY, FILE, MONGO
import persistenceBD from '../../_PERSISTENCE.js';

let persistence = persistenceBD;

let productsServices;
let cartsServices;

switch (persistence) { 
    case 'MEMORY':
        const { default: MemoryProducts } = await import('./MemoryDAO/Products.js');
        productsServices = new MemoryProducts();
        const { default: MemoryCarts } = await import('./MemoryDAO/Carts.js');
        cartsServices = new MemoryCarts();
        break;
    
    case 'FILE':
        const { default: FileProducts } = await import('./FileDAO/Products.js');
        productsServices = new FileProducts();
        const { default: FileCarts } = await import('./FileDAO/Carts.js');
        cartsServices = new FileCarts();
        break;
    
    case 'SQL':
        const { default: SqlProducts } = await import('./SqlDAO/Products.js');
        productsServices = new SqlProducts();
        const { default: SqlCarts } = await import('./SqlDAO/Carts.js');
        cartsServices = new SqlCarts();
        break;
        break;
    
    case 'SQULITE':
        break;
    
    case 'MONGO':
        const { default: MongoProducts } = await import('./MongoDAO/Products.js');
        productsServices = new MongoProducts();
        const { default: MongoCarts } = await import('./MongoDAO/Carts.js');
        cartsServices = new MongoCarts();
        break;
    
    case 'FIREBASE':
        break;
};

const services = {
    productsServices,
    cartsServices,
};

export default services;