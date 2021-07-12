import Router from "express";
import ProductController from './CRUD/Product/ProductController.js';
import MainController from './CRUD/Main/MainController.js'
const router = new Router();

// CatalogPage
router.post('/catalog', ProductController.create)
router.get('/catalog', ProductController.getAll)
router.get('/catalog/:id', ProductController.getOne)
router.put('/catalog/:id', ProductController.update)
router.delete('/catalog/:id', ProductController.delete)

// MainPage
router.post('/main', MainController.create)
router.get('/main', MainController.getAll)
router.get('/main/:id', MainController.getOne)
router.put('/main/:id', MainController.update)
router.delete('/main/:id', MainController.delete)

export default router;