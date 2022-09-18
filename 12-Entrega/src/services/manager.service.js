//* Standar fuction to consult BD
class Managers {

    constructor() {};
   
    //* IMPORTANT FUNCTION
    //Exist
    existId = async (model, id) => {
        let exist = await model.find({ "id": id });
        if (exist != "" || exist == 1 || exist == true || exist == 'true') {
            console.log(`👍 find the element ${id} is ok`);
            return exist;
        } else {
            exist = [];
            console.log(`🫣 don't find the element ${id}`);
            return exist;
        };
    };

    /* idNew = async((model) => {
        let newId = 0;
        
    }; */

    //* CRUD
    //CREATE
    startData = async(model,obj)=>{
        console.log('🐵 start initial add Data');
        try { 
            let data = await model.insertMany(obj); 
            console.log('👍 add inicial data is ok');
            return data;
        }catch(err){ 
            console.log(`🚩 Error in Add initail data fuction -> starData.\n 
                         Can not read file: ${file},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    addObj = async (model, obj) => {
        console.log('🐵 start add element');
        try {
            let data = await model.insertMany(obj);
            console.log('👍 add inicial data is ok');
            return data;
        } catch (err) {
            console.log(`🚩 Error in Add element.\n
                        fuction -> addObj.\n 
                        Can not read file: ${model},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };
    //READ
    getAll = async(model)=>{
        console.log('🐵 start getAll');
        try { 
            let data = await model.find(); 
            console.log('👍 getAll is ok');
            return data;
        }catch(err){ 
            console.log(`🚩 Error in read data fuction -> getAll.\n 
                         Can not read file: ${file},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    getById = async(model, id)=>{
        console.log('🐵 looking for');
        try { 
            let data = await this.existId(model, id); 
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
    deleteById = async(model, id)=>{
        console.log('🐵 start deleteById');
        try { 
            await model.deleteMany({ "id": id }); 
            console.log(`👍 delete element with ${id} is ok`);
        }catch(err){ 
            console.log(`🚩 Error in delete data.\n
                        function -> deleteById.\n 
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    deleteAll = async(model)=>{
        await model.deleteMany({});
        return 'remove';
    };

    //* OTHER FUCTION
};

export default Managers;