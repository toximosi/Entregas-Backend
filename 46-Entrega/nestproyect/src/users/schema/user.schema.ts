import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, LeanDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User { 
    @Prop( {required:true})
    first_name: string
    
    @Prop()
    last_name: string
    
    @Prop({ required: true, default: '1234' })
    password: string
    
    @Prop({ required: true, unique: true })
    email: string
    
    @Prop({ enum: ['user', 'artist', 'admin'], default: 'user' })
    role: string
    
    @Prop({ default: '/images/avatar/avatar.png' })
    image: string

    @Prop()
    address: string

    @Prop({type:mongoose.SchemaTypes.ObjectId, ref: 'Carts'})
    cart: any
};

export const UserSchema = SchemaFactory.createForClass(User);