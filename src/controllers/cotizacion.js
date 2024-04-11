import { Config } from "../db.js";

export const obtenerCotizacion = async (req, res) => {
  try {
    const resultado = await Config.findOne({ where: { key: "cotizacion" } });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const actualizarCotizacion = async (req, res) => {
  try {
    const nuevoValor = req.body.valor;
    console.log(nuevoValor);
    const resultado = await Config.update(
      { value: nuevoValor },
      { where: { key: "cotizacion" } }
    );
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
