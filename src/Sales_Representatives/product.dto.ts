import { Optional } from "@nestjs/common";
import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";





export class ProductDTO{
   

    @Optional()
    productId: number;

    @IsNotEmpty({ message: 'Please enter a valid product code' })
    @IsString()
    @MaxLength(6, { message: 'Product code field must be at most 6 characters long' })
    @MinLength(6, { message: 'Product code field must be at least 6 characters long' })
    @Matches(/^[0-9]+$/, { message: 'Product code field must contain only digits' })
    productCode: string;
    
    @IsNotEmpty({ message: 'Please enter a valid product name' })
    @IsString()
    @Matches(/^[A-Za-z]+$/, { message: 'Product name field should contain only alphabetic character' })
    productName: string;

    @IsNotEmpty({ message: 'Please enter a product quantity' })
    @IsString()
    @Matches(/^[0-9]+$/, { message: 'Product quantity field must contain only digits' })
    productQuantity: number;

    @IsNotEmpty({ message: 'Please enter a product category' })
    @IsString()
    @Matches(/^[A-Za-z]+$/, { message: 'Product category field should contain only alphabetic character' })
    productCategory: string;

    @IsNotEmpty({ message: 'Please enter a product price' })
    @IsString()
    @Matches(/^[0-9]+$/, { message: 'Product price field must contain only digits' })
    productPrice: number;

    @Optional()
    filename: string;

}


export class UpdateDTO{

    @Optional()
    /*@IsNotEmpty({ message: 'Please enter a valid product code' })
    @IsString()
    @MaxLength(6, { message: 'Product code field must be at most 6 characters long' })
    @MinLength(6, { message: 'Product code field must be at least 6 characters long' })
    @Matches(/^[0-9]+$/, { message: 'Product code field must contain only digits' })*/
    productCode: string;

    @Optional()
    /*@IsNotEmpty({ message: 'Please enter a valid product name' })
    @IsString()
    @Matches(/^[A-Za-z]+$/, { message: 'Product name field should contain only alphabetic character' })*/
    productName: string;

    @Optional()
    /*@IsNotEmpty({ message: 'Please enter a product quantity' })
    @IsString()
    @Matches(/^[0-9]+$/, { message: 'Product quantity field must contain only digits' })*/
    productQuantity: number;

    @Optional()
    /*@IsNotEmpty({ message: 'Please enter a product category' })
    @IsString()
    @Matches(/^[A-Za-z]+$/, { message: 'Product category field should contain only alphabetic character' })*/
    productCategory: string;

    @Optional()
    /*@IsNotEmpty({ message: 'Please enter a product price' })
    @IsString()
    @Matches(/^[0-9]+$/, { message: 'Product price field must contain only digits' })*/
    productPrice: number;

    @Optional()
    filename: string;

}