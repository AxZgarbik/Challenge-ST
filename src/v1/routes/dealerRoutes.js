const express = require("express");
const router = express.Router();
const dealerController = require("../../controllers/dealerController");
router
    //Dealer
    .get('/',dealerController.getAllDealer)
    .get('/dealer/get/:id',dealerController.getDealerById)
    .post('/dealer/create/',dealerController.createDealer)
    .patch('/dealer/update/:id',dealerController.updateDealer)
    .delete('/dealer/delete/:id',dealerController.deleteDealer)

    //Vehicle

    .get('/dealer/:id/vehicles/get/:id',dealerController.getVehicleById)
    .post('/dealer/:id/vehicles/',dealerController.createVehicle)
    .patch('/dealer/:id/vehicles/update/:id',dealerController.updateVehicle)
    .delete('/dealer/:id/vehicles/delete/:id',dealerController.deleteVehicle)

    //Accesory

    .get('/dealer/:id/accesories/:id',dealerController.getAccesoryById)
    .post('/dealer/:id/accesories/',dealerController.createAccesory)
    .patch('/dealer/:id/accesories/:id',dealerController.updateAccesory)
    .delete('/dealer/:id/accesories/:id',dealerController.deleteAccesory)

    //Posts

    .get('/dealer/:id/posts/:id',dealerController.getPostById)
    .post('/dealer/:id/posts/',dealerController.createPost)
    .patch('/dealer/:id/posts/:id',dealerController.updatePost)
    .delete('/dealer/:id/posts/:id',dealerController.deletePost)
    
    //Leads

    .get('/dealer/:id/leads/:id',dealerController.getLeadById)
    .post('/dealer/:id/leads/',dealerController.createLead)
    .patch('/dealer/:id/leads/:id',dealerController.updateLead)
    .delete('/dealer/:id/leads/:id',dealerController.deleteLead)
    
module.exports = router;