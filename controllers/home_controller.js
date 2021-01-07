const Emp = require('../models/employee');

module.exports.home = function(req, res){
    Emp.find({},function(err,emp){
        if(err){
            console.log('Error in fetching employees');
            return;
        }
        return res.render('home',{
            title : "Employees",
            emp : emp
        });
    });
}