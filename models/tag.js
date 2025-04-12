const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Tag = sequelize.define("Tag", {
  tag_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  tag_name: DataTypes.STRING
}, {
  tableName: "tags",
  timestamps: false
});

module.exports = Tag;
