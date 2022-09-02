import MemoryContainer from "./MemoryContainer.js";

const bd = 'carts';

export default class Carts extends MemoryContainer { 
    constructor() { 
        super(bd);
    };
};