//funciones estandar
//import----------------------
import knex from 'knex';
import * as fs from 'fs'; 
import __dirname from '../utils.js';

//Code------------------------
class Managers {
    constructor() { };
    //Metodos-----------------------------------------------------------------
    //Crear Tabla
    /* createTable = async (bd, table) => {}; */
    /* existTable = async (bd, table) => {} */

    //Obtiene todos los elementos
    getAll = async (options, table) => {

        const bd = knex(options);
        let obj;
        
        await bd(table).select('*')
            .then((data) => {
                if (data.length <= 0) {
                    console.log(`👍  get data of table,\n table -> ${table}`);
                } else { 
                    console.log(`👍  get data of table -> ${table},\n data -> ${JSON.stringify(data)}`);
                }
                obj = JSON.parse(JSON.stringify(data));
            })
            .catch((err) => {
                console.log(`🚩 Can not find data in table db ${table},\n error: 💣  ${err}`);
            })
            .finally(() => bd.destroy());
        
        return obj;

    };
    
    //obtiene elemento
    getById = async (options, table, id) => {
        
        const bd = knex(options);
        let obj;

        await bd(table).select('*').where('id', id)
            .then((data) => {
                if (data != "") {
                    console.log(`👍 find the element,\n table -> ${table},\n id -> ${id},\n element -> ${JSON.stringify(data)}`)
                    obj = JSON.parse(JSON.stringify(data));
                } else {
                    console.log('👎 Do not find the element,\n table -> ${table},\n id -> ${id}')
                    obj = "";
                }
            }).catch((err) => {
                console.log(`🚩 Can not find elment in table,\n table -> ${table},\n id -> ${id},\n error: 💣  ${err}`);
            })
            .finally(() => bd.destroy());
        
        return obj;
    }

    //añade elemento
    addObj = async (options, table, obj) => {
        const bd = knex(options);

        await bd(table).insert(obj)
            .then(() => {
			    console.log(`👍 the data has been added to the table,\n table -> ${table},\n element -> ${obj}`);
            })
            .catch((err) => {
                console.log(`🚩 the data could not be added to the table,\n table -> ${table},\n 💀 error: ${err}`);
                throw err;
            }).finally(() => bd.destroy());
    }

    //borra elemento
    deleteByID = async(options, table, id) => {
        const bd = knex(options);

        await bd(table).where('id', id).del()
            .then(() => {
                console.log('👍 deleted element,\n table -> ${table},\n element -> ${id} ');
            })
            .catch((err) => {
                console.log(`🚩 Can not delete the element,\n table -> ${table},\n element -> ${id},\n error -> 💣  ${err}`);
                throw err;
            }).finally(() => bd.destroy());

    }

    //actualizar elemento
    updateByID = async(options, table, id, obj) => { 
        const bd = knex(options);

        await bd(table).where({ id: id }).update(obj)
            .then(async() => {
                try {
                    let objNew = await this.getById(options, table, id);
                    console.log(`👍 the element is update in the table,\n table -> ${table},\n element -> ${JSON.stringify(objNew)}`);
                    return objNew;
                } catch (err) { }
            })
            .catch((err) => {
                console.log(`🚩 the element is not update in the table,\n table -> ${table},\n 💀 error: ${err}`);
                throw err;
            }).finally(() => bd.destroy());
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