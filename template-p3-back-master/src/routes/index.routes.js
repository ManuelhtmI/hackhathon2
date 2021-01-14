const router = require('express').Router();

const preloadRouter = require('./preload.routes.js')
const buyersRouter = require('./buyers.routes.js');
const productsRouter = require('./products.routes.js');
const farmersRouter = require('./farmers.routes.js');
const citiesRouter = require('./cities.routes.js');
const transactionsRouter = require('./transactions.routes.js');
const citiesBuyersRouter = require('./citiesBuyers.routes.js');
const citiesFarmersRouter = require('./citiesFarmers.routes.js');
const preloadFarmersRouter = require('./preloadFarmers.routes')

router.use('/preloadFarmers', preloadFarmersRouter)
router.use('/preload', preloadRouter);
router.use('/cities', citiesRouter);
router.use('/buyers', buyersRouter);
router.use('/products', productsRouter);
router.use('/farmers' , farmersRouter);
router.use('/transactions', transactionsRouter);
router.use('/citiesBuyers', citiesBuyersRouter);
router.use('/citiesFarmers', citiesFarmersRouter);

module.exports = router;