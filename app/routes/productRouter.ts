import { Router } from "express";
import ProductController from "../controllers/productController";

export const productRouter: Router= Router();

productRouter.post("/", ProductController.createNewProduct);
productRouter.get("/", ProductController.getAllProducts);
productRouter.put("/:id", ProductController.updateProduct)
productRouter.patch("/:id", ProductController.updateProductStock)
productRouter.delete("/:id", ProductController.deleteProduct)



