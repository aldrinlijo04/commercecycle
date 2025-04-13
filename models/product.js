const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Category = require("./productcategory"); // Assuming you have a Category model

const Product = sequelize.define("Product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true  // Auto-increment added for product_id
  },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,  // Foreign key reference to Category table
      key: "category_id"  // Assuming the primary key of Category is "category_id"
    }
  }
}, {
  tableName: "products",
  timestamps: false
});

// Associations
Product.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Product;
