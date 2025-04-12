const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  category_id: DataTypes.INTEGER
}, {
  tableName: "products",
  timestamps: false
});

module.exports = Product;
