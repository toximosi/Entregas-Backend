//import
import fs from 'fs';

//code
class FilesJson { //function to read and modifi files json
    constructor() { };
    //Metodos
    //lee el archivo json
    readFile = async(file) => { 
        try {
            if (fs.existsSync(file)) {
                let data = await fs.promises.readFile(file, 'utf8');
                let p = JSON.parse(data);
                return p;
            } else {
                return [];
            }
        } catch (err) {
            console.log(`🚩 Can not read file: ${file},\n 💣 error: ${err}`);
        }
    }
    //obtiene todos los elementos del archivo
    getAll = async (file) => {
        try {
            let data = await this.readFile(file);
            if (data == "" || data.length == 0) {
                console.log(`🚩 file empty: ${file}`);
            } else {
                return data;
            }
        } catch (err) {
            console.log(`🚩 Can not read file: ${file},\n 💣 error: ${err}`);
        }
        
    };
}
//Exports
export default FilesJson;