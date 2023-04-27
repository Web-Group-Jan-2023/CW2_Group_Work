

const express = require("express")

const allowed_ips = [
    "127.0.0.1",
    "http://localhost:4000/",
    "*"
]

const api = express.Router()


// api.use(function (req,res,next){
//     const ip = req.ip.split(":")[req.ip.split(":").length-1]
//     const allowed = allowed_ips.includes(ip)
//     allowed ? next() : res.status(401).send("Not authorized")
// })

api.get("/lessons",(req,res)=>{
    const data = [
        {'topic': 'math', 'location': 'Hendon', 'price':100},
        {'topic': 'math', 'location': 'Colindale', 'price' : 80},
        {'topic': 'math', 'location': 'Brent Cross', 'price' : 90},
        {'topic': 'math', 'location': 'Golders Green', 'price' : 120}
    ]
    // res.send("Welcome user -> "+user_id)

    res.setHeader("Access-Control-Allow-Origin","*")
    // res.writeHead(200,{'Content-Type':'text/plain'})
    res.send(JSON.stringify(data))
})

api.get("/user",(req,res)=>{
    const data = {'email':'user@email.com','password':'mypassword'}
    // res.send("Welcome user -> "+user_id)

    res.setHeader("Access-Control-Allow-Origin","*")

    // res.writeHead(200,{'Content-Type':'text/plain'})
    res.send(JSON.stringify([data]))
})


module.exports = api