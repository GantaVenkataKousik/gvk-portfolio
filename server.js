import express from "express";
import colors from "colors";
import connectDB from './config/db.js';
import morgan from "morgan";
import cors from "cors";
import portfolioRoute from './routes/portfolioRoute.js';
const PORT = 9002

const MODE = "development"

//intailising expresss
const app = express();

//middlewares
// Enables Cross-Origin Resource Sharing for your server.
app.use(cors());
// Parses JSON data in incoming requests.
app.use(express.json());
// Logs HTTP requests in a developer-friendly format.
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

//database Config
connectDB();

app.use("/",portfolioRoute); 


app.listen(PORT,() => {
    console.log(`Server running on ${MODE} Mode on the Port ${PORT}`.bgBlue);
})
