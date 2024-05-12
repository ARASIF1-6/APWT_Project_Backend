import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SellerEntity } from "./seller.entity";





@Entity("address")
export class AddressEntity {
  @PrimaryGeneratedColumn()
  serialId: number;
 
  @Column()
  street: string;
 
  @Column()
  city: string;
 
  @OneToOne(() => SellerEntity, seller => seller.address)
  @JoinColumn()
  seller: SellerEntity;
}