const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Location = sequelize.define("Location", {
  location_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  business_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "businesses",
      key: "business_id"
    }
  },
  
  city: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  postal_code: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
}, {
  tableName: "locations",
  timestamps: false
});

module.exports = Location;
