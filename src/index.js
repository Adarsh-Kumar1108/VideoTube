import dotenv from 'dotenv'
import ConnectDB from './db/index.js'

dotenv.config({
    path:'./env'
});


ConnectDB();







// const app = express();

// ;(async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
//        app.on("error",(err)=>{
//         console.log("ERR", err);
//         throw new Error("Db connection failed");
//        })

//        app.listen(process.env.PORT||800 , ()=>{
//         console.log(`app is listening at ${PORT}`);
//        })
        
//     } catch (error) {
//         console.log("ERROR :", error);
//     }

// })()