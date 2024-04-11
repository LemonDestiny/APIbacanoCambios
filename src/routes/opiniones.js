import { Router } from "express";
import { obtenerOpiniones } from "../controllers/opiniones.js";

const router = Router();

router.get("/opiniones", obtenerOpiniones);

export default router;
