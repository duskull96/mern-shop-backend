import mongoose  from "mongoose";

const Product = new mongoose.Schema( {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
})

export default mongoose.model('Product', Product)