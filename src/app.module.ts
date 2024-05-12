import { Module } from '@nestjs/common';
import { AuthModule } from './Sales_Representatives/auth/auth.module';
import { SellerModule } from './Sales_Representatives/seller.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [SellerModule, TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'wwe2k24',
     database: 'Inventory_Management_System',
     autoLoadEntities: true,
     synchronize: true,
     } ), AuthModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
