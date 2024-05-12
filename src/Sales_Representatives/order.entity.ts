import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { SellerEntity } from "./seller.entity";





@Entity("order")
export class OrderEntity{

    //@Column()
    @PrimaryGeneratedColumn()
    serialId: number;

    //@PrimaryColumn()
    @Column()
    productId: number;

    @Column({name:'fullName', type: 'varchar', length: 150 })
    productName: string;

    @Column()
    productQuantity: number;

    @Column()
    productPrice: number;

    @ManyToOne(() => SellerEntity, seller => seller.carts)
    seller: SellerEntity;

}