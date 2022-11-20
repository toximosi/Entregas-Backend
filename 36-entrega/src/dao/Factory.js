const PERSISTENCE = 'MONGO' // config.app.PERSISTENCE

export default class PersistenceFactory { 
    static getPersistence = async () => { 
        switch (PERSISTENCE) { 
            case "FILE":
                let{default:UserFileDao} = await import('./user.file.dao.js');
                let{default:ProductFileDao} = await import('./product.file.dao.js');
                let { default: CartFileDao } = await import('./cart.file.dao.js');
                return {
                    users: new UserFileDao(),
                    product: new ProductFileDao(),
                    cart: new CartFileDao(),
                }
                break;
                
                case "MONGO":
                    let{default:UserMongoDao} = await import('./user.dao.js');
                    let{default:ProductMongoDao} = await import('./product.dao.js');
                    let{default:CartMongoDao} = await import('./cart.dao.js');
                    return {
                        users: new UserMongoDao(),
                        product: new ProductMongoDao(),
                        cart: new CartMongoDao(),
                    }
                break;

        }
    }
}