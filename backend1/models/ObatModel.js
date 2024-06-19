import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Transactions = db.define('obat',{
    namaObat: DataTypes.STRING,
    hargaObat: DataTypes.STRING,
    gambarObat: DataTypes.STRING,
    deskripsiObat: DataTypes.STRING,
    tgl_expired: DataTypes.STRING
},{
    freezeTableName:true
});

export default Transactions;

(async()=>{
    await db.sync();
})();