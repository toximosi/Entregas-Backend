export default class GenericRepository { 
    constructor(dao, model) { 
        this.dao = dao;
        this.model = model;
    }

    getAll = () => {
        console.log('--> Generic getAll');
        /* console.log('params');
        console.log(params); */
        return this.dao.getAll( this.model);
    }

    getBy = (params) => { 
        console.log('--> Generic getBy');
        console.log('params');
        console.log(params);
        return this.dao.findOne(params, this.model);
    }

    save = (data) => {
        console.log('--> Generic create');
        console.log('data');
        console.log(data);
        return this.dao.save(data, this.model);
    }
    
    findOne = (params) => { 
        console.log('--> Generic finOne');
        console.log('params');
        console.log(params);
        return this.dao.findOne(params, this.model);
    }
    
    getByAndPopulate = (params, populate) => { 
        console.log('--> Generic getByAndPopulate');
        console.log('params');
        console.log(params);
        return this.dao.getByAndPopulate(params, populate, this.model);
    }
    
    update = (param, data) => { 
        console.log('--> Generic update');
        console.log('param');
        console.log(param);
        console.log('data');
        console.log(data);
        return this.dao.update(param, data, this.model);
    }

    deleteBy = (param) => { 
        console.log('--> Generic getBy');
        console.log('param');
        console.log(param);
        return this.dao.deleteBy(param, this.model);
    }



}