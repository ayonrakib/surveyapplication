const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys.js');

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);