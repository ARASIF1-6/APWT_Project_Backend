import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";





export class CartDTO{

    @Optional()
    serialId: number;

    @IsNotEmpty({ message: 'Please enter a valid product id' })
    @IsNumber()
    productId: number;

    @IsNotEmpty({ message: 'Please enter a valid product name' })
    @IsString()
    @Matches(/^[A-Za-z]+$/, { message: 'Product name field should contain only alphabetic character' })
    productName: string;

    @IsNotEmpty({ message: 'Please enter a product quantity' })
    @IsNumber()
    productQuantity: number;

    @IsNotEmpty({ message: 'Please enter a product price' })
    @IsNumber()
    productPrice: number;

    @Optional()
    seller: any;

}