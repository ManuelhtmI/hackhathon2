const router = require('express').Router();
const adminRouter = require('./admin.routes.js');
const buyersRouter = require('./buyers.routes.js');
const productsRouter = require('./products.routes.js');
const farmersRouter = require('./farmers.routes.js');
const citiesRouter = require('./cities.routes.js');
const transactionsRouter = require('./transactions.routes.js');

router.use('/admins', adminRouter);
router.use('/cities', citiesRouter);
router.use('/buyers', buyersRouter);
router.use('/products', productsRouter);
router.use('/farmers' , farmersRouter);
router.use('/transactions', transactionsRouter);

module.exports = router;