'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     // belongsTo
     Voucher.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: "category"
    });
    Voucher.belongsTo(models.Category, {
      foreignKey: 'categoryTypetId',
      as: "type"
    });
    }
  };
  Voucher.init({
    concept: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    categoryId: DataTypes.INTEGER,
    categoryTypetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};