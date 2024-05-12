import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SellerEntity } from "./seller.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { SellerDTO, UpdatePasswordDTO, UpdateProfilePicDto, UpdateSellerDTO, loginDTO } from "./seller.dto";
import { ProductEntity } from "./product.entity";
import { UpdateDTO } from "./product.dto";
import { CustomerEntity } from "./customer/customer.entity";
import { CustomerDTO, UpdateCustomerDTO } from "./customer/customer.dto";
import { CartEntity } from "./cart.entity";
import { CartDTO } from "./cart.dto";
import { AddressEntity } from "./address.entity";
import { OrderEntity } from "./order.entity";




@Injectable()
export class SellerService {
    constructor(@InjectRepository(SellerEntity)
  private sellerRepo: Repository<SellerEntity>,
  private jwtService: JwtService,

  @InjectRepository(ProductEntity)
  private productRepo: Repository<ProductEntity>,

  @InjectRepository(CustomerEntity)
  private customerRepo: Repository<CustomerEntity>,

  @InjectRepository(CartEntity)
  private cartRepo: Repository<CartEntity>,

  @InjectRepository(AddressEntity)
  private addressRepo: Repository<AddressEntity>,

  @InjectRepository(OrderEntity)
  private orderRepo: Repository<OrderEntity>

  ) { }
  
    async createAddress(address: AddressEntity, username:string): Promise<AddressEntity> {
        const seller = await this.sellerRepo.findOneBy({username:username})
        /*address.street = address.street
        address.city=address.city*/
        address.seller = seller
        return this.addressRepo.save(address);
    }
    async updateProfile(username: string, UpdateInfo:UpdateSellerDTO):Promise<SellerEntity>{
        await this.sellerRepo.update({username:username}, UpdateInfo);
        return await this.sellerRepo.findOneBy({username:username});
    }

    async updatePic(username: string, UpdatePic:UpdateProfilePicDto):Promise<SellerEntity>{
        await this.sellerRepo.update({username:username}, UpdatePic);
        return await this.sellerRepo.findOneBy({username:username});
    }

    async updatePassword(username: string, UpdatePassword:UpdatePasswordDTO):Promise<SellerEntity>{
        await this.sellerRepo.update({username:username}, UpdatePassword);
        return await this.sellerRepo.findOneBy({username:username});
    }

    async showProfile(username:string):Promise<SellerEntity>
    {
        return await this.sellerRepo.findOneBy({username:username});
    }

    /*async DeleteProfile(username:string):Promise<void>
    {
        const data = await this.sellerRepo.findOneBy({username:username})
        await this.sellerRepo.delete(data.sellerId);
        await this.addressRepo.delete(data.sellerId);
    }*/

    async addSeller(myobj: SellerEntity): Promise<SellerEntity> {
        return await this.sellerRepo.save(myobj);
    }

    async addProduct(myobj: ProductEntity): Promise<ProductEntity> {
        return await this.productRepo.save(myobj);
    }

    async updateProduct(id:number, UpdateProduct:UpdateDTO):Promise<ProductEntity>{
           await this.productRepo.update(id,UpdateProduct);
           return await this.productRepo.findOneBy({productId:id});
    }

    async showAllProduct():Promise<ProductEntity[]>
    {
        return await this.productRepo.find();
    }

    async searchProduct(name:string):Promise<ProductEntity>
    {
        return await this.productRepo.findOneBy({productName:name});
    }

    async searchProductCategory(category:string):Promise<ProductEntity[]>
    {
        return await this.productRepo.find({where: {productCategory: category},});
    }

    async DeleteProduct(name:string):Promise<void>
    {
        await this.productRepo.delete({productName:name});
    }

    async addCustomer(myobj: CustomerEntity): Promise<CustomerEntity> {
        return await this.customerRepo.save(myobj);
    }

    async updateCustomer(id:number, UpdateCustomer:UpdateCustomerDTO):Promise<CustomerEntity>{
        await this.customerRepo.update(id,UpdateCustomer);
        return await this.customerRepo.findOneBy({customerId:id});
    }

    async showAllCustomer():Promise<CustomerEntity[]>{
        return await this.customerRepo.find();
    }

    async searchCustomer(name:string):Promise<CustomerEntity>{
        return await this.customerRepo.findOneBy({name:name});
    }

    async DeleteCustomer(username:string):Promise<void>
    {
        await this.customerRepo.delete({username:username});
    }

    /*async addCart(myobj: CartEntity): Promise<CartEntity> {
        const data = await this.productRepo.findOneBy({productId:myobj.productId});
        if(data){
            data.productQuantity = data.productQuantity - myobj.productQuantity;
            this.productRepo.update(myobj.productId,data);
            myobj.productPrice = myobj.productPrice * myobj.productQuantity;
            return await this.cartRepo.save(myobj);
        }
    }*/

    async addCart(username:string, myobj: CartEntity): Promise<CartEntity> {
        const data = await this.productRepo.findOneBy({productId:myobj.productId});
        const seller= await this.sellerRepo.findOneBy({username:username})
        myobj.seller = seller
        if(data){
            data.productQuantity = data.productQuantity - myobj.productQuantity;
            this.productRepo.update(myobj.productId,data);
            myobj.productPrice = myobj.productPrice * myobj.productQuantity;
            return await this.cartRepo.save(myobj);
        }
    }

    async showCartProduct():Promise<CartEntity[]>
    {
        //const seller= await this.sellerRepo.findOneBy({username:username})
        return await this.cartRepo.find();
    }

    /*async showAllOrder(username:string):Promise<CartEntity[]>{
        const seller= await this.sellerRepo.findOneBy({username:username})
        //const data = seller.sellerId;
        return await this.cartRepo.find({where: {seller,},});
    }*/

    async order(msg: string, username:string): Promise<OrderEntity> {
        let total_price = 0;
        let order;
        const data = await this.cartRepo.find();
        const seller= await this.sellerRepo.findOneBy({username:username})
        if(msg == "yes"){
            for(let i = 0; i<data.length; i++){

                data[i].seller = seller
                order = this.orderRepo.save(data[i]);
                total_price += data[i].productPrice;  
                this.cartRepo.delete({productId:data[i].productId});
            }
            return order;
        }
        else{
            let product;
            for(let i = 0; i<data.length; i++){
                const find_product = await this.productRepo.findOneBy({productId: data[i].productId});
                find_product.productQuantity = find_product.productQuantity + data[i].productQuantity;
                this.productRepo.update(data[i].productId,find_product);
                this.cartRepo.delete({productId:data[i].productId});
            }
            return product;
        }
    }

    async orderHistoryDelete(productId:number):Promise<void>
    {
        await this.orderRepo.delete({productId:productId});
    }

    
    async findOne(logindata:loginDTO): Promise<SellerEntity> {
        return await this.sellerRepo.findOneBy({username:logindata.username});
    }

    /*async createOrder(cartDto: CartDTO, id:number): Promise<CartEntity> {
        //const id=1
        const seller= await this.sellerRepo.findOneBy({sellerId:id})
        //console.log(buyer);
        const order = new CartEntity
        order.productName = cartDto.productName
        order.seller = seller
        //const order = this.orderRepository.save(orderDto);
        return this.cartRepo.save(order);
    }*/

    /*async searchSeller(logindata:loginDTO): Promise<SellerEntity> {
        return await this.sellerRepo.findOneBy({username:logindata.username});
    }*/


}
