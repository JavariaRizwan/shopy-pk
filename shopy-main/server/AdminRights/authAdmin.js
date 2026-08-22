const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const Category = require("../schemas/category-schema");
const Product = require("../schemas/products-schema");
const Brand = require("../schemas/brand-schema");



const addProduct = async (req, res) => {
  const {
    p_name,
    p_brand,
    p_category,
    p_description,
    size,
    color,
    price,
    p_quantity,
    tags
  } = req.body;

  const p_image_1 = req.files?.p_image_1?.[0]?.path || "";
  const p_image_2 = req.files?.p_image_2?.[0]?.path || "";

  try {
    const newProduct = new Product({
      p_name,
      p_brand,
      p_category,
      p_description,
      tags: tags.split(',').map(tag => tag.trim()), // convert comma-separated string to array
      p_image_1,
      p_image_2,
      size,
      color,
      price,
      p_quantity,
    });

    await newProduct.save();
    res.status(201).send("Product has been added successfully!");
  } catch (error) {
    res.status(404).send("Failed to add Product " + error.message);
  }
};

const addCategory = async (req, res) => {
  const {c_name}= req.body
  
    try {
    const newCategory=new Category({
        c_name
    });
    await newCategory.save();

    res.status(201).send("Category has been added!");


  } catch (error) {
    res.status(404).send("Failed to add Category " + error.message);
  }
};

const addBrand = async (req, res) => {
    const {b_name}=req.body
    try {

    const newbrand = new Brand({
        b_name
    });
  await newbrand.save();
  res.status(201).send("Brand has been added!")


} catch (error) {
    res.status(404).send("Failed to add Brand " + error.message);
  }
};




module.exports = { addCategory, addProduct, addBrand };
