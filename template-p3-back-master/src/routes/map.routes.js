const { connection } = require('../db_connection');
const router = require('express').Router(); 

router.get('/', (red, res) => { 
    const sql = "SELECT * FROM XXX";
    connection.query(sql, (err, results) => {
        if (err) { 
            res.status(500).send({ errorMessage : err.message})
        } else {
            res.status(200).json(results);
        }
    });
});