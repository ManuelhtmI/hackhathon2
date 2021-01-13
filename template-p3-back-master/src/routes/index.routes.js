const router = require('express').Router();
const productsRouter = require('./products.routes.js');
const buyersRouter = require('./buyers.routes.js');
const citiesBuyersRouter = require('./citiesBuyers.routes.js');
const citiesFarmersRouter = require('./citiesFarmers.routes.js');

router.use('/products', productsRouter);
router.use('/buyers', buyersRouter);
router.use('/citiesBuyers', citiesBuyersRouter);
router.use('/citiesFarmers', citiesFarmersRouter)


module.exports = router;