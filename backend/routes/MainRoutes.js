import express from "express";
import { signIn } from "../controllers/UserController";


const router = express.Router();

router.post("/SignIn", signIn);

export default router;