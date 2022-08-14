//funciones estandar
//import----------------------
import * as fs from 'fs';

//Code------------------------
class Managers {
    constructor() { };

    //Metodos--------------------
    readFile = async (file) => {
        try {
            if (fs.existsSync(file)) {
                let data = await fs.promises.readFile(file, 'utf8');
                let p = JSON.parse(data);
                return p;
            } else {
                return [];
            }
        } catch (err) {
            console.log(`🚩 Can not read file: ${file},\n 💣 error: ${err}`);
        }
    }
    

    //obtiene todos los elementos del archivo
    getAll = async (file) => {
        try {
            let data = await this.readFile(file);
            if (data == "" || data.length == 0) {
                console.log(`🚩 file empty: ${file}`);
            } else {
                return data;
            }
        } catch (err) {
            console.log(`🚩 Can not read file: ${file},\n 💣 error: ${err}`);
        }
        
    };

    getById = async (file, id) => {
        try {
            let data = await this.readFile(file);
            
            let obj = "";
            data.forEach(e => {
                if (e.id == id) {
                    obj = e;
                }
            });
            return obj;
        } catch (err) {
            console.log(`🚩 Can not find element by id: ${id},\n 💣 error: ${err}`);
        }
    }
    addId = async (file) => {
        try {
            let Arr = await this.readFile(file);
            let idArr = [];//array con todos los id de los productos
            let cont = 0;
            
            Arr.forEach((e) => {
                if (!e.id) {
                    console.log(`the element num ${cont}`);
                } else {
                    idArr.push(e.id);//el array se forma con todos los id    
                }
                cont++;
            })
            
            idArr = idArr.sort((a, b) => (a - b));
            let idAdd = parseInt(idArr.length + 1);
            let idLast = parseInt(Arr.length);

            if (idLast == idAdd) {//coinciden
                idAdd++;
            } if (idLast > idAdd) {//entonces el elemento ha sido borrado
                idAdd = idLast++;
            } if (idLast < idAdd) {
                idAdd = idAdd;
            }
            return idAdd;

        } catch (err) {
            console.log(`🚩 Can not add id,\n  💣 error: ${err}`);
        }
        
    }
    //Ordenar array de mayor a menor por value;
    orderIdInv = async (Arr) => {
        try {
            //let ArrInv = Arr.sort(((a, b) => b- a));
            let ArrId = [];
            let ArrInv = [];
            Arr.forEach(e => ArrId.push(e.id));
            let ArrIdInv = ArrId.sort(((a, b) => b - a));

            ArrIdInv.forEach(e => {
                Arr.forEach(p => {
                    if (e == p.id) {
                        ArrInv.push(p);
                    }
                })
            })
            return ArrInv;
        } catch (err) {
            console.log(`🚩 Can not inv Array,\n  💣 error: ${err}`);
        }
    }

    create = async (file, obj) => {
        try {
            let Arr = await this.readFile(file);
            Arr.push(obj);
            await fs.promises.writeFile(file, JSON.stringify(Arr, null, '\t'));

        } catch (err) {
            console.log(`🚩 Can not save objet in file: ${file},\n  💣 error: ${err}`);
        }
    }
  
    //cambiar producto
    changeProdById = async (file, obj, id) => {
        try {
            let Arr = await this.readFile(file);
            let change = 0;
            
            Arr.forEach(e => {
                if (e.id == id) {
                    if (obj.name || obj.name != "" || e.name != obj.name) {
                        e.name = obj.name;
                        change++;
                    }
                    if (obj.description || obj.description != "" || e.description != obj.description) {
                        e.description = obj.description;
                        change++;
                    }
                    if (obj.code || obj.code != "" || e.code != obj.code) {
                        e.code = obj.code;
                        change++;
                    }
                    if (obj.image || obj.image != "" || e.image != obj.image) {
                        e.image = obj.image;
                        change++;
                    }
                    if (obj.price || obj.price != "" || e.price != obj.price) {
                        e.price = obj.price;
                        change++;
                    }
                    if (obj.stock || obj.stock != "" || e.stock != obj.stock) {
                        e.stock = obj.stock;
                        change++;
                    }
                    if (change > 0) {
                        e.newTimestamp = Date.now()
                    }
                }
            })
            
            return Arr;
        } catch (err) {
            console.log(`🚩 Can not find element by id: ${obj.id},\n 💣 error: ${err}`);
        }
    };
    //actualizar objeto
    updateBd = async (file, bdNew) => {
        try {
            await fs.promises.writeFile(file, JSON.stringify(bdNew, null, '\t'));
        } catch (err) {
            console.log(`🚩 Can not write the new bd,\n  💣 error: ${err}`);
        }
    }
    //DELETED
    deleteId = async (file, id) => {
        try{
            let Arr = await this.readFile(file);
            let newArr = [];
            
            Arr.forEach(e => { 
                if (e.id != id) {
                    newArr.push(e);
                }
            })
            
            return newArr;
    
        } catch (err) {
            console.log(`🚩 Can not add id,\n  💣 error: ${err}`);
        }
    }
};

//Export -------------------------
export default Managers;