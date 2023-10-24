import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import router from './routes/chatRoutes.js'


const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

app.use('/',router)

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
