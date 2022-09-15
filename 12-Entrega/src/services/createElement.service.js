import faker from 'faker';
import __dirname from '../utils.js';
import readFile from '../services/readFiles.service.js';
const file = new readFile;
const usersJson = __dirname + '/json/users.json';

export default class CreateElement { 

    constructor() { }

    products = (cant = 20) => { 
        faker.locale = 'es';

        /* const { id, timestamp, name, description, code, image, price, stock } = faker; */
        const { commerce , random , image } = faker;

        let data = [];

        for (let i = 0; i < cant; i++) { 
            data.push({
                id: i,
                timestamp: Date.now(),
                name: commerce.productName(),
                description: commerce.productDescription(),
                code: random.number(),
                image: image.image(),
                price: commerce.price(),
                stock: i 
            })
        }
        return data;
    }

    messages = (cant = 20) => { 
        faker.locale = 'es';
    
        /* const { id, timestamp, name, description, code, image, price, stock } = faker; */
        const { name, random, internet,  image , lorem } = faker;

        let data = [];

        for (let i = 0; i < cant; i++) { 
            data.push({
                author: {
                    id: internet.email(), 
                    nombre: name.firstName(), 
                    apellido: name.lastName(), 
                    edad: i+10, 
                    alias: random.word(),
                    avatar: image.avatar()
                },
                text: lorem.paragraph(),
            })
        }
        return data;
}


    userCreatemessages = (cant = 20) => { 

        faker.locale = 'es';

        /* const { id, timestamp, name, description, code, image, price, stock } = faker; */
        const { internet , name , image, lorem } = faker;

        let data = [];

        for (let i = 0; i < cant; i++) { 
            data.push({
                id: internet.email(), 
                nombre: name.firstName(), 
                apellido: name.lastName(), 
                edad: i+10, 
                alias: lorem.text(),
                avatar: image.avatar()
            })
        }
        return data;
    }
    users = (obj)=>{ 
        let users = [];
        for (let i = 0; i < obj.lenght; i++) { 
            users.push({
                id: obj.id, 
                nombre: obj.nombre, 
                apellido: obj.apellido, 
                edad: obj.edad, 
                alias: obj.alias,
                avatar: obj.avatar
            })
        }
        file.write(usersJson, users)
        return users;
    }
    
    
}