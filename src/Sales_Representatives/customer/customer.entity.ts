import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";




@Entity("customer")
export class CustomerEntity{

    @PrimaryGeneratedColumn()
    customerId: number;

    @Column({name:'fullName', type: 'varchar', length: 150 })
    name: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column()
    address: string;

    @Column({name:'Phone_number', type: 'varchar', length: 11, unique: true })
    number: string;

    @Column()
    user: string;

    @Unique(['username'])
    @Column({ type: 'varchar', length: 100 })
    username: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column()
    filename: string;
    
}