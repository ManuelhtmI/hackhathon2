// const { connection } = require('../db_connection');
// const router = require('express').Router(); 

// router.get('/', (req, res) => { 
//     const sql = "SELECT * FROM buyers";
//     connection.query(sql, (err, results) => {
//         if (err) { 
//             res.status(500).send({ errorMessage : err.message})
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

// router.get('/', (req, res) => { 
//     const sql = "SELECT * FROM cities";
//     connection.query(sql, (err, results) => {
//         if (err) { 
//             res.status(500).send({ errorMessage : err.message})
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

// router.get('/', (req, res) => { 
//     const sql = "SELECT * FROM farmers";
//     connection.query(sql, (err, results) => {
//         if (err) { 
//             res.status(500).send({ errorMessage : err.message})
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

// module.exports = router;