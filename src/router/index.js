import express from "express";
import ProductController from "../controller/product.controller.js";


const router = express.Router();


const product = "/product";
router.post(`${product}/insert`, ProductController.insert);
router.get(`${product}/getAll`, ProductController.getAll);

export default router;
