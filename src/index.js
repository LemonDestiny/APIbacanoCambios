import Express from "express";
import OpinionesRouter from "./routes/opiniones.js";
import obtenerCotizacion from "./routes/cotizacion.js";
import { sequelize, Config } from "./db.js";

const Server = Express();
Server.use(Express.json());
Server.use("/opiniones", OpinionesRouter);
Server.use("/cotizacion", obtenerCotizacion);
Server.listen(8080, async () => {
  console.log("servidor funcionando");
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
