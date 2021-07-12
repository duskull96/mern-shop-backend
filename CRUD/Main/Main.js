import mongoose  from "mongoose";

const Main = new mongoose.Schema( {
    id: {
        type: Number,
        required: true
    },
    alt: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: false
    }
})

export default mongoose.model('Main', Main)