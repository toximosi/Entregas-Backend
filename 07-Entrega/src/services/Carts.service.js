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
        try {
            let Arr = await man.readFile(file);
            let ArrNew = new Array();

            Arr.forEach(e => {
                if (e.id == id) { 
                        ArrNew.push(e.products)
                }
            });
            ArrNew = ArrNew[0];
            return ArrNew;

        } catch (err) {
            console.log(`🚩 Can not find cart with ${id},\n  💣 error: ${err}`);
        }
    }
    addProductCart = async (file, id, prod) => {
        try {
            let Arr = await man.readFile(file);
            let ArrNew = new Array();
            let ArrProd = new Array();
            let ArrProdNew = new Array();
            let count = 0;

            Arr.forEach(e => {
                ArrNew.push(e);
                if (e.id == id) {
                    ArrProd = e.products;
                }
            });

            ArrProd.forEach(p => {
                if (p.id == prod.id) {
                    if (!p.cantidad || p.cantidad == "") {
                        p.cantidad = 1;
                    } else if (p.id == prod.id) {
                        p.cantidad++
                    }
                }
                ArrProdNew.push(p);
            });

            ArrProdNew.forEach(n => { 
                if(n.id == prod.id) {
                    count++;
                }
            });

            if (count == 0) { 
                prod.cantidad = 1;
                ArrProdNew.push(prod);
            }

            ArrNew.forEach(e => { 
                if (e.id == id) { 
                    e.products = ArrProdNew;
                    console.log("e");
                    console.log(e);
                }
            })
            return ArrNew;
        } catch (err) {
            console.log(`🚩 Can not add product in cart with id: ${id},\n  💣 error: ${err}`);
        }
    };

    deteteIdProdCart = async (file, idcart, idpro) => { 
        try {
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
        } catch (err) {
            console.log(`🚩 Can not deleted cart with id: ${id},\n  💣 error: ${err}`);
        }
    }

};
//Export -------------------------       
export default Carts;