import { DataTypes } from "sequelize";
import sequelize from "../config/db.mjs";

const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  price: { type: DataTypes.FLOAT, allowNull: false }
});

export default Product;