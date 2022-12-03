import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, LeanDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

export class Product {

    @Prop({required:true})
    product_name:string
    
    @Prop()
    product_code: string
    
    @Prop()
    description: string
    
    @Prop({ default: '/images/product/product.png' })
    image: string
    
    @Prop({required:true})
    price: string

    @Prop({default: '0'})
    descount: string
    
    @Prop({required:true})
    quantity: string
    
}

export const ProductSchema = SchemaFactory.createForClass(Product);