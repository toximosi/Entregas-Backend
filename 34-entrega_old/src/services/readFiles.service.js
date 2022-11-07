import fs from 'fs';

export default class readFile {
    constructor() { }

     // write file
    write = async (file, obj) => {
        try {
            await fs.promises.writeFile(file, JSON.stringify(obj, null, '\t'));
        }catch(err){ 
            console.log(`🚩 Error to write file.\n
                        fuction -> writeFile.\n 
                        💣  Error: ${err}`);
        }
    };
    // read file
    read = async (file) => {
        try {
            if (fs.existsSync(file)) {
                let data = await fs.promises.readFile(file, 'utf8');
                let p = JSON.parse(data);
                return p;
            } else {
                return [];
            }
        }catch(err){ 
            console.log(`🚩 Error to read file.\n
                        fuction -> readFile.\n 
                        💣  Error: ${err}`);
        }
    };

};