
import fs from 'fs';
import __dirname from '../../utils.js';//static

export default class MemoryContainer {

    constructor(bd) { 
        this.bd = __dirname +`/dao/FileDAO/bd/${bd}.json`;
    };
   
    //* IMPORTANT FUNCTION
    // write file
    writeFile = async (obj) => {
        await fs.promises.writeFile(this.bd, JSON.stringify(obj, null, '\t'));
    };
    // read file
    readFile = async () => {
        try {
            if (fs.existsSync(this.bd)) {
                let data = await fs.promises.readFile(this.bd, 'utf8');
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
    existId = async (id) => {
        let Arr = await this.readFile(this.bd);
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
    startData = async (obj) => {
        console.log('🐵 start initial add Data');
        try { 
            await this.deleteAll();
            await this.writeFile(obj);
            return this.bd;
        }catch(err){ 
            console.log(`🚩 Error in Add initail data.\n
                        fuction -> starData.\n 
                        Can not read file: ${this.bd},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };

    addObj = async(obj)=>{
        console.log('🐵 start initial add new element');
        try { 
            let Arr = await this.readFile();
            Arr.push(obj);
            this.writeFile(Arr);
            return Arr;
        }catch(err){ 
            console.log(`🚩 Error to add element.\n
                        fuction -> addObj.\n 
                        💣  Error: ${err}`);
        };
        console.log('🙊 uho! there is a problem');
    };

    //READ
    getAll = async () => {
        console.log('🐵 start initial get Data');
        try { 
            let data = await this.readFile();
            return data;
        }catch(err){ 
            console.log(`🚩 Error to get info of file.\n
                        fuction -> getAll.\n 
                        💣  Error: ${err}`);
        };
        console.log('🙊 uho! there is a problem');
    };

    getById = async (id) => {
        console.log('🐵 start initial get element by id');
        try{
            let data = await this.readFile();
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

    //DELETE
    deleteById = async (id) => {
        console.log('🐵 start delete element by id');
        try {
            let Arr = await this.readFile();
            let ArrNew = [];
            Arr.forEach(e => {
                if(e.id != id){
                    ArrNew.push(e); 
                }
            });
            console.log('ArrNew');
            console.log(ArrNew);
            await this.writeFile(ArrNew);
            return ArrNew;
        }catch(err){ 
            console.log(`🚩 Error to delete info element with id:${id}.\n
                        fuction -> deleteById.\n 
                        💣  Error: ${err}`);
        };
        console.log('🙊 uho! there is a problem');
    };

    deleteAll = async()=>{
        let obj = [];
        console.log('🐵 start delete Bd');
        try { 
            await this.writeFile(obj);
        }catch(err){ 
            console.log(`🚩 Error in delete file.\n
                        fuction -> deleteAll.\n 
                        Can not read file: ${this.bd},\n
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem');
    };
};
