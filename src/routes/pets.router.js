import express from 'express';
import { getAllPets, getPetById } from '../controllers/data.controller.js';

const router = express.Router();

router.get('/', getAllPets);
router.get('/:id', getPetById);

export default router;
