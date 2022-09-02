export default class MemoryContainer {

    constructor() { 
        this.bd = [];
    };
   
    //* IMPORTANT FUNCTION
    //Exist
    existId = async (id) => {
        let exist = "";
        this.bd.forEach(e => {if (e.id == id) { exist = e}});
        return exist;
    };

    //* CRUD
    //CREATE
    startData = async (obj) => {
        await obj.forEach(e => {this.bd.push(e);});
        return this.bd;
    };
    addObj = async(obj) => {
            this.bd.push(obj);
            return this.bd;
    };
    //READ
    getAll = async() => {return this.bd;};

    getById = async (id) => {
            let data = "";
            this.bd.forEach(e => {if (e.id == id) {data = e;}});
            return data;
    };

    //DELETE
    deleteById = async (id) => {
            let newBd = [];
            let count = 0;
            let position = 0;
            this.bd.forEach(e => {
                if (e.id != id) {
                    count++; 
                    newBd.push(e);
                } else { 
                    position = count+1;
                }
            });
            return newBd;
    };

    deleteAll = async() => {
            this.bd = [];
            return this.bd;
    };
};