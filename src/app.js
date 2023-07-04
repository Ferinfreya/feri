const express=require("express")
const app=express();
const AuthRoute=require("./routes/auth")

app.use(express.json());

app.use("/",AuthRoute)



app.listen(8000,()=>{
    console.log("server.listening at 8000");

    

})

