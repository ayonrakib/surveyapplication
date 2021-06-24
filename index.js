const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send({'hi':'there, port number ' + `${process.env.PORT}`});
});

app.get('/home',(req,res) => {
    res.send({name:'Scarecrow'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);