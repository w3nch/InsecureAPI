import express from 'express';
import jwt from 'jsonwebtoken';
import { users } from '../data.js';

const router = express.Router();

router.get('/:id', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token' });

    let decoded;
    try { decoded = jwt.verify(token, process.env.JWT_SECRET); } 
    catch(e){ return res.status(401).json({ message: 'Invalid token' }); }

    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user); // BOLA & excessive data exposure
});

export default router;
