const express = require("express");
const router = express.Router();
const dealerController = require("../../controllers/dealerController");
router
    //Dealer
    .get('/dealer',dealerController.getAllDealer)
    .get('/dealer/:id',dealerController.getDealerById)
    .post('/dealer/',dealerController.createDealer)
    .patch('/dealer/:id',dealerController.updateDealer)
    .delete('/dealer/:id',dealerController.deleteDealer)

    //Vehicle
    .get('/',dealerController.getAllVehicles)
    .get('/dealer/:id/vehicles/',dealerController.getAllVehiclesByDealerId)
    .get('/vehicles/:id',dealerController.getVehicleById)
    .post('/dealer/:id/vehicles/',dealerController.createVehicle)
    .patch('/vehicles/:id',dealerController.updateVehicle)
    .delete('/vehicles/:id',dealerController.deleteVehicle)

    //Variants
    .get('/vehicle/:id/variants/',dealerController.getAllVariants)
    .get('/vehicle/:id/variants/:id',dealerController.getVariantById)
    .post('/vehicle/:id/variants/',dealerController.createVariant)
    .patch('/vehicle/:id/variants/:id',dealerController.updateVariant)
    .delete('/vehicle/:id/variants/:id',dealerController.deleteVariant)

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