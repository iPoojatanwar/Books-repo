
import express from "express";
import { getbook } from "../Controller/bookController.js"; 

const router = express.Router();

router.get("/", getbook);

export default router;
