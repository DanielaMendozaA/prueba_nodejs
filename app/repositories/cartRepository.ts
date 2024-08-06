import { injectable } from "tsyringe";
import { CartModel } from "../models";

@injectable()
export default class CartRepository{
    async create(cart: Partial<CartModel>){
        return await CartModel.create(cart as CartModel)
    }
}