import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Настройка CORS для разрешения запросов с http://localhost:5173
app.use(
  cors({
    origin: 'http://localhost:5173', // Разрешаем запросы только с этого адреса
    methods: ['POST'], // Разрешаем только POST-запросы
    allowedHeaders: ['Content-Type'], // Разрешаем заголовок Content-Type
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