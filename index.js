const http=require('http')
const express=require('express')
const {Server}=require('socket.io')
const path=require('path')

const app=express()
const server=http.createServer(app)
const io=new Server(server)

//socket.io requests

io.on('connection',(socket)=>{

    console.log("A new user has been connected",socket.id)
})

//http requests
app.get('/',(req,res)=>{
    // console.log(path.resolve('chat-app/public/index.html').replace(/\\/g,'/'))
    
    let p=path.resolve('./public/index.html').replace(/\\/g,'/')
    // console.log("PATH : "+p)
    return res.sendFile(p)
})

app.listen(3000)


// let p=path.resolve('./public/index.html').replace(/\\/g,'/')

// console.log(p)
