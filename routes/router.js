import express from "express";
import { main, test } from "../controller/controller.js";

const router = express.Router();

// 부모 경로: /products
router.get("/", main);
router.post("/test", test);

export default router;
