import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { async } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';



@Module({
  imports: [UsersModule, ProductsModule, CartsModule, ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({ 
      uri: config.get<string>('MONGO_URL')
    })
  }), ProductsModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
