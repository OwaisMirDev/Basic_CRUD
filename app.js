const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
const port=3000;
app.use(express.json());
app.use(cors());

const userRoutes=require('./routes/user');
app.use('/users',userRoutes);


app.get("/",(req, res)=>{
    res.status(200).json({
        message:"Server running"
    })
})


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})


mongoose.connect("mongodb+srv://ovais123:ovais123@cluster0.rfpf2.mongodb.net/project0?retryWrites=true&w=majority&appName=Cluster0").then(()=>{console.log("DB Connected")});