const { connection } = require('../db_connection');
const router = require('express').Router();

router.get('/', (req, res) => {
  const sql = "SELECT DISTINCT * FROM transactions JOIN farmers ON transactions.farmer_id = farmers.id JOIN cities ON cities.id=farmers.city_id JOIN products ON transactions.product_id = products.id";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;