import { DataTypes } from "sequelize";

export const definirModeloConfig = (sequelize) => {
  const Config = sequelize.define(
    "Config",
    {
      key: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: "Config" }
  );
  return Config;
};
