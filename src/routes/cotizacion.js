import { Router } from "express";
import {
  obtenerCotizacion,
  actualizarCotizacion,
} from "../controllers/cotizacion.js";

const router = Router();

router.get("/cotizacion", obtenerCotizacion);
router.post("/cotizacion", actualizarCotizacion);

export default router;
