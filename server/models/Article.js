const {DataTypes}=require('sequelize')
const sequelize=require('../config/db')

const Article=sequelize.define('Article',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.STRING,

    },
    summary:{
        type:DataTypes.STRING,
    },
    date:{
        type:DataTypes.DATEONLY,
    },
    tags:{
        type:DataTypes.JSON,
    },

})

module.exports=Article