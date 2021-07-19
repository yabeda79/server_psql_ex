import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize()

const Games = sequelize.define('games', {
    title: DataTypes.STRING(255),
    category: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    players: DataTypes.STRING(10),
    image: DataTypes.TEXT,
    manufacturer: DataTypes.STRING(255),
    price: DataTypes.INTEGER(),
});


module.exports(Games)