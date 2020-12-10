const path = require('path');
const express = require('express');
const app = express();
port = process.env.PORT || 8080; 

const publicDirectoryPath = path.join(__dirname, '../src');

console.log(__dirname);
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', function (req, res) {
    res.render('index', {
        title: 'Weather App',
        name: 'Pankaj Bhadwal'
    });
});

app.get('/help', function(req,res) {
    res.render('help', {
        title:'Help',
        message: 'If you need any kind of help, kindly drop a mail at pankajbhadwalinert@gmail.com. Thanks & Have a nice day!'
    })
})

app.listen (port, function (){

    console.log("Server loaded at Port 8080 successfully!")
})