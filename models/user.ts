"use strict";
import { Model, Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("native", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
});

interface UserInt {
    username: string;
    email: string;
    password: string;
}

class User extends Model {}
User.init(
    {
        isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: true },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        modelName: "User",
    },
);

export default User;
