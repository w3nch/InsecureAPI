import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import tasksRoutes from './routes/tasks.js';
import transactionsRoutes from './routes/transactions.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/login', authRoutes);
app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);
app.use('/transactions', transactionsRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`InsecureAPI running on port ${process.env.PORT || 3000}`);
});
