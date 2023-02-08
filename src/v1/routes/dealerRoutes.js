const express = require("express");
const router = express.Router();
const dealerController = require("../../controllers/dealerController");
router
    .get('/',dealerController.getAllDealer)
    .get('/dealer/:id',dealerController.getOneDealer)
    .post('/dealer/',dealerController.createOneDealer)
    .patch('/dealer/:id',dealerController.updateOneDealer)
    .delete('/dealer/:id',dealerController.deleteOneDealer)
    .get('/dealer/:id/vehicles/:id',dealerController.getOneVehicle)
    .post('/dealer/:id/vehicles/',dealerController.createOneVehicle)
    .patch('/dealer/:id/vehicles/:id',dealerController.updateOneVehicle)
    .delete('/dealer/:id/vehicles/:id',dealerController.deleteOneVehicle)
    .get('/dealer/:id/accesories/:id',dealerController.getOneAccesory)
    .post('/dealer/:id/accesories/',dealerController.createOneAccesory)
    .patch('/dealer/:id/accesories/:id',dealerController.updateOneAccesory)
    .delete('/dealer/:id/accesories/:id',dealerController.deleteOneAccesory)
    .get('/dealer/:id/posts/:id',dealerController.getOnePost)
    .post('/dealer/:id/posts/',dealerController.createOnePost)
    .patch('/dealer/:id/posts/:id',dealerController.updateOnePost)
    .delete('/dealer/:id/posts/:id',dealerController.deleteOnePost)
    .get('/dealer/:id/leads/:id',dealerController.getOneLead)
    .post('/dealer/:id/leads/',dealerController.createOneLead)
    .patch('/dealer/:id/leads/:id',dealerController.updateOneLead)
    .delete('/dealer/:id/leads/:id',dealerController.deleteOneLead)
module.exports = router;