import { Sequelize } from "sequelize";

const db = new Sequelize('apotek','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;