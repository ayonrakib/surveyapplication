const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send({hi:'there'});
});

app.get('/home',(req,res) => {
    res.send({name:'Ayon'});
});

app.listen(5000);