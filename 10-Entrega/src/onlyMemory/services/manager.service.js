//* Standar fuction to consult BD
//import

//Code------------------------
class Managers {

    constructor() { };
   
    //* IMPORTANT FUNCTION
    //Exist
    existId = async (bd, id) => {
        try {
            let exist = "";
            await bd.forEach(e => {
                if (e.id == id) {
                    exist = e;
                };
            });
            return exist;
        } catch (err) { 
            console.log(err);
        }
    };

    //* CRUD
    //CREATE
    startData = async (bd, obj) => {
        console.log('🐵 start initial add Data');
        try { 
            await obj.forEach(e => {
                bd.push(e);
            });
            return bd;
        }catch(err){ 
            console.log(`🚩 Error in Add initail data.\n
                        fuction -> starData.\n 
                        Can not read file: ${bd},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    addObj = async (bd, obj) => {
        console.log('🐵 start initial add new element');
        try { 
            let data = await bd.push(obj);
            return data;
        }catch(err){ 
        console.log(`🚩 Error to add element.\n
                    fuction -> addObj.\n 
                    💣  Error: ${err}`);
        };
        console.log('🙊 uho! there is a problem');
    };

    //READ
    getAll = (bd) => {
        console.log('🐵 start initial get Data');
        try { 
            let obj = bd;
            return obj;
        }catch(err){ 
            console.log(`🚩 Error to get info of file.\n
                    fuction -> getAll.\n 
                    💣  Error: ${err}`);
        };
        console.log('🙊 uho! there is a problem');
    };

    getById = async (bd, id) => {
        console.log('🐵 start initial get element by id');
        try{
            let data = "";
            bd.forEach(e => {
                if (e.id == id) {
                    data = e;
                }
            });
            return data;
        }catch(err){ 
            console.log(`🚩 Error to get info element with id:${id}.\n
                    fuction -> getbyId.\n 
                    💣  Error: ${err}`);
        };
        console.log('🙊 uho! there is a problem');
    };

    //UPDATE
    updateByID = async()=>{

    };

    //DELETE
    deleteById = async (bd, id) => {
        console.log('🐵 start delete element by id');
        try {
            let newBd = [];
            let count = 0;
            let position = 0;
            bd.forEach(e => {
                if (e.id != id) {
                    count++; 
                    newBd.push(e);
                } else { 
                    position = count+1;
                }
            });
            return newBd;
        }catch(err){ 
            console.log(`🚩 Error to delete info element with id:${id}.\n
                        fuction -> deleteById.\n 
                        💣  Error: ${err}`);
        };
        console.log('🙊 uho! there is a problem');
    };

    deleteAll = (bd) => {
        console.log('🐵 start delete Bd');
        try { 
            let newBd = [];
            return newBd;
            }catch(err){ 
        console.log(`🚩 Error in delete file.\n
                        fuction -> deleteAll.\n 
                        Can not read file: ${bd},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    //* OTHER FUCTION



};

export default Managers;