import { container } from "tsyringe";
import ProductRepository from "../repositories/productRepository";
import ProductService from "../services/productService";
import UserRepository from "../repositories/userRepository";
import UserService from "../services/userService";
import CartRepository from "../repositories/cartRepository";
import CartService from "../services/cartService";
import ProductCartRepository from "../repositories/productCartRepository";
import ProductCartService from "../services/productCartService";

container.registerSingleton<ProductRepository>("ProductRepository", ProductRepository);
container.registerSingleton<ProductService>("ProductService", ProductService);

container.registerSingleton<UserRepository>("UserRepository", UserRepository);
container.registerSingleton<UserService>("UserService", UserService);

container.registerSingleton<CartRepository>("CartRepository", CartRepository);
container.registerSingleton<CartService>("CartService", CartService);

container.registerSingleton<ProductCartRepository>("ProductCartRepository", ProductCartRepository);
container.registerSingleton<ProductCartService>("ProductCartService", ProductCartService);




