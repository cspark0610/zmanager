import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import morgan from 'morgan';
import dotenv from 'dotenv';
import zombieRoutes from './routes/zombieRoutes.js'
import seedDB from './seed.js'

const app = express();
dotenv.config();
const router = express.Router();

app.use(bodyparser.json({limit :'30mb', extended: true}));
app.use(bodyparser.urlencoded({limit :'30mb', extended: true}));
//el use CORS SIEMPRE VA PRIMERO ANTES DE APP.USE ROUTES!!!
app.use(cors());
app.use(morgan('tiny'));

app.use('/api/zombie',zombieRoutes);

const CONNECTION_URL = 'mongodb+srv://carlos:plataforma5@cluster0.3azg9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 6000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    seedDB();
    app.listen(PORT , ()=> console.log(`server running on port ${PORT}`))
}).catch((err)=>{
    console.log(err);
})
mongoose.set('useFindAndModify', false)



