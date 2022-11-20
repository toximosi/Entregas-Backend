export default class ProductService{ 
    constructor(dao) { 
        this.dao = dao;
    }

    getProduct = async () => { 
        let result = await this.dao.getAll();
        return result;
    }

    getProductById = async (id) => { 
        let result = await this.dao.getById(id);
        return result/* .toObjet() */;
    }

    createProduct = product => { 
        return this.dao.save(product);
    }

    updateProduct = (id, product) => { 
        return this.dao.update(id, product);
    }
}