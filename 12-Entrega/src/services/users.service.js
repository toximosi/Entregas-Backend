

export default class userService { 
    constructor() { }

    existUser = async(model, element) => { 
        let exist = await model.find({ "nombre": element });
        if (exist != "" || exist == 1 || exist == true || exist == 'true') { 
            console.log(`👍 find the element ${element} is ok`);
            return exist;
        }else { 
            exist = [];
            console.log(`🫣 don't find the element ${element}`);
            return exist;
        }

    }



};