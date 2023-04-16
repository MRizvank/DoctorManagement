const mongoose=require('mongoose')

const doctorSchema=mongoose.Schema({
    name:{type:String,required:true},
    speciality:{type:String,required:true},
    position:{type:String},
    qualification:{type:String,required:true},
    details:{type:String},
    image:{type:String}
},{versionKey:false})

const DoctorModel=mongoose.model('doctor',doctorSchema)

module.exports={DoctorModel}


// {
//     "id": 1,
//     "name": "Dr. Ramdas K.R",
//     "speciality" : "Anaesthesiology",
//     "position" : "Senior Consultant",
//     "qualification" : "MBBS,DA,MD,DNB",
//     "details" : "Dr. Abhay M. Martin has more than 14 years of experience as a consultant in Dermatology and is well-trained in different aspects of skin diseases, including skin allergies and drug reactions. His knowledge and expertise has been translated into various research papers and books. He has special interest in Acne, Psoriasis and atopic dermatitis. He has the expertise to perform highly advanced treatment procedures. He is also assistant director of Quality Management System at BMH."
    
// }