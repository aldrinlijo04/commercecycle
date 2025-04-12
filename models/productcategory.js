const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ProductCategory = sequelize.define("ProductCategory", {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  category_name: DataTypes.STRING
}, {
  tableName: "productcategories",
  timestamps: false
});

module.exports = ProductCategory;
