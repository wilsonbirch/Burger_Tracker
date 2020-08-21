const connection = require('./connection');
const cTable = require('console.table');
let burgerType;

const orm = {
    all: (tableInput, cb)=> {
        const queryString = 'SELECT * FROM ??;';
        connection.query(
            queryString,
            [tableInput],
            (err, result) => {
                if (err) throw err;
                console.table(result);
            }
        ); 
        connection.end()
    },
    insert: (burgerType, cb) =>  {
        const queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES(??, 0);';
        connection.query(
            queryString,
            [burgerType],
            (err, result) => {
                if (err) throw err;
                console.table(result);
            }
        ); 
        connection.end()
    },
    update: (burgerType, cb) =>  {
        const queryString = 'UPDATE burgers set devoured = NOT devoured where burger_name = ??;';
        connection.query(
            queryString,
            [burgerType],
            (err, result) => {
                if (err) throw err;
                console.table(result);
            }
        );
        connection.end()
    }
};

module.exports = orm;
