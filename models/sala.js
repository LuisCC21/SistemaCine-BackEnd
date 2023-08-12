import {DataTypes} from 'sequelize';
import{ db} from '../db/connection.js';


const Sala= db.define('Sala',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    asientos:{
        type:DataTypes.JSON 
    }
},
    {
        tableName: 'sala',
    },

)

export default Sala;