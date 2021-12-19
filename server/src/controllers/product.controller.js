const express = require("express");
const router = express.Router();

const { nanoid } = require("nanoid");
const Product = require("../models/product.model");

router.get("", async(req, res) => {
    try {
        const product = await Product.find().lean().exec();
        res.status(200).send({ product });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.post("", async(req, res) => {
    try {
        const product = await Product.create({
            ...req.body,
            productId: nanoid(8),
        });

        return res.status(201).send({ product });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

module.exports = router;