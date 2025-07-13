import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const prismaClient = new PrismaClient();

app.get('/', async (req, res) => {
    const data = await prismaClient.user.findMany();
    res.json({
        data
    });
});

app.post('/', async (req, res) => {
    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    })
    res.send('Post request received, user created!');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});