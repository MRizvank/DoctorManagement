const express=require('express')
const doctorRoutes=express.Router()
const {DoctorModel}=require('../models/doctorModel')

doctorRoutes.get('/',async(req,res)=>{
    const doctorList=await DoctorModel.find()
    res.send(doctorList)
    
})
doctorRoutes.get('/:id',async(req,res)=>{
    const id=req.params.id
    const doctor=await DoctorModel.findOne({_id:id})
    res.send(doctor)
    
})

doctorRoutes.post('/',async(req,res)=>{
    const {name,speciality,position,qualification,details,image}=req.body
    try {
        const payload= new DoctorModel({name,speciality,position,qualification,details,image})
        await payload.save()
        res.send('Doctor registerd successfully')
    } catch (error) {
        res.send({"error":error.message});
        
    }
    
})
doctorRoutes.patch('/:id',async(req,res)=>{
    const _id=req.params.id
    try {
        const user= await DoctorModel.findByIdAndUpdate(_id,req.body)
        res.send('updated successfully')
    } catch (error) {
        res.send({"error":error.message})
    }
})

doctorRoutes.delete('/:id',async(req,res)=>{
    const id=req.params.id
    try {
        await DoctorModel.findByIdAndDelete(id)
        res.send('doctor records deleted successfullly')
    } catch (error) {
        res.send({"error":error.message})
    }
    
    
})



module.exports=doctorRoutes