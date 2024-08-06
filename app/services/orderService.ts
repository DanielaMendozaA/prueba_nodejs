import { OrderModel } from "../models";
import OrderRepository from "../repositories/orderRepository";
import { injectable , inject} from "tsyringe";

@injectable()
export default class OrderService{
    constructor(@inject('OrderRepository') private orderRepository: OrderRepository){}

    async createOrder(order: Partial<OrderModel>): Promise<OrderModel>{        
        return await this.orderRepository.create(order)
    }

    async updateOrder(id: number, order: Partial<OrderModel>){
        return await this.orderRepository.updateOrder(id, order)
    }

    async findAllOrders(){
        return await this.orderRepository.findAll()
    }

    async deleteUser(id:number){
        return await this.orderRepository.deleteOrder(id)
    }

    async getProductsByIdOrder(id: number){
        return await this.orderRepository.findProductsByIdOrder(id)
    }

}