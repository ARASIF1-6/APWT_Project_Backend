import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SellerDTO, addressDto, loginDTO } from '../seller.dto';
import { SellerService } from '../seller.service';
import { SellerEntity } from '../seller.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private sellerService: SellerService, 
    private jwtService: JwtService
  ) {}
  async signUp(myobj: SellerDTO): Promise<SellerDTO> {
    return await this.sellerService.addSeller(myobj);
}
  async signIn( logindata:loginDTO): Promise<{ access_token: string }> {
    const user = await this.sellerService.findOne(logindata);
   if (!user) {
    throw new UnauthorizedException();
   }
    const isMatch = await bcrypt.compare(logindata.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = logindata;
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  /*async login(logindata: loginDTO){
    const seller = await this.sellerService.searchSeller(logindata);
    const result = await bcrypt.compare(logindata.password, seller.password);
    if(result)
    {
      return true;
    }
    else{
      return false;
    }
  }*/

}