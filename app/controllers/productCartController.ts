import { ProductCart } from './../models/productCartModel';
import ProductCartService from '../services/productCartService';
import { container } from "tsyringe";
import { Request , Response} from "express";


export default class ProductCartController{
    static async createNewProductCart(req:Request, res:Response){
        try{
            const newProductCart = req.body
            const productCartService: ProductCartService = container.resolve(ProductCartService);
            const createProductCart = await productCartService.createProducCart(newProductCart)
            res.status(201).json({
                status: 201,
                productCart: createProductCart,
            })
        }catch(err:any){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }

    static async deleteProduct(req:Request, res:Response){
        try{
            const id: number = parseInt(req.params.id);
            const productCartService: ProductCartService = container.resolve(ProductCartService);
            const deletedCount: number = await productCartService.deleteProduct(id)
            if(deletedCount === 0){
               return res.status(404).json({
                    status: 404,
                    message: 'Product not found'
                });
            }
            res.status(200).json({
                status: 200,
                message: 'Product cart deleted'
            });

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
        
    }

    static async updateProductQuantity(req: Request, res: Response){
        try{
            const productService: ProductCartService = container.resolve(ProductCartService);
            const id: number = parseInt(req.params.id);
            const quantityObj: Partial<ProductCart> =  req.body;
            const stockToUpdate : number    = quantityObj.quantity as number
            
            const updatedStock = await productService.updateQuantity(id, stockToUpdate);
            res.status(200).json({
                status: 200,
                message: "Stock updated successfully"
            })

        }catch(err:any){
            res.status(500).json({
                status: 500,
                message: err.message
            })
        }
    }
}