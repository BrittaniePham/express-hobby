'use strict';
module.exports = (sequelize, DataTypes) => {
  var Festival = sequelize.define('Festival', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Festival.associate = function(models) {
    // associations can be defined here
  };
  return Festival;
};