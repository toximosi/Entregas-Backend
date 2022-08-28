//import
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
//conexion bd
import router from "../../../../08-Entrega/src/routers/products.router";
import database from "../conexion";
//funciton
import Managers from "../services/manager.service.js";

//var ----------------------------------------------
const collection = 'carts'
const query = database.collection(collection);

const dataStart;



//Code ----------------------------------------------
//CRUD
//*CREATE
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


//*READ
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



//*DELETE
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