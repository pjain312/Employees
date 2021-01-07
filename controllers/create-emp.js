const Emp = require('../models/employee');

module.exports.createEmp = function(req, res){
    Emp.create({
        empname: req.body.empname,
        role: req.body.role,
        email: req.body.email
    } , function(err,newEmp){
            if(err){console.log('error in creating a new employee');
            return;
        }
        console.log('*******',newEmp);
        return res.redirect('back');
        });
}