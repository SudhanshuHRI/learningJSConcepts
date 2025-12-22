import joi from "joi";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();


app.use(express.json());
app.use(cors());
app.use(cookieParser());





app.get("/getUser",(req,res)=>{

 const validateReq = joi.object({
    name:joi.string().required(),
    email:joi.string.required()
 })


 const {error}  = validateReq.validate(req.body)


 

}
)

const port = 5000;

app.listen(port,()=>{console.log("port is running on:",port)})
