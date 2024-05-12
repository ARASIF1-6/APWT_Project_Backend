import { PrimaryGeneratedColumn, Column, Entity, Unique, PrimaryColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { CartEntity } from "./cart.entity";
import { AddressEntity } from "./address.entity";
import { OrderEntity } from "./order.entity";





@Entity("seller")
export class SellerEntity{

    @PrimaryGeneratedColumn()
    sellerId: number;

    @Column({name:'fullName', type: 'varchar', length: 150 })
    name: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({name:'Phone_number', type: 'varchar', length: 11, unique: true })
    number: string;

    @Column()
    position: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    username: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column()
    filename: string;

  
    @OneToMany(() => CartEntity, cart => cart.seller, { cascade: true })
    carts: CartEntity[];

    @OneToMany(() => OrderEntity, order => order.seller, { cascade: true })
    orders: CartEntity[];

    @OneToOne(() => AddressEntity, address => address.seller, { cascade: true })
    address: AddressEntity;

    
}