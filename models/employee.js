
const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
     empname :{
        type:String,
        required:true
    },

    role:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required:true
    }
});

const Emp = mongoose.model('Emp',employeeSchema);
module.exports = Emp;