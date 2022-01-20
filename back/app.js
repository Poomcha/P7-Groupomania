// Import packages :
const express = require('express');
require('dotenv').config({ path: '../.env' });
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const db = require(__dirname + '/models/index');
const session = require('express-session');
const sessionOptions = require('./config/cookie-config');

// Import routes :
const userRoute = require('./routes/user');
const profilRoute = require('./routes/profil');
const pubRoute = require('./routes/publication');

const app = express();
app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

// Configuration des headers :
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// Création du dossier ./images s'il n'existe pas :
fs.access('./images', fs.constants.F_OK, (error) => {
  if (error) {
    fs.mkdir('./images', (error) => {
      if (error) {
        throw error;
      } else {
        console.log('Création du dossier ./images.');
      }
    });
  }
});

// Chemin du dossier vers les images :
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routage
app.use('/', userRoute);
app.use('/', profilRoute);
app.use('/', pubRoute);

module.exports = app;
