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
        console.log('--> Generic save');
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
    
    update = (params, data) => { 
        console.log('--> Generic update');
        console.log('params');
        console.log(params);
        console.log('data');
        console.log(data);
        return this.dao.update(params, data, this.model);
    }



}