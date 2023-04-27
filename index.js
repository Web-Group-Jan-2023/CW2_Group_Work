const express = require("express")
const path = require("path")
const cors = require("cors")
const apiRouter = require("./routes/api_router")
const app = express()
const port = 4000
const staticPath = path.join(__dirname,"static")


app.use(cors())

app.use(express.static(staticPath))

app.use(apiRouter)
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})