require("dotenv").config();

const express = require('express');
const app = express();

const cors = require('cors')
//adding  mongoose
require("./db/conn");
//importing router from Routes folder
const router = require('./Routes/router');

const port = process.env.PORT || 6002;

app.use(cors({
    origin: "https://myapp-2i2n.vercel.app", // Allow only your frontend domain
    credentials: true
}));
// app.use(cors({
//     origin:["myapp-3o2n.vercel.app"],
//     methods:["POST","GET"],
//     credentials:true
// }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log("Server Running...")
})
