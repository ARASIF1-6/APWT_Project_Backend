import { Optional } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";



export class CustomerDTO{
   

    @Optional()
    customerId: number;
    
    @IsNotEmpty({ message: 'Please enter a valid name' })
    @IsString()
    @Matches(/^[A-Za-z]+$/, { message: 'Name field should contain only alphabetic character' })
    name: string;

    @IsNotEmpty({ message: 'Please enter a valid email address' })
    @IsEmail({}, { message: 'Invalid email format' })
    @MaxLength(30, { message: 'Email Address field must be at most 30 characters long' })
    @MinLength(10, { message: 'Email Address field must be at least 20 characters long' })
    @Matches(/.*@.*\.com$/, { message: 'Email must contain @, ., com' })
    email: string;

    @IsNotEmpty({ message: 'Please enter your address' })
    @IsString()
    address: string;

    @IsNotEmpty({ message: 'Please enter your valid phone number' })
    @IsString()
    @MaxLength(11, { message: 'Number field must be at most 11 characters long' })
    @MinLength(11, { message: 'Number field must be at least 11 characters long' })
    @Matches(/^[0-9]+$/, { message: 'Phone number field must contain only digits' })
    number: string;

    @IsNotEmpty({ message: 'Please enter a user' })
    @IsString()
    @Matches(/^[^\d]+$/, { message: 'User field should not contain any numbers' })
    user: string;

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
}

export class UpdateCustomerDTO{

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
    //@IsNotEmpty({ message: 'Please enter your address' })
    //@IsString()
    address: string;

    @Optional()
    //@IsNotEmpty({ message: 'Please enter your valid phone number' })
    /*@IsString()
    @MaxLength(11, { message: 'Number field must be at most 11 characters long' })
    @MinLength(11, { message: 'Number field must be at least 11 characters long' })
    @Matches(/^[0-9]+$/, { message: 'Phone number field must contain only digits' })*/
    //@Matches(/^01-\d$/)
    number: string;

    @Optional()
    //@IsNotEmpty({ message: 'Please enter a valid password' })
    //@IsString()
    //@Matches(/.*[0-9].*/, { message: 'Password field must contain one of the numeric character' })
    //@Matches(/[#@\$&]/, { message: 'Password field must contain one of the special characters (@ or # or $ or &)' })
    password: string;

    @Optional()
    filename: string;

}