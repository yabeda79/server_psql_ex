'use strict';
import { Model, Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('test1', 'postgres', 'vlad23karol1999', {
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
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
});

export default User