import GenericRepository from "./generic.repository.js";
import Gallery from "../dao/models/cart.model.js";

export default class GalleryRepository extends GenericRepository{
    constructor(dao){
        super(dao,Gallery.model);
    }
}