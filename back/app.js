const { Sequelize } = require('sequelize');
require('dotenv').config({ path: '../.env' });

const env = process.env;

// Connexion à la bdd :
const sequelize = new Sequelize(
  env.MYSQL_DB_NAME,
  env.MYSQL_USERNAME,
  env.MYSQL_PWD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: env.MYSQL_PORT,
  }
);

try {
  sequelize.authenticate();
  console.log('Connexion à MySql établie !');
} catch (error) {
  console.error('Connexion à MySql échouée : ', error);
}
