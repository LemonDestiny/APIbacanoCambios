import { Sequelize } from "sequelize";
import { variableEntorno } from "./config/env.js";
import { definirModeloConfig } from "./models/config.js";

export const sequelize = new Sequelize(variableEntorno.CREDENCIALES_DB, {
  dialectOptions: { ssl: { rejectUnauthorized: false } },
});

export const Config = definirModeloConfig(sequelize);
