import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv'
import router from './routes/routes.js';
import bodyParser from "body-parser"
import cors from 'cors'
import path from 'path';
import { dirname } from 'path';




dotenv.config();

const app = express();

const PORT = 8000;
app.use(bodyParser.json());
app.use(cors(
    {
        origin:["https://deploy-mern-1whq.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));
app.use('/',router);

app.use(express.json())


app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"front-end","dist")));
    res.sendFile(path.resolve(__dirname,"front-end","dist","index.html"));
})

app.listen(PORT,()=>console.log("server is running.."));

const username = process.env.db_username
const password = process.env.db_password

connection(username,password);


