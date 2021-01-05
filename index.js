const express = require('express');
const path = require('path');

const port = 8000;

const db = require('./config/mongoose');


const Emp = require('./models/employee');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());


app.use(express.static('assets'));



app.get('/', function(req,res){
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
    
});

app.post('/create-emp',function(req,res){

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
});

app.listen(port, function(err)
{
    if(err)
    {
        console.log('error in running the server', err);
    }

    console.log('Server is running on port',port);
});