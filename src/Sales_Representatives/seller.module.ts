import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SellerEntity } from "./seller.entity";
import { JwtModule } from "@nestjs/jwt/dist/jwt.module";
import { SellerController } from "./seller.controller";
import { SellerService } from "./seller.service";
import { AuthService } from "./auth/auth.service";
import { ProductEntity } from "./product.entity";
import { CustomerEntity } from "./customer/customer.entity";
import { CartEntity } from "./cart.entity";
import { AddressEntity } from "./address.entity";
import { OrderEntity } from "./order.entity";




@Module({
    imports: [TypeOrmModule.forFeature([SellerEntity, ProductEntity, CustomerEntity, CartEntity, AddressEntity, OrderEntity]),
    JwtModule.register({
      global: true,
      secret: "3NP_Backend_Admin",
      signOptions: { expiresIn: '30m' },
    }),
  ],
    controllers: [SellerController],
    providers: [SellerService,AuthService],
    exports: [SellerService],
  })
  export class SellerModule {}