import dotenv from "dotenv";
dotenv.config();

export const variableEntorno = {
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  CREDENCIALES_DB: process.env.CREDENCIALES_DB,
};
