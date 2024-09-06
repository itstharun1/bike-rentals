import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv'
import router from './routes/routes.js';
import bodyParser from "body-parser"
import cors from 'cors'

const corsConfig={
    origin:'*',
    Credential:true,
    methods:['GET','POST','PUT','DELETE'],
}

dotenv.config();

const app = express();



// const PORT = 8000;
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors(corsConfig));
app.options("",cors(corsConfig))

// app.get("/",()=>{
//     res.redirect("/")
// })
app.use('/',router);

app.use(express.json())




app.listen(port,()=>console.log("server is running.."));

const username = process.env.db_username
const password = process.env.db_password

connection(username,password);


