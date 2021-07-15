const express = require('express');
const keys = require('./config/keys.js');
require('./services/passport.js');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const app = express();


mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

// const authRoutes = require('./routes/authRoutes.js');
// authRoutes(app);

require('./routes/authRoutes.js')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);