import fileService from "../../fileService.js";
import Product from "./Product.js";

class ProductService {
    async create(product, picture) {
        try {
            const fileName = fileService.saveFile(picture)
            const createProduct = await Product.create({ ...product, picture: fileName })
            return createProduct
        } catch (e) {
            throw new Error({ message: 'Failled to create product' })
        }
    }
    async getAll() {
        try {
            const products = await Product.find().sort({ "id": 1 });
            return products
        } catch (e) {
            throw new Error({ message: 'Failled to get all products' })
        }
    }
    async getOne(id) {
        if (!id) {
            throw new Error({ message: 'Failled to get one product' })
        }
        const product = await Product.findOne({ 'id': id })
        return product
    }
    async update(id,product, picture) {
        if (!product || !picture) {
            throw new Error({ message: 'Failled to update one product' })
        }
        const fileName = fileService.saveFile(picture)
        const newProduct = await Product.findOneAndUpdate({ "id": id }, {...product, picture: fileName}, { new: true })
        return newProduct
    }
    async delete(id) {
        if (!id) {
            throw new Error({ message: 'Failled to delete one product' })
        }
        const product = await Product.findOneAndDelete({ "id": id })
        return product
    }
}

export default new ProductService();