// Import packages :
const express = require('express');
require('dotenv').config({ path: '../.env' });
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
// const db = require(__dirname + '/models/index');

// Import routes :

// const env = process.env;

// // Infos de connexion :
// const sequelize = new Sequelize(
//   env.MYSQL_DB_NAME,
//   env.MYSQL_USERNAME,
//   env.MYSQL_PWD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: env.MYSQL_PORT,
//   }
// );

// Connexion :
// db
//   .authenticate()
//   .then(() => console.log('Connexion à MySql établie.'))
//   .catch((err) => {
//     console.log('connexion à MySql échouée.', err);
//   });

const app = express();
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

module.exports = app;
