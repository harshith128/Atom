const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: { type: String },
    productId: { type: String, unique: true },
    description: { type: String },
    creator: { type: String },
    coverImage: { type: String },
    category: { type: String },
    subcategory: [{ type: String }],
    tags: [{ type: String }],
    location: { type: String }
}, {
    versionKey: false,
    timestamps: true
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;