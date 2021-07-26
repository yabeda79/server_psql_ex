'use strict';
import { Model, Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('test2', 'postgres', 'vlad23karol1999', {
  host: 'localhost',
  dialect: 'postgres'
})

interface UserInt {
    username: string,
    email: string,
    password: string,
}

class User extends Model {}
  User.init({
    username: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
});

export default User