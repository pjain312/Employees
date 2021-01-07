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

app.use('/', require('./routes/index'));

app.listen(port, function(err)
{
    if(err)
    {
        console.log('error in running the server', err);
    }

    console.log('Server is running on port',port);
});