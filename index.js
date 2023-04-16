const express=require('express')
require('dotenv').config()
const cors=require('cors')
const doctorRoutes=require('./routes/doctor.routes')
const {connection}=require('./config/connection')
const app =express()
const port=process.env.PORT||3000

app.use(express.json())
app.use(cors())
app.use('/doctors',doctorRoutes)

app.get('/',(req,res)=>{
    res.send('welcome')
})

app.listen(port,async()=>{
    try {
        await connection 
        console.log('connected to db')
        console.log(`server is running at http://localhost:${port}`)
    } catch (error) {
        console.log('cannot connect to db')
        console.log(error.message)
    }
   
})