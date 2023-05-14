const mongoose=require('mongoose')

const patientSchema=mongoose.Schema({
    dr_name:{type:String,required:true},
    speciality:{type:String,required:true},
    patient_name:{type:String,required:true},
    patient_age:{type:Number,required:true},
    slot:{type:String},
    mobile_no:{type:Number,required:true},
    payment_method:{type:String,required:true}
},{versionKey:false})

const PatientModel=mongoose.model('patient',patientSchema)

module.exports={PatientModel}