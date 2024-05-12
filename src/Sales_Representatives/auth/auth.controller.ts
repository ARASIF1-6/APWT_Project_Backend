import { Body, Controller, Post,UsePipes, UseInterceptors, UploadedFile, ValidationPipe, Session, HttpException, HttpStatus, InternalServerErrorException, Get, Delete, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import * as bcrypt from 'bcrypt';
import { SellerDTO, addressDto, loginDTO } from '../seller.dto';
import { Console } from 'console';
import session from 'express-session';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
    @UseInterceptors(FileInterceptor('profilePic',
        {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                    cb(null, true);
                else {
                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                }
            },
            limits: { fileSize: 30000 },
            storage: diskStorage({
                destination: './upload',
                filename: function (req, file, cb) {
                    cb(null, Date.now() + file.originalname)
                },
            })
        }
    ))
    @UsePipes(new ValidationPipe)
    async addUser(@Body() myobj: SellerDTO, @UploadedFile() myfile: Express.Multer.File): Promise<SellerDTO> {
      try{
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(myobj.password, salt); 
        myobj.password= hashedpassword;
        myobj.filename = myfile.filename;
        return this.authService.signUp(myobj);
      }
      catch{
        throw new InternalServerErrorException("Failed to registration");
      }
    }

  @Post('login')
  @UsePipes(new ValidationPipe)
  signIn(@Body() logindata: loginDTO, @Session() session) {
    try{
      const result = this.authService.signIn(logindata);
      if(result){
        session.username=logindata.username;
      
        return result;
      }
      else
      {
        throw new HttpException('UnauthorizedException', HttpStatus.UNAUTHORIZED); 
      }
    }
    catch{
      throw new InternalServerErrorException("Failed to login");
    }
  }

  @Post('/logout')
  signout( @Req() req) {
    const result = req.session.destroy();
    if(result){
      return true;
    }
    else{
      throw new UnauthorizedException("invalid actions");
    }

  }

  /*@Post('login')
  @UsePipes(new ValidationPipe)
  signIn(@Body() logindata: loginDTO) {
    return this.authService.signIn(logindata);
  }*/

 /* @Post('loginn')
  @UsePipes(new ValidationPipe)
    async login(@Body() logindata: loginDTO, @Session() session){
    
      const result = await this.authService.login(logindata);
      if(result){
        session.username=logindata.username;
        console.log(session.email);
        
        return true;
      }
      else
      {
        throw new HttpException('UnauthorizedException', HttpStatus.UNAUTHORIZED); 
      }
    }*/

 
}