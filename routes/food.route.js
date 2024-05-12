import express from "express";
import {
    foodIndex,
    foodCreate,
    foodUpdate,
    foodDelete,
} from "../controllers/food.controller.js";
const router=express.Router();
//Read
router.get("/",foodIndex);
//Create
router.post("/",foodCreate);
//Update
router.put("/:id",foodUpdate);
//Delete
router.delete("/:id",foodDelete);
export default router;