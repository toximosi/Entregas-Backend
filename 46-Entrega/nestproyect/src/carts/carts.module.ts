import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './schema/cart.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Cart.name,
    schema: CartSchema
  }]), ConfigModule],
  controllers: [CartsController],
  providers: [CartsService]
})
export class CartsModule {}
