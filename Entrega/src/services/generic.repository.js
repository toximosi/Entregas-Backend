export default class GenericRepository {

    constructor(dao, model) {
        this.dao = dao;
        this.model = model;
    }

    getAll = () => {
        return this.dao.getAll(this.model);
    }

    getBy = (params) => {
        return this.dao.getBy(params, this.model);
    }

    save = (data) => {
        return this.dao.save(data, this.model);
    }
    updateBy = (param, data) => { 
        return this.dao.updateBy(param, data, this.model);
    }

    deleteBy = (param) => {
        return this.dao.deleteBy(param, this.model);
    }
}