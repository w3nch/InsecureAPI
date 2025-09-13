import express from 'express';
import jwt from 'jsonwebtoken';
import { tasks } from '../data.js';

const router = express.Router();

router.get('/:id', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token' });

    let decoded;
    try { decoded = jwt.verify(token, process.env.JWT_SECRET); } 
    catch(e){ return res.status(401).json({ message: 'Invalid token' }); }

    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.json(task); // IDOR
});

router.post('/', (req, res) => {
    const { title, description, userId, isApproved } = req.body;
    const id = tasks.length + 1;
    const task = { id, title, description, userId, isApproved };
    tasks.push(task);
    res.json(task);
});

router.get('/', (req, res) => {
    const filter = req.query.filter;
    const results = tasks.filter(t => t.title.includes(filter || '')); // injection demo
    res.json(results);
});

export default router;
