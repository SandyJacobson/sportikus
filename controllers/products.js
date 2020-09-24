const Product = require('../models/product')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        if (product) {
            return res.json(product)
        }
        res.status(404).json({ message: 'Product not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await new Product(req.body)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndUpdate(id, req.body, { new: true }, (error, product) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!product) {
            return res.status(404).json({ message: 'Product not found!' })
        }
        res.status(200).json(product)
    })
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Product deleted")
        }
        throw new Error("Product not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}