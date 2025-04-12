
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ProductTag = sequelize.define("ProductTag", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  tag_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  tableName: "producttags",
  timestamps: false
});

module.exports = ProductTag;
