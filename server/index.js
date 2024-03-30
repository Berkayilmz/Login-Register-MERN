const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const { PORT, MongoDBURI } = require('./config');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(MongoDBURI);

app.post('/register',(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log("Server listening on 4000")
});