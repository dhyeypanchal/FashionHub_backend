import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    // console.log(process.env.JWT_SECRET);
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;