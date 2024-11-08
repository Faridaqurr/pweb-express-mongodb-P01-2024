import express from 'express';
import connectDB from './db-connection';
import authRoutes from './routes/auth.route';
import bookrouter from './routes/book.route';
import mechanismRouter from './routes/mechanism.route';

const app = express();

app.use(express.json());
connectDB();

app.get("/", (_, response) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const formattedDate = new Date().toLocaleDateString('en-US', options);

  response.status(200).send({
    status: "success",
    message: "Halo mas asisten yang baik hati",
    date: formattedDate,
  });
});

app.use("/book", bookrouter);
app.use('/auth', authRoutes);
app.use('/mechanism', mechanismRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express is running on Port ${PORT}`);
});
