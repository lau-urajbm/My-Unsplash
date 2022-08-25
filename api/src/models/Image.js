const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo para temperamento
    sequelize.define('image', {
      id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement:true,
        },
      url: {
        type: DataTypes.STRING,
        
      }, 
      label:{
        type: DataTypes.TEXT
      }
      
    },
    
    {          
      timestamps: false,
      createdAt: false,
      updatedAt: false
  
  });
  };