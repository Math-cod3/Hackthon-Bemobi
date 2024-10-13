// backend/models/Customer.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

class Customer extends Model {}

Customer.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    preferredChannel: DataTypes.STRING,
    // Outros campos relevantes
  },
  { sequelize, modelName: 'customer' }
);

module.exports = Customer;
