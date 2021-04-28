
import { getZombies, updateZombie } from '../controllers/zombie.js'
import express from 'express';

const router = express.Router();

router.get('/', getZombies)
router.patch('/:id', updateZombie)

export default router;