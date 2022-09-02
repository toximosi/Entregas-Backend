//MEMORY, FILE, MONGO
 
let persistence = 'MEMORY';
//let productsService = 'FILE';
//let productsService = 'MONGO';

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
        break;
    
    case 'SQL':
        break;
    
    case 'SQULITE':
        break;
    
    case 'MONGO':
        break;
    
    case 'FIREBASE':
        break;
};

const services = {
    productsServices,
    cartsServices,
};

export default services;