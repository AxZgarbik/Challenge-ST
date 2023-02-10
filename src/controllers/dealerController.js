const dealerServices = require("../services/dealerServices");

const getAllDealer = async (req,res) => {
    const allDealer = await dealerServices.getAllDealer()
    res.send( allDealer)

};

const getDealerById = async (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const oneDealer = await dealerServices.getDealerById(req.params.id);
    res.send({status:"OK", data: oneDealer})

}

const createDealer = (req,res) => {
    const {body} = req;
    if(!body.name,!body.dir){
        return res.status(400).json({msg:"No se pudo crear el Dealer"})
    }
    const newDealer = {name:body.name,dir:body.dir};
    const createDealer = dealerServices.createDealer(newDealer);
    res.status(201).send({status:"OK", data:createDealer})
};

const updateDealer = (req,res) => {
    const {body, params:{id}} = req
    if(!id){
        return res.status(400).json({msg:"No se encontro el Dealer"})
    }
    const updateDealer = dealerServices.updateDealer(id,body);
    res.status(200).send({status:"OK", data:updateDealer})
}

const deleteDealer = (req,res) => {
    const { params: {id}} = req;
    if(id){
        return res.status(400).json({msg:"No se encontro el Dealer"})
    }
    const deleteDealer = dealerServices.deleteDealer(id)
    res.status(200).send({status:"OK", data:deleteDealer})
}

const getVehicleById = (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const oneVehicle = dealerServices.getVehicleById(req.params.id);
    res.send({status:"OK", data: oneVehicle})
}

const createVehicle = (req,res) => {
    const {body} = req;
    if(
        !body.dealer,
        !body.brand,
        !body.year,
        !body.transmission,
        !body.doors,
        !body.fuelType,
        !body.bodyType,
        !body.identifier
        ){
        return res.status(400).json({msg:"No se pudo crear el Vehiculo"})
    }
    const newVehicle = {
        dealer:body.dealer,
        brand:body.brand,
        year:body.year,
        transmission:body.transmission,
        doors:body.doors,
        fuelType:body.fuelType,
        bodyType:body.bodyType,
        identifier:body.identifier};
    const createVehicle = dealerServices.createVehicle(newVehicle);
    res.status(201).send({status:"OK", data:createVehicle})
};

const updateVehicle = (req,res) => {
    const {body, params:{id}} = req
    if(!id){
        return res.status(400).json({msg:"No se encontro el Vehiculo"})
    }
    const updateVehicle = dealerServices.updateVehicle(id,body);
    res.status(200).send({status:"OK", data:updateVehicle})
}

const deleteVehicle = (req,res) => {
    const { params: {id}} = req;
    if(id){
        return res.status(400).json({msg:"No se encontro el Vehiculo"})
    }
    const deleteVehicle= dealerServices.deleteVehicle(id)
    res.status(200).send({status:"OK", data:deleteVehicle})
}

const getAccesory = (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const oneAccesory = dealerServices.getAccesoryById(req.params.id);
    res.send({status:"OK", data: oneAccesory})
}

const createAccesory = (req,res) => {
    const {body} = req;
    if(
        !body.dealerId,
        !body.name,
        !body.vehicleId
        ){
        return res.status(400).json({msg:"No se pudo crear el Accesorio"})
    }
    const newAccesory = {
        dealerId:body.dealerId,
        name:body.name,
        vehicleId:body.vehicleId
    }
    const createAccesory = dealerServices.createAccesory(newAccesory);
    res.status(201).send({status:"OK", data:createAccesory})
};

const updateAccesory = (req,res) => {
    const {body, params:{id}} = req
    if(!id){
        return res.status(400).json({msg:"No se encontro el Accesorio"})
    }
    const updateAccesory = dealerServices.updateAccesory(id,body);
    res.status(200).send({status:"OK", data:updateAccesory})
}

const deleteAccesory = (req,res) => {
    const { params: {id}} = req;
    if(id){
        return res.status(400).json({msg:"No se encontro el Accesorio"})
    }
    const deleteAccesory= dealerServices.deleteAccesory(id)
    res.status(200).send({status:"OK", data:deleteAccesory})
}

const getPostById = (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const onePost = dealerServices.getPostById(req.params.id);
    res.send({status:"OK", data: onePost})
}

const createPost = (req,res) => {
    const {body} = req;
    if(
        !body.dealerId,
        !body.name,
        !body.date,
        !body.description
        ){
        return res.status(400).json({msg:"No se pudo crear la Publicacion"})
    }
    const newPost = {
        dealerId:body.dealerId,
        name:body.name,
        date:body.date,
        description:body.description
    }
    const createPost = dealerServices.createPost(newPost);
    res.status(201).send({status:"OK", data:createPost})
};

const updatePost = (req,res) => {
    const {body, params:{id}} = req
    if(!id){
        return res.status(400).json({msg:"No se encontro la publicacion"})
    }
    const updatePost = dealerServices.updatePost(id,body);
    res.status(200).send({status:"OK", data:updatePost})
}

const deletePost = (req,res) => {
    const { params: {id}} = req;
    if(id){
        return res.status(400).json({msg:"No se encontro la Publicacion"})
    }
    const deletePost= dealerServices.deletePost(id)
    res.status(200).send({status:"OK", data:deletePost})
}
const getLeadById = (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const oneLead = dealerServices.getLeadById(req.params.id);
    res.send({status:"OK", data: oneLead})
}

const createLead = (req,res) => {
    const {body} = req;
    if(
        !body.email,
        !body.name,
        !body.lastName,
        !body.phone,
        !body.terms,
        !body.filing
        ){
        return res.status(400).json({msg:"No se pudo crear la Publicacion"})
    }
    const newPost = {
        email:body.email,
        name:body.name,
        lastName:body.date,
        phone:body.description,
        terms:body.terms,
        filing:body.filing
    }
    const createPost = dealerServices.createPost(newPost);
    res.status(201).send({status:"OK", data:createPost})
};

const updateLead = (req,res) => {
    const onePost = dealerServices.updatePost()
}

const deleteLead = (req,res) => {
    const onePost = dealerServices.deletePost()
}
module.exports = {
    getAllDealer,
    getDealerById,
    createDealer,
    updateDealer,
    deleteDealer,
    getVehicleById,
    createVehicle,
    updateVehicle,
    deleteVehicle,
    getAccesory,
    createAccesory,
    updateAccesory,
    deleteAccesory,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    getLeadById,
    createLead,
    updateLead,
    deleteLead
}