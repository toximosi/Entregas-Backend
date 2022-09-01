//* Standar fuction to consult BD
//import
import fs, { write } from 'fs';

//Code------------------------
class Managers {

    constructor() { };
   
    //* IMPORTANT FUNCTION
    // write file
    writeFile = async (bd, obj) => {
        try {
            await fs.promises.writeFile(bd, JSON.stringify(obj, null, '\t'));
        }catch(err){ 
            console.log(`🚩 Error to write file.\n
                        fuction -> writeFile.\n 
                        💣  Error: ${err}`);
        }
    };
    // read file
    readFile = async (bd) => {
        try {
            if (fs.existsSync(bd)) {
                let data = await fs.promises.readFile(bd, 'utf8');
                let p = JSON.parse(data);
                return p;
            } else {
                return [];
            }
        }catch(err){ 
            console.log(`🚩 Error to read file.\n
                        fuction -> readFile.\n 
                        💣  Error: ${err}`);
        }
    };
        //Exist
    existId = async (bd, id) => {
        let Arr = await this.readFile(bd);
        let exist = '';
        Arr.forEach(e => {
            if (e.id == id) {
                exist = 1;
            };
        });
        if (exist != "" || exist == 1 || exist == true || exist == 'true') {
            console.log(`👍 find the element ${id} is ok`);
            return exist;
        } else {
            exist = '';
            console.log(`🫣 don't find the element ${id}`);
            return exist;
        };
    };

    //* CRUD
    //CREATE
    startData = async (bd, obj) => {
        console.log('🐵 start initial add Data');
        try { 
            await this.deleteAll(bd);
            await this.writeFile(bd, obj);
        }catch(err){ 
            console.log(`🚩 Error in Add initail data.\n
                        fuction -> starData.\n 
                        Can not read file: ${bd},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    addObj = async(bd, obj)=>{
        console.log('🐵 start initial add new element');
        try { 
            let Arr = await this.readFile(bd);
            Arr.push(obj);
            this.writeFile(bd, Arr);
            return Arr;
        }catch(err){ 
            console.log(`🚩 Error to add element.\n
                        fuction -> addObj.\n 
                        💣  Error: ${err}`);
        };
        console.log('🙊 uho! there is a problem');
    };

    //READ
    getAll = async (bd) => {
        console.log('🐵 start initial get Data');
        try { 
            let data = await this.readFile(bd);
            return data;
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
            let data = await this.readFile(bd);
            let obj = "";
            data.forEach(e => {
                if(e.id == id){
                    obj = e; 
                }
            });
            return obj;
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
            let Arr = await this.readFile(bd);
            let ArrNew = [];
            Arr.forEach(e => {
                if(e.id != id){
                    ArrNew.push(e); 
                }
            });
            console.log('ArrNew');
            console.log(ArrNew);
            await this.writeFile(bd, ArrNew);
            return ArrNew;
        }catch(err){ 
            console.log(`🚩 Error to delete info element with id:${id}.\n
                        fuction -> deleteById.\n 
                        💣  Error: ${err}`);
        };
        console.log('🙊 uho! there is a problem');
    };

    deleteAll = async(bd)=>{
        let obj = [];
        console.log('🐵 start delete Bd');
        try { 
            await this.writeFile(bd, obj);
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