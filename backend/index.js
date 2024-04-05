const express=require('express');
const cors=require('cors')
const connectTODB=require('./connecToDb');
connectTODB();
const app=express();
app.use(express.json());
app.use(cors());
const port=3000;
app.use("/api/reg",require("./Routes/reg"))
app.listen(port,()=>{
    console.log("App is running on port ",port);
})