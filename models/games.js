'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Games.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    age: DataTypes.BOOLEAN,
    PC: DataTypes.BOOLEAN,
    PS: DataTypes.BOOLEAN,
    Xbox: DataTypes.BOOLEAN,
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};