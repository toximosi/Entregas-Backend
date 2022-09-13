import { normalize, schema} from 'normalizr'

export default class Normalize { 
    constructor() { }

    menssage = async (data) => { 
        const messagesObj = data[0];
        const author = new schema.Entity('authors');
        const comment = new schema.Entity('comments', {
            author: author
        })
        const message = new schema.Entity('message', {
            author: author,
            comments: [comment]
        })
        return normalize(messagesObj, message);
    }
}