const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send({hi:'there'});
});

app.get('/home',(req,res) => {
    res.send({name:'Scarecrow'});
});

app.listen(5000);