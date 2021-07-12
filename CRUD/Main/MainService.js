import fileService from "../../fileService.js";
import Main from "./Main.js";

class MainService {
    async create(block, picture) {
        try {
            const fileName = fileService.saveFile(picture)
            const createBlock = await Main.create({ ...block, picture: fileName })
            return createBlock
        } catch (e) {
            throw new Error({ message: 'Failled to create block' })
        }
    }
    async getAll() {
        try {
            const blocks = await Main.find().sort({ "id": 1 });
            return blocks
        } catch (e) {
            throw new Error({ message: 'Failled to get all blocks' })
        }
    }
    async getOne(id) {
        if (!id) {
            throw new Error({ message: 'Failled to get one block' })
        }
        const block = await Main.findOne({ 'id': id })
        return block
    }
    async update(id,block, picture) {
        if (!block || !picture) {
            throw new Error({ message: 'Failled to update one block' })
        }
        const fileName = fileService.saveFile(picture)
        const newMain = await Main.findOneAndUpdate(
            { "id": id },
            { ...block, picture: fileName },
            { new: true })
        return newMain
    }
    async delete(id) {
        if (!id) {
            throw new Error({ message: 'Failled to delete one block' })
        }
        const block = await Main.findOneAndDelete({ "id": id })
        return block
    }
}

export default new MainService();