'use strict';
import { Model, Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('test1', 'postgres', 'vlad23karol1999', {
  host: 'localhost',
  dialect: 'postgres'
})

interface GamesInt {
  title: string;
  category: string,
  description: string,
  image: string,
  manufacturer: string,
  price: number,
}

class Games extends Model {}
  Games.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    manufacturer: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Games',
});

export default Games