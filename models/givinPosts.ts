"use strict";
import { Model, Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("native", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
});

class GivingPosts extends Model {}
GivingPosts.init(
    {
        title: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "GivingPosts",
    },
);

export default GivingPosts;
