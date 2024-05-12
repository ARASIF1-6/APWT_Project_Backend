import { Optional } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";



export class SellerDTO{
   

    @Optional()
    sellerId: number;
    
    @IsNotEmpty({ message: 'Please enter a valid name' })
    @IsString()
    //@Matches(/^[^\d]+$/, { message: 'Name field should not contain any numbers' })
    @Matches(/^[A-Za-z]+$/, { message: 'Name field should contain only alphabetic character' })
    name: string;

    @IsNotEmpty({ message: 'Please enter a valid email address' })
    @IsEmail({}, { message: 'Invalid email format' })
    @MaxLength(30, { message: 'Email Address field must be at most 30 characters long' })
    @MinLength(10, { message: 'Email Address field must be at least 20 characters long' })
    @Matches(/.*@.*\.com$/, { message: 'Email must contain @, ., com' })
    email: string;

    @IsNotEmpty({ message: 'Please enter your valid phone number' })
    @IsString()
    @MaxLength(11, { message: 'Number field must be at most 11 characters long' })
    @MinLength(11, { message: 'Number field must be at least 11 characters long' })
    @Matches(/^[0-9]+$/, { message: 'Phone number field must contain only digits' })
    //@Matches(/^01-\d{6}$/, { message: 'Phone number field 1st digits must contain only 0 and 1' })
    number: string;

    @IsNotEmpty({ message: 'Please enter a positon' })
    @IsString()
    @Matches(/^[^\d]+$/, { message: 'Positon field should not contain any numbers' })
    position: string;

    @IsNotEmpty({ message: 'Please enter a valid username' })
    @IsString()
    username: string;

    @IsNotEmpty({ message: 'Please enter a valid password' })
    @IsString()
    @Matches(/.*[0-9].*/, { message: 'Password field must contain one of the numeric character' })
    @Matches(/[#@\$&]/, { message: 'Password field must contain one of the special characters (@ or # or $ or &)' })
    password: string;

    @Optional()
    filename: string;

    @Optional()
    carts: any;

    @Optional()
    orders: any;


    @Optional()
    address:any;
}

export class addressDto{
    // Address related properties
     
    @Optional()
    serialId:number;

    @IsNotEmpty({ message: 'Please enter a street according to your address' })
    @IsString()
    street: string;

    @IsNotEmpty({ message: 'Please enter a city' })
    @IsString()
    city: string;
     
    @Optional()
    seller:any;
     
}

export class loginDTO{

    @IsNotEmpty({ message: 'Please enter a valid username' })
    @IsString() 
    username: string;

    @IsNotEmpty({ message: 'Please enter a valid password' })
    @IsString()
    password: string;    
}

export class UpdateSellerDTO{

    @Optional()
    //@IsNotEmpty({ message: 'Please enter a valid name' })
    /*@IsString()
    @Matches(/^[A-Za-z]+$/, { message: 'Name field should contain only alphabetic character' })*/
    name: string;

    @Optional()
    //@IsNotEmpty({ message: 'Please enter a valid email address' })
    /*@IsEmail({}, { message: 'Invalid email format' })
    @MaxLength(30, { message: 'Email Address field must be at most 30 characters long' })
    @MinLength(10, { message: 'Email Address field must be at least 20 characters long' })
    @Matches(/.*@.*\.com$/, { message: 'Email must contain @, ., com' })*/
    email: string;

    @Optional()
    //@IsNotEmpty({ message: 'Please enter your valid phone number' })
    /*@IsString()
    @MaxLength(11, { message: 'Number field must be at most 11 characters long' })
    @MinLength(11, { message: 'Number field must be at least 11 characters long' })
    @Matches(/^[0-9]+$/, { message: 'Phone number field must contain only digits' })*/
    //@Matches(/^01-\d$/)
    number: string;

}

export class UpdateProfilePicDto{

    @Optional()
    filename: string;

}

export class UpdatePasswordDTO{

    @Optional()
    //@IsNotEmpty({ message: 'Please enter a valid password' })
    //@IsString()
    //@Matches(/.*[0-9].*/, { message: 'Password field must contain one of the numeric character' })
    //@Matches(/[#@\$&]/, { message: 'Password field must contain one of the special characters (@ or # or $ or &)' })
    password: string;

}