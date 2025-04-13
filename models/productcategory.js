const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ProductCategory = sequelize.define("ProductCategory", {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Ensures auto-incrementing primary key
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "productcategories",
  timestamps: false
});

module.exports = ProductCategory;
