let router = require('express').Router();
let PagesController = require('../controllers/PagesController');
let bodyParser = require('body-parser');
let urlendecodedParser = bodyParser.urlencoded({ extended: true});

//homepage
router.get('/', PagesController.homepage);

//Create and store product
router.get('/products/create', PagesController.agregar);
router.get('/agregar', PagesController.agregar);
router.post('/products', urlendecodedParser, PagesController.store);

//Show product in other view
router.get('/products/:id', PagesController.muestraProd);

//See product to edit and update
router.get('/products/:id/edit', PagesController.editar);
router.put('/products/:id', urlendecodedParser, PagesController.update);

//Delete product
router.delete('/products/:id', PagesController.delete);






module.exports = router;