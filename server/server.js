import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from './config/db.js';
import morgan from "morgan";
import cors from "cors";
import portfolioRoute from './routes/portfolioRoute.js';
import bodyParser from "body-parser";


dotenv.config();





//intailising expresss
const app = express();

//middlewares
// Enables Cross-Origin Resource Sharing for your server.
app.use(cors(
    {
        origin: ["https://gvk-portfolio-interface.vercel.app/"],
        methods: ["GET", "POST"],
        credentials: true
    }
));
// Parses JSON data in incoming requests.
app.use(express.json());
// Logs HTTP requests in a developer-friendly format.
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));



//database Config

connectDB();



app.use("/",portfolioRoute); 

// app.use("/admin",routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.MODE} Mode on the Port ${process.env.PORT}`.bgBlue);
})
