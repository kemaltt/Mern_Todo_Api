import mongoose from "mongoose";
import 'dotenv/config'


const dbConnection = mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connection established"))
  .catch((error) => console.log(error.message));

export default dbConnection;