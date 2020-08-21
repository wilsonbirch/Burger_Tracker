const connection = require('./connection');
const cTable = require('console.table');
let burgerType;

const selectAll = () => {
    connection.query('SELECT * FROM burgers', (err, rows) => {
        if (err) throw err;
        console.table(rows);
    }); 
    connection.end();
}

const insertOne = (burgerType) =>  {
    burgerType = JSON.stringify(burgerType);
    connection.query('INSERT INTO burgers (burger_name, devoured) VALUES( ' + burgerType +', 0);', (err,row) => {
        if (err) throw err;

        connection.query('SELECT * FROM burgers', (err, rows) => {
            if (err) throw err;
            console.table(rows);
        }); 
        connection.end();
    });
}

const updateOne = (burgerType) => {
    burgerType = JSON.stringify(burgerType);
    connection.query('UPDATE burgers set devoured = NOT devoured where burger_name = '+ burgerType +';', (err, row) =>{
        if (err) throw err;

        connection.query('SELECT * FROM burgers', (err, rows) => {
            if (err) throw err;
            console.table(rows);
        }); 
        connection.end();
    });
};

let b= 'Big-mac';
updateOne(b);

module.exports = updateOne;
module.exports = selectAll;
module.exports = insertOne;