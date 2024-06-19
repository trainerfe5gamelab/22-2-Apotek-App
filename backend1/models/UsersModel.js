import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Transactions = db.define('users',{
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
},{
    freezeTableName:true
});

export default Transactions;

(async()=>{
    await db.sync();
})();