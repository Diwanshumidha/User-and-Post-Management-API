const express = require('express')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cookieParser())
app.use('/api', userRouter)
app.use('/api', postRouter)



app.get('/',(req,res) =>{
    res.send('hiii')
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})