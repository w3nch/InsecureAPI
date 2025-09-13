import express from 'express';
import jwt from 'jsonwebtoken';
import { transactions } from '../data.js';

const router = express.Router();

router.post('/', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token' });

    let decoded;
    try { decoded = jwt.verify(token, process.env.JWT_SECRET); } 
    catch(e){ return res.status(401).json({ message: 'Invalid token' }); }

    const { amount, userId } = req.body;
    const id = transactions.length + 1;
    const tx = { id, amount, userId };
    transactions.push(tx);

    res.json(tx);
});

export default router;
