import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    href: {
        type: String,
    },
    imageSrc: {
        type: String,
    },
    imageAlt: {
        type: String,
    },
    price: {
        type: String,
    },
    color: {
        type: String,
    },
});

const Product =
    mongoose.models.products || mongoose.model("products", productSchema);

export default Product;
