import express from 'express';
import { addTodo, getAllTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.post('/todo', addTodo)
router.get('/todos', getAllTodo)
router.put('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)


export default router;