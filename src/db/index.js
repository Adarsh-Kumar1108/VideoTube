import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async()=>{
    try {
      const mongodbConnected =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log(`DB connected successfully ! DB host: ${mongodbConnected.connection.host}`);
    } catch (error) {
        console.error("ERROR mongodb connection filed ",error);
        process.exit(1);
    }

}

export default ConnectDB