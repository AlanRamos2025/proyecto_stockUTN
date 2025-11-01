import Product from "../models/Product.mjs";

export const getAll = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch {
    res.status(400).json({ error: "Error al crear producto" });
  }
};

export const update = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "No encontrado" });
    await product.update(req.body);
    res.json(product);
  } catch {
    res.status(400).json({ error: "Error al actualizar producto" });
  }
};