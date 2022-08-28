// MEMORY, FILE, SQL, SQULITE, MONGO, FIREBASE

const persistence = 'MEMORY';

let productsService;
switch (persistence) { 
    case 'MEMORY':
        //products
        const { default: MemProducts } = await import('./MemoryDAO/Products.js');
        productsService = new MemProducts();
        //Carts

        //menssages
        //user
        break;
    
    case 'FILE':
        //products
        
        //Carts

        //menssages
        //user
        break;
    
    case 'SQL':
        //products
        
        //Carts

        //menssages
        //user
        break;
    
    case 'SQULITE':
        //products
        
        //Carts

        //menssages
        //user
        break;
    
    case 'MONGO':
        //products
        const { default: MongoProducts } = await import('./MongoDAO/Products.js');
        productsService = new MongoProducts();
        //Carts

        //menssages
        //user
        break;
    
    case 'FIREBASE':
        //products
        
        //Carts

        //menssages
        //user
        break;
};

const services = {
    productsService,
    cartService,
    //menssages
    //user
};

export default services;