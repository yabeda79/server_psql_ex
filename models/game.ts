"use strict";
import { Model, Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("native", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
});

interface GamesInt {
    title: string;
    genre: string;
    age: number;
    PC: boolean;
    PS: boolean;
    Xbox: boolean;
    rating: number;
    description: string;
    image: string;
    manufacturer: string;
    price: number;
}

class Games extends Model {}
Games.init(
    {
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        age: DataTypes.INTEGER,
        PC: DataTypes.BOOLEAN,
        PS: DataTypes.BOOLEAN,
        Xbox: DataTypes.BOOLEAN,
        rating: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        image: DataTypes.TEXT,
        manufacturer: DataTypes.STRING,
        price: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "Games",
    },
);

export default Games;
