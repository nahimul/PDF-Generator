import mongoose from "mongoose";
import { DB_URL } from "../configs/index.js";

const DB_NAME="PDFDB";

const connectToDB = async () => {
  try {
    if (DB_URL) {
     const connectionInstance=  await mongoose.connect(`${DB_URL}/${DB_NAME}`);
      console.log(
        `MOngoDB connected!! DB HOST: ${connectionInstance.connection.host} ${connectionInstance.connection.port}`
      );
    }
  } catch (error) {
    console.error("DB connection error: ", error);
  }
};

export default connectToDB;
