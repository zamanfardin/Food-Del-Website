import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/route.js"
import multer from "multer"
import UserRouter from "./routes/userrou.js"
import "dotenv/config"


//app config

const app=express()
const port =4000

//middlewear

app.use(express.json());
app.use(cors());


//db connection
connectDB();


//API

app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));
app.use("/api/user",UserRouter);


app.get("/",(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
    
})

//mongodb+srv://zamanfardin5836:<db_password>@cluster0.8ithc.mongodb.net/?
