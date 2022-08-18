//funciones estandar
//import----------------------

/*import * as fs from 'fs';
 import __dirname from '../utils.js'; */

//Code------------------------
class Managers {
    constructor() { };
    //Metodos--------------------
    //Obtiene todos los elementos
    getAll = async (db, table) => {
        try {
            let data = await db(table).select('*')
                .then(() => {
                    console.log('👍 add data of db')
                }).catch((err) => {
                    console.log(`🚩 Can not read db -> 💣  ${err}`);
                    throw err;
                })
            return data;
        } catch (err) {
            console.log(err);
        }finally{db.destroy()};
    };
    //obtiene elemento
    getById = async (db, table, id) => {
        try {
            let data = await db(table).select('*').where('id', id)
                .then(() => {
                    if (data != "") {
                        console.log('👍 find the element')
                    } else {
                        console.log('👎 Do not find the element')
                    }
                }).catch((err) => {
                    console.log(`🚩 Can not find the element -> 💣  ${err}`);
                    throw err;
                })
            return data;
        } catch (err) {
            console.log(err);
        }finally{db.destroy()};
    }
    //añade elemento
    addObj = async (db, table, obj) => {
        try {
            await db.from(table).insert(obj)
                .then(() => {
                    console.log('👍 add element');
                })
                .catch((err) => {
                    console.log(`🚩 Can not add the element -> 💣  ${err}`);
                    throw err;
                })
        } catch (err) {
            console.log(err);
        }finally{db.destroy()};
    }
    //borra elemento
    deleteByID = async(db, table, id) => {
        try {
            await db.from(table).where('id', id).del()
                .then(() => {
                    console.log('👍 deleted element');
                })
                .catch((err) => {
                    console.log(`🚩 Can not delete the element -> 💣  ${err}`);
                    throw err;
                })
        } catch (err) {
            console.log(err);
        }finally{db.destroy()};
    }
    //actualizar elemento
    updateByID = async(db, table) => { 
        try {
            let order = await db.from(table).orderBy('id', 'desc')
                .then(() => {
                    console.log('👍 order good');
                    return order;
                })
                .catch((err) => {
                    console.log(`🚩 Can not order -> 💣  ${err}`);
                    throw err;
                })
        } catch (err) {
            console.log(err);
        }finally{db.destroy()};
    }
    //Ordenar 
    orderIdInv = async(Arr) => {
        try {
            await db.from(table).where('id', id).update(change)
                .then(() => {
                    console.log('👍 change information of element');
                })
                .catch((err) => {
                    console.log(`🚩 Can not change the element -> 💣  ${err}`);
                    throw err;
                })
        } catch (err) {
            console.log(err);
        }finally{db.destroy()};
    }
};

//Export -------------------------
export default Managers;