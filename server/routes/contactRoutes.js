import { Router } from "express";
import { contactMe } from "../controller/contactController.js";

const router = Router();

router.route("/").post(contactMe);

export default router