export default class GenericRepository {

    constructor(dao, model) {
        this.dao = dao;
        this.model = model;
    }

    getAll = (params) => {
        console.log('--> Generic getAll');
        return this.dao.getAll(params, this.model);
    }

    getBy = (params) => {
        console.log('--> Generic getBy');
        return this.dao.findOne(params, this.model);
    }

    save = (data) => {
        console.log('--> Generic save');
        return this.dao.save(data, this.model);
    }
}