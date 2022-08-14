import express from 'express';
import {
    registrar,
    autenticar,
    confirmar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil,
} from '../controllers/usuarioControllers.js'
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

// Autenticacion, Registro y Confirmacion de Usuarios
router.post("/", registrar); // Crea un nuevo usuario 
router.post("/login", autenticar); // Autenticacion de usuario 
router.get("/confirmar/:token", confirmar); // Confirmacion tokend de usuario 
router.post("/olvide-password", olvidePassword); // recuperar contraseña

// Comprobar token y generar nueva contraseña
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

router.get('/perfil', checkAuth, perfil);

export default router;