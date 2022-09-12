import faker from 'faker';


export default class CreateElement { 

    constructor() { }

    products = (cant = 20) => { 
        console.log('create')
        faker.locale = 'es';

        /* const { id, timestamp, name, description, code, image, price, stock } = faker; */
        const { commerce , random , image, } = faker;

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

    users = (cant = 20) => { 

        faker.locale = 'es';

        /* const { id, timestamp, name, description, code, image, price, stock } = faker; */
        const { internet , name , image, lorem } = faker;

        let data = [];

        for (let i = 0; i < cant; i++) { 
            data.push({
                id: internet.email, 
                nombre: name.firstName, 
                apellido: name.lastName, 
                edad: i+10, 
                alias: lorem.text,
                avatar: image.avatar
            })
        }
        return data;
    }


    messages = (cant = 20) => { 

        faker.locale = 'es';
    
        /* const { id, timestamp, name, description, code, image, price, stock } = faker; */
        const { name , random, internet,  image , lorem } = faker;

        let data = [];

        for (let i = 0; i < cant; i++) { 
            data.push({
                author: {
                    id: internet.email, 
                    nombre: name.firstName, 
                    apellido: name.lastName, 
                    edad: i+10, 
                    alias: lorem.text,
                    avatar: image.avatar
                },
                text: random.text,
            })
        }
        return data;
    }
}