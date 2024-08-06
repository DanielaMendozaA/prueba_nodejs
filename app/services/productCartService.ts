import { ProductCart } from "../models";
import ProductCartRepository from "../repositories/productCartRepository";
import { injectable , inject} from "tsyringe";

@injectable()
export default class ProductCartService{
    constructor(@inject('ProductCartRepository') private productCartRepository: ProductCartRepository){}

    async createProducCart(product: Partial<ProductCart>): Promise<ProductCart>{        
        return await this.productCartRepository.create(product)
    }

    async deleteProduct(id: number){
        return await this.productCartRepository.deleteProductCart(id)
    }

    async updateQuantity(id: number, newQuantity: number){
        return await this.productCartRepository.updateProductQuantity(id, newQuantity)
    }
}