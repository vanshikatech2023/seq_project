import express from "express";
import bodyParser from "body-parser";
import {signin, signup} from '../controller/user.controller.js';
import { body } from "express-validator";

const router = express.Router();

router.post("/signin",signin);
router.post("/signup",body("name","Wrong name.....").notEmpty().isAlpha(),signup);

export default router;
