import GenericRepository from "./generic.repository.js";
import Artwork from "../dao/models/product.model.js";


export default class ArtworkRepository extends GenericRepository {
    constructor(dao) {
        super(dao,Artwork.model);
    }
}