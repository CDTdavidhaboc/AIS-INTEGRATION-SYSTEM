import express from "express";
import * as StudentController from "../controller/studentcontroller.js";

const router = express.Router();

router.get("/profile/:id", StudentController.getStudentProfile);

export default router;