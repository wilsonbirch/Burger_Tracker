const orm = require('../config/orm.js');

const burgers = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    insert: (burgerType, cb) => {
        orm.insert(burgerType, (res) => {
            cb(res);
        })
    },

    update: (burgerType, cb) => {
        orm.update(burgerType, (res) => {
            cb(res);
        });
    },
};

burgers.insert("smokey burger");

module.exports = burgers;