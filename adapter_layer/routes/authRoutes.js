// authRoutes.js
import express from 'express';
import * as AuthController from '../controllers/authController.js';

const authRoutes = express.Router();

authRoutes.post('/new', AuthController.registerStudent); // ✅ Must be present
authRoutes.get("/profile/:id", AuthController.getStudentProfile);
export default authRoutes;