import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT =  8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());



app.listen(PORT, ()=>console.log(`now run on port ${PORT}`));
