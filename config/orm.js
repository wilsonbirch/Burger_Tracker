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
                cb(result);

            }
        ); 

    },
    insert: (burgerType, cb) =>  {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES(";
        
        queryString += JSON.stringify(burgerType);
        queryString += ", 0);";
        connection.query(queryString, (err, result) => {
                if (err) throw err;
                cb(result);
                
            }
        ); 

    },

    update: (burgerType, cb) =>  {
        var queryString = "UPDATE burgers set devoured = NOT devoured where burger_name = ";
        queryString += JSON.stringify(burgerType);
        connection.query( queryString, (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );

    }
};

module.exports = orm;
