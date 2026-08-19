import express from 'express';
import { CreateProduct, getProduct, updateProduct, deleteProduct} from "../controllers/productController.js";

const router = express.Router();

router.post('/add', CreateProduct);
router.get('/', getProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;