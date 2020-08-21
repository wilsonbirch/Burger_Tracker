const orm = require('../config/orm.js');

//Show all burgers currently input
const selectAll = orm.selectAll()

//Update one burger to "eaten"
const updateOne = orm.updateOne()

//add a new burger to the db
const insertOne = orm.insertOne()

exports.selectAll = selectAll;
exports.insertOne = insertOne;
exports.updateOne = updateOne;