import mongoose from "mongoose";
const Mongobd = 'MongoBD';
export default class MongoDBContainer { 
    constructor(collection, Schema) { 
        this.model = mongoose.model(collection, Schema);
        this.conexion = mongoose.connect(`mongodb+srv://toximosi:Saludotoxico77@cluster0.560p4qt.mongodb.net/${Mongobd}?retryWrites=true&w=majority`, (err) => {
            if (err) {
                console.log(`Error in conexion Mongo Atlas: ${err}`);
            } else { 
                console.log('Mongobd conexion');
            }
            });
    }

    //* IMPORTANT FUNCTION
    //Exist
    existId = async (id) => { 
        let exist = await this.model.find({ "id": id }); 
        if (exist != "" || exist == 1 || exist == true || exist == 'true') { 
            console.log(`👍 find the element ${id} is ok`);
            return exist;
        }else { 
            exist = [];
            console.log(`🫣 don't find the element ${id}`);
            return exist;
        }
    }

    //* CRUD
    //CREATE
    startData = async(obj)=>{
        console.log('🐵 start initial add Data');
        try { 
            let data = await this.model.insertMany(obj); 
            console.log('👍 add inicial data is ok');
            return data;
        }catch(err){ 
            console.log(`🚩 Error in Add initail data fuction -> starData.\n 
                         Can not read file: ${file},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    addObj = async (obj) => {
        console.log('🐵 start add element');
        try {
            let data = await this.model.insertMany(obj);
            console.log('👍 add inicial data is ok');
            return data;
        } catch (err) {
            console.log(`🚩 Error in Add element.\n
                        fuction -> addObj.\n 
                        Can not read file: ${this.model},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };
    //READ
    getAll = async()=>{
        console.log('🐵 start getAll');
        try { 
            let data = await this.model.find(); 
            console.log('👍 getAll is ok');
            return data;
        }catch(err){ 
            console.log(`🚩 Error in read data fuction -> getAll.\n 
                         Can not read file: ${file},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    getById = async(id)=>{
        console.log('🐵 looking for');
        try { 
            let data = await this.existId(id); 
            return data;
        } catch (err) { 
            console.log(`🚩 Error in read id fuction -> getById.\n 
                         Can not read file: ${file},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    //UPDATE
    /* updateByID = async()=>{

    }; */

    //DELETE
    deleteById = async(id)=>{
        console.log('🐵 start deleteById');
        try { 
            await this.model.deleteMany({ "id": id }); 
            console.log(`👍 delete element with ${id} is ok`);
        }catch(err){ 
            console.log(`🚩 Error in delete data.\n
                        function -> deleteById.\n 
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    deleteAll = async()=>{
        await this.model.deleteMany({});
        return 'remove';
    };

    //* OTHER FUCTION
};