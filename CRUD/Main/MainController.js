import MainService from "./MainService.js";

class MainController {
    async create(req, res) {
        try {
            const block = await MainService.create(req.body, req.files.picture)
            res.json(block)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAll(req, res) {
        try {
            const blocks = await MainService.getAll();
            return res.json(blocks)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            const block = await MainService.getOne(req.params.id)
            return res.json(block)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res) {
        try {
            const block = await MainService.update(req.params.id, req.body, req.files.picture)
            return res.json(block)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const block = await MainService.delete(req.params.id)
            return res.json(block)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new MainController();