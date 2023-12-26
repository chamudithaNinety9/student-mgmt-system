import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from 'http';
dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
import teacherRoutes from './routes/TeacherRoutes.js';
app.use(cors());


app.use(bodyParser.json());

app.use('/teacher', teacherRoutes);


const URL = process.env.CONNECTION_URL;

mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log('connected')
}).catch(err => console.log(err))

server.listen(PORT ,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
});