'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profil.belongsTo(models.User, {
        foreignKey: { name: 'userId', allowNull: false },
      });
    }
  }
  Profil.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      position: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Profil',
      tableName: 'profils',
    }
  );
  return Profil;
};
