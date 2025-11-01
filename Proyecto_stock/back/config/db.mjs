import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./back/database.sqlite"
});

try {
  await sequelize.authenticate();
  console.log(" Conectado a la base de datos SQLite");
} catch (error) {
  console.error(" Error de conexión:", error);
}

export default sequelize;