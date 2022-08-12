import express from 'express';
import { registrar } from '../controllers/usuarioControllers.js'

const router = express.Router();

// Autenticacion, Registro y Confirmacion de Usuarios
router.post("/", registrar); // Crea un nuevo usuario 


export default router;