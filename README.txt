Pré-requis :
- Avoir mySQL installé
- Avoir Node.js installé, 14 au maximum

Installation du projet :
- Dans le répertoire /back : lancer la commande "npm install"
- Dans le répertoire /front : lancer la commande "npm install"

- Dans le répertoire /back/config : créer un fichier config.json,
  copier à l'intérieur le JSON ci dessous et remplir les champs de 
  la partie développement username, password avec vos identifiants 
  mySQL, database par le nom de base de donnée de votre choix. 

{
  "development": {
    "username": YOUR_USERNAME,
    "password": YOUR_PASSWORD,
    "database": YOUR_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "db-test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "db-production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

- Dans le répertoire /back, lancer la commande : "npx sequelize db:create"
- Dans le répertoire /back, lancer la commande : "npx sequelize db:migrate"

- Dans le répertoire /back, lancer la commande : "nodemon start"
- Dans le répertoire /front, lancer la commande : "npm run serve"

- Dans un navigateur, ouvrir une page à l'adresse : "http://localhost:8080"

Créer un profil administratur :
- l'email de l'administrateur doit être "admin@groupomania.com"