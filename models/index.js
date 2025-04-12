const sequelize = require("../config/db");

// Test database connection
(async () => {
    try {
      await sequelize.authenticate();
      console.log("✅ Database connection has been established successfully.");
    } catch (error) {
      console.error("❌ Unable to connect to the database:", error);
    }
  })();
  

// Import all models
const Business = require("./Business");
const Demand = require("./demand");
const Supply = require("./supply");
const Product = require("./product");
const ProductCategory = require("./productcategory");
const Exchange = require("./exchange");
const Tag = require("./tag");
const ProductTag = require("./producttag");
const Location = require("./location");

// ========== Define Associations ==========

// Business ↔ Location
Business.belongsTo(Location, { foreignKey: "location_id" });
Location.hasMany(Business, { foreignKey: "location_id" });

// Business ↔ Supply and Demand
Business.hasMany(Supply, { foreignKey: "business_id" });
Business.hasMany(Demand, { foreignKey: "business_id" });

Supply.belongsTo(Business, { foreignKey: "business_id" });
Demand.belongsTo(Business, { foreignKey: "business_id" });

// Supply ↔ Product
Supply.belongsTo(Product, { foreignKey: "product_id" });
Product.hasMany(Supply, { foreignKey: "product_id" });

// Demand ↔ Product
Demand.belongsTo(Product, { foreignKey: "product_id" });
Product.hasMany(Demand, { foreignKey: "product_id" });

// Product ↔ ProductCategory
Product.belongsTo(ProductCategory, { foreignKey: "category_id" });
ProductCategory.hasMany(Product, { foreignKey: "category_id" });

// Exchange ↔ Supply and Demand
Exchange.belongsTo(Supply, { foreignKey: "supply_id" });
Exchange.belongsTo(Demand, { foreignKey: "demand_id" });

Supply.hasMany(Exchange, { foreignKey: "supply_id" });
Demand.hasMany(Exchange, { foreignKey: "demand_id" });

// Product ↔ Tag (Many-to-Many via ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
  otherKey: "tag_id"
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  otherKey: "product_id"
});

// ========== Export Models ==========
module.exports = {
  sequelize,
  Business,
  Demand,
  Supply,
  Product,
  ProductCategory,
  Exchange,
  Tag,
  ProductTag,
  Location
};

