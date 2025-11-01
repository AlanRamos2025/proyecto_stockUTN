import express from "express";
import cors from "cors";
import sequelize from "./config/db.mjs";
import User from "./models/User.mjs";
import Product from "./models/Product.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import productRoutes from "./routes/productRoutes.mjs";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Sincronizar DB
await sequelize.sync({ alter: true });

const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Servidor backend en http://localhost:${PORT}`));
