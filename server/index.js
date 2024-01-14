import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import todoRouter from './src/routers/todoRouter.js';
import dbConnection from './src/config/dbConnection.js';


const app = express();
const PORT = process.env.PORT || 3000;
// mongoose.Promise = Promise;
// mongoose.connect(process.env.MONGODB_URL || '')
//   .then(() => console.log("MongoDB connection established"))
//   .catch((error) => console.log(error.message))
// mongoose.connection.on('error', () => {
//   console.log('MongoDB connection error. Please make sure MongoDB is running.');
//   process.exit();
// });
app.use(express.json());
app.use("/api", todoRouter);


app.listen(PORT || 3000, () => {
  console.log(`Server is listening on port ${PORT || 3000}`);
});