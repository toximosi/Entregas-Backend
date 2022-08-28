//& import ---------------------------------------------
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
//dirname url
import __dirname from '../../utils';//static files
//import { uploader } from '../../utils.js';
// conexion bd
import database from "../conexion";

//& DB ----------------------------------------------
const collection = 'products';//!CHANGE!!
const query = database.collection(collection);

//data 
import dataIni from '../../json/products.json';//!CHANGE!!
const dataStart = JSON.parse(dataIni); 

//function
import ManagersServices from "../services/manager.service.js";
const man = new ManagersServices();



//Code ----------------------------------------------
//CRUD
//* CREATE
/// INICIALICE
router.post('/ini', (req, res) => {
    try { 
        
    } catch (err) { 
        console.log(err);
    }
});

/// Create element
router.post('/create', (req, res) => {
    try { 
        
    } catch (err) { 
        console.log(err);
    }
});


//* READ
// ALL
router.get('/', (req, res) => { 
    try { 

    } catch (err) { 
        console.log(err);
    }
})
// Element by id
router.get('/:id', (req, res) => { 
    try { 

    } catch (err) { 
        console.log(err);
    }
});


//* UPLOAD
// Element by ID
router.put('/put/:id', (req, res) => { 
    try { 

    } catch (err) { 
        console.log(err);
    }
});



//* DELETE
//-> Element by ID
router.delete('/deleted/:id', (req, res) => { 
    try { 

    } catch (err) { 
        console.log(err);
    }
});
//!-> ALL
router.delete('/deleted/:id', (req, res) => { 
    try { 

    } catch (err) { 
        console.log(err);
    }
});