import express from 'express';
import cors from 'cors'; // Import CORS middleware
import connectDB from './db-connection';
import authRoutes from './routes/auth.route';
import bookRouter from './routes/book.route';
import mechanismRouter from './routes/mechanism.route';

const app = express();

// Gunakan middleware CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // Ganti dengan domain frontend Anda
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metode HTTP yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
  })
);

// Middleware untuk parsing JSON
app.use(express.json());

// Koneksi ke database
connectDB();

// Endpoint utama
app.get("/", (_, response) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formattedDate = new Date().toLocaleDateString('en-US', options);

  response.status(200).send({
    status: "yeayyy success😎",
    message: "Welcome to API kelompok P1😃",
    date: formattedDate,
  });
});

// Rute lain
app.use("/book", bookRouter);
app.use('/auth', authRoutes);
app.use('/mechanism', mechanismRouter);

// Jalankan server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express is running on Port ${PORT}`);
});
