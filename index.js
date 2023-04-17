const express=require('express')
require('dotenv').config()
const cors=require('cors')
const doctorRoutes=require('./routes/doctor.routes')
const {connectDB}=require('./config/connection')
const app =express()
const PORT=process.env.PORT||3000

app.use(express.json())
app.use(cors())
app.use('/doctors',doctorRoutes)

app.get('/',(req,res)=>{
    res.send('welcome')
})

// app.listen(PORT,async()=>{
//     try {
//         console.log(`server is running at http://localhost:${PORT}`)
//     } catch (error) {
//         console.log('cannot connect to db')
//         console.log(error.message)
//     }
   
// })
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at http://localhost:${PORT}`)
    })
})