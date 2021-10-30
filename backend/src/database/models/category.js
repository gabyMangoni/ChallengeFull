'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     // belongsTo
     Category.belongsTo(models.Type);
    // hasOne
     Category.hasOne(models.Voucher, {
       foreignKey: 'categoryId',
       as: "types"
     });
    // hasOne
     Category.hasOne(models.Voucher, {
       foreignKey: 'categoryTypetId',
       as: "categoriesTypes"
     });
    }
  };
  Category.init({
    name: DataTypes.STRING,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};