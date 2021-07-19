import { Sequelize } from "sequelize";

const sequelize = new Sequelize('test1', 'postgres','vlad23karol1999', {
    dialect: 'postgres',
    host: 'localhost'
})