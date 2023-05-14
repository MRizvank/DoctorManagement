const express=require('express')
const patientRoutes=express.Router()
const {PatientModel}=require('../models/patiantModel')


patientRoutes.post('/',async(req,res)=>{
    const {dr_name,speciality,patient_name,patient_age,slot,mobile_no,payment_method}=req.body
    try {
        const payload= new PatientModel({dr_name,speciality,patient_name,patient_age,slot,mobile_no,payment_method})
        await payload.save()
        res.send('Patiant details  registerd successfully')
    } catch (error) {
        res.send({"error":error.message});
        
    }
    
})

module.exports=patientRoutes