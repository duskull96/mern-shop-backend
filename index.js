import express from 'express'
import mongoose from 'mongoose';
import router from './router.js'
import corsMiddleware from './cors.middleware.js';
import fileUpload from 'express-fileupload';


const PORT = 3001;
const DB_URL = 'mongodb+srv://nimda:nimda@cluster0.tmq9q.mongodb.net/Flora-shop?retryWrites=true&w=majority'
const app = express();

app.use(corsMiddleware)
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => console.log('Server started'))
    } catch (e) {
        console.log(e);
    }
}

startApp();
