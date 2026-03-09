const { model } = require("mongoose"); 

const { OrdersSchema } = require('../schemas/OrdersSchema');

const OrdersModel  = new model("oreder", OrdersSchema);

module.exports = { OrdersModel }; 