const mongoose=require('mongoose');

const EmployeeSchema=new mongoose.Schema({
    name: String,
    email:String,
    password:String
})

const EmpolyeeModel=mongoose.model('employees',EmployeeSchema);