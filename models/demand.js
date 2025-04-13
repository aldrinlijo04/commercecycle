const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Demand = sequelize.define("Demand", {
  demand_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  business_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "businesses",
      key: "business_id"
    }
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "products",
      key: "product_id"
    }
  },
  quantity_needed: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: true
  },
  needed_by: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: "demand",
  timestamps: false
});

module.exports = Demand;
