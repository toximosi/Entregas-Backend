import faker from "faker";

export default class userService { 
    constructor() { }

    existUser = async(model, element) => { 
        let exist = await model.findOne({ email: element });
        if (exist) { 
            console.log(`👍 find the element ${element} is ok`);
            return true;
        }else { 
            exist = [];
            console.log(`🫣  don't find user ${element}`);
            return false;
        }

    }

    createUser = async (model, obj) => {
        console.log('🐵 start Create User');
        try {
            faker.locale = 'es';
            const { nombre, email, password } = await obj;
            const { name, image, lorem } = faker;
            /* const exist = await usersModel.findOne({ email: email }); */
            const exist = await this.existUser(model, email);
            if (exist == false) {
                let obj = {
                    id: email,
                    timestamp: Date.now(),
                    nombre: nombre,
                    apellido: name.lastName(),
                    email,
                    edad: 0,
                    password: password,
                    alias: lorem.text(),
                    avatar: image.avatar()
                }
                await model.create(obj);
                console.log('user create');
                return obj;
            } else {
                console.log('user exist');
                return false;
            };
        } catch (err) {
            console.log(err);
        }
        console.log('🙊 uho! there is a problem to create user');
    };
};