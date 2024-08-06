import { Router } from "express";
import OrderController from "../controllers/orderController";

export const orderRouter = Router();

orderRouter.post("/", OrderController.createNewOrder);
orderRouter.get("/", OrderController.getAllOrders);
orderRouter.get("/:id/products", OrderController.getUserWithProducts)
orderRouter.put("/:id", OrderController.updateOrder);
orderRouter.delete("/:id", OrderController.deleteOrder);


