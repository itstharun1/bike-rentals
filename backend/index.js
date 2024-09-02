import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv'
import router from './routes/routes.js';
import bodyParser from "body-parser"
import cors from 'cors'



dotenv.config();

const app = express();

const PORT = 8000;
app.use(bodyParser.json());
app.use(cors());

app.use('/',router);

app.use(express.json())




app.listen(PORT,()=>console.log("server is running.."));

const username = process.env.db_username
const password = process.env.db_password

connection(username,password);


