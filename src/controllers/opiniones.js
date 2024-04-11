const comentarios = [
  {
    nombre: "ignacio lestrada",
    comentario: "muy buena pagina para intercambiar dinero",
  },
  {
    nombre: "ricarda lestrada",
    comentario: "no me cagaron, muy buen servicio",
  },
  {
    nombre: "Guillermo Franchella",
    comentario: "a comerlaaaaaaa",
  },
];

export const obtenerOpiniones = (req, res) => {
  try {
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
