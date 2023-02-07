const express = require("express");
const router = express.Router();
const leadsController = require("../../controllers/leadsController");
router
    .get('/',leadsController.getAllLeads)
    .get('/leadId',leadsController.getOneLeads)

module.exports = router;