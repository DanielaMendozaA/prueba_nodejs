import ProductCartController from "../controllers/productCartController";
import { Router } from "express";
import authJWT from "../middlewares/verifyJWT";

export const productCartRouter: Router = Router();

productCartRouter.post("/", ProductCartController.createNewProductCart )
productCartRouter.patch("/:id",ProductCartController.updateProductQuantity )
productCartRouter.delete("/:id",ProductCartController.deleteProduct)