import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";





@Entity("product")
export class ProductEntity{

    @PrimaryGeneratedColumn()
    productId: number;

    @Column({ type: 'varchar', unique: true })
    productCode: string;

    @Column({name:'fullName', type: 'varchar', length: 150, unique: true })
    productName: string;

    @Column()
    productQuantity: number;

    @Column({ type: 'varchar', length: 100 })
    productCategory: string;

    @Column()
    productPrice: number;

    @Column({name:'Picture' })
    filename: string;
    
}