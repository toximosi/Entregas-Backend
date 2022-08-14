//import----------------------
import * as fs from 'fs';
//function -------------------------------
//class
import managersServices from "./Managers.service.js";
const man = new managersServices();

//Code------------------------
class Carts { 
    constructor() { };
  
      //Metodos--------------------
    getAllProductsCart = async (file, id) => {
        let Arr = await man.readFile(file);
        let ArrNew = new Array();

        Arr.forEach(e => {
            if (e.id == id) { 
                    ArrNew.push(e.products)
            }
        });
        ArrNew = ArrNew[0];
        return ArrNew;
    }
    deteteIdProdCart = async (file, idcart, idpro) => { 
        let Arr = await man.readFile(file);
        let ArrNew = Arr ;
        let ArrProd = new Array();
        let prods = new Array();
        
        ArrNew.forEach(e => { 
            if (e.id == idcart) { 
                e.products.forEach(p => { 
                    if (p.id !== idpro) { 
                        ArrProd.push(p);
                    }
                    e.products = [];
                    e.products.push(ArrProd[0]);
                })
            }
        })
        return ArrNew
    }

};
//Export -------------------------       
export default Carts;