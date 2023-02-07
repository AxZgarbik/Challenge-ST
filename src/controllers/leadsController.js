const leadsServices = require("../services/leadsServices");

const getAllLeads = (req,res) => {
    const AllLeads = leadsServices.getAllLeads()
};

const getOneLeads = (req,res) => {
    const OneLeads = leadsServices.getOneLeads()
}

module.exports = {
    getAllLeads,
    getOneLeads
}