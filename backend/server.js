import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv'
import router from './routes/routes.js';



import cors from 'cors'
const app = express();

import bodyParser from "body-parser"
app.use(bodyParser.json());

app.use(cors());
app.use('/',router);

app.use(express.json())
dotenv.config();


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}



const PORT = process.env.PORT || 8000;



app.listen(PORT,()=>console.log("server is running.."));

const username = process.env.db_username
const password = process.env.db_password
const URL =process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.nmdmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
connection(URL);


