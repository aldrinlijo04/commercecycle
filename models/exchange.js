const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Supply = require("./supply"); // Assuming you have a supply model
const Demand = require("./demand"); // Assuming you have a demand model

const Exchange = sequelize.define("Exchange", {
  exchange_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  supply_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Supply,  // Foreign key reference to the Supply table
      key: "id"       // Assuming the primary key of Supply is "id"
    }
  },
  demand_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Demand,  // Foreign key reference to the Demand table
      key: "id"       // Assuming the primary key of Demand is "id"
    }
  },
  exchange_date: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.STRING
  }
}, {
  tableName: "exchanges",
  timestamps: false
});

// Associations
Exchange.belongsTo(Supply, { foreignKey: 'supply_id' });
Exchange.belongsTo(Demand, { foreignKey: 'demand_id' });

module.exports = Exchange;
