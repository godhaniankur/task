const express = require("express")
const connect = require('./db/dbcon')
const path =require("path")
const routing = require("./routers/router")
const cors = require('cors')
const fileUpload = require("express-fileupload")
const app = express();







app.use(
	cors({
		origin:"https://task-woad-delta.vercel.app",
		credentials:true,
		
	})
)

app.use(express.json())
connect.dbconnection()

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp/",
		
	})
)


app.get("/",(req,res)=>{
    res.send("HELLO DEMO CLASS.....")
})

app.use("/api",routing)

// const _dirname = path.resolve()

// app.use(express.static(path.join(_dirname,"/dist")))

app.listen(1527,()=>{
    console.log("server starting port number 1527")
})
