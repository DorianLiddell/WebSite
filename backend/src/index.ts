import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:5173', 
    methods: ['POST'], 
    allowedHeaders: ['Content-Type'], 
  })
);

app.use(express.json());

app.post('/api/submit', (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  console.log('Form submission:', { name, email, message });
  res.status(200).json({ message: `Спасибо за ваш интерес, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
