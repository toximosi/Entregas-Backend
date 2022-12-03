import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, LeanDocument, SchemaTypes } from "mongoose";


export type CartDocument = HydratedDocument<Cart>;

@Schema()
class cartProduct { 
    @Prop({type:mongoose.SchemaTypes.ObjectId, ref:'Products'})
    product: any
        
    @Prop({default:1})
    quantity: number
}

const cartProductSchema = SchemaFactory.createForClass(cartProduct);

@Schema()
export class Cart { 
    @Prop({ type: SchemaTypes.ObjectId, ref: 'cartProduc'})
    products: cartProduct[]
};

export const CartSchema = SchemaFactory.createForClass(Cart);