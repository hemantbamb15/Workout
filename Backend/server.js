 require('dotenv').config();
 
 const express=require('express');
 const workoutRoutes=require('./routes/workouts');
 const mongoose=require('mongoose');
 mongoose.set('strictQuery', false);

 //express app
 const app=express();

 app.use(express.json());
 //middleware
 app.use((req,res,next)=>{   
    console.log(req.path,req.method);
    next();
})

//routes
app.use('/api/workouts',workoutRoutes)

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('connected to db and listening for requests on port',process.env.PORT);
            // console.log("Hello World");
        })
    })  
    .catch((error)=>{
        console.log(error);
    });


//listen for requests


