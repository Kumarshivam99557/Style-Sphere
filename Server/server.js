const express = require('express');
const dotenv = require('dotenv');
const Connection = require("./Models/mongoConnects");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
dotenv.config({path:"./Config/config.env"});
 
const PORT = process.env.PORT || 5000

app.use(cors({
        origin: "http://localhost:5173/",
        method: ["GET","POST","DELETE","PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    }));

    app.use(cookieParser());
    app.use(express.json());


Connection();
app.listen(PORT,(req,res)=>{
    console.log(`your sever is listening on port no ${PORT}`)
})