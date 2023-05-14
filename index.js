const express=require('express')
require('dotenv').config()
const cors=require('cors')
const doctorRoutes=require('./routes/doctor.routes')
const patientRoutes=require('./routes/patient.routes')
const {connectDB}=require('./config/connection')
const app =express()
const PORT=process.env.PORT||3000

app.use(express.json())
app.use(cors())
app.use('/doctors',doctorRoutes)
app.use('/patient',patientRoutes)

app.get('/',(req,res)=>{
    res.send('welcome')
})
app.get('/:url',(req,res)=>{
    res.status(404).send('404 not found!!!!')
})
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at http://localhost:${PORT}`)
    })
})