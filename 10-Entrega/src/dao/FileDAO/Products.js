import MemoryContainer from "./MemoryContainer.js";

const bd = 'products';

export default class Products extends MemoryContainer { 
    constructor() { 
        super(bd);
    };
};