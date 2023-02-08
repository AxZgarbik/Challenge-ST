const dealerServices = require("../services/dealerServices");

const getAllDealer = (req,res) => {
    const allDealer = dealerServices.getAllDealer()
    res.send({status:"OK", data: allDealer})

};

const getOneDealer = (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const oneDealer = dealerServices.getOneDealer(req.params.id);
    res.send({status:"OK", data: oneDealer})

}

const createOneDealer = (req,res) => {
    const {body} = req;
    if(!body.name,!body.dir){
        return res.status(400).json({msg:"No se pudo crear el Dealer"})
    }
    const newDealer = {name:body.name,dir:body.dir};
    const createOneDealer = dealerServices.createOneDealer(newDealer);
    res.status(201).send({status:"OK", data:createOneDealer})
};

const updateOneDealer = (req,res) => {
    const {body, params:{id}} = req
    if(!id){
        return res.status(400).json({msg:"No se encontro el Dealer"})
    }
    const updateOneDealer = dealerServices.updateOneDealer(id,body);
    res.status(200).send({status:"OK", data:updateOneDealer})
}

const deleteOneDealer = (req,res) => {
    const { params: {id}} = req;
    if(id){
        return res.status(400).json({msg:"No se encontro el Dealer"})
    }
    const deleteOneDealer = dealerServices.deleteOneDealer(id)
    res.status(200).send({status:"OK", data:deleteOneDealer})
}

const getOneVehicle = (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const oneVehicle = dealerServices.getOneVehicle(req.params.id);
    res.send({status:"OK", data: oneVehicle})
}

const createOneVehicle = (req,res) => {
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
    const createOneVehicle = dealerServices.createOneVehicle(newVehicle);
    res.status(201).send({status:"OK", data:createOneVehicle})
};

const updateOneVehicle = (req,res) => {
    const {body, params:{id}} = req
    if(!id){
        return res.status(400).json({msg:"No se encontro el Vehiculo"})
    }
    const updateOneVehicle = dealerServices.updateOneVehicle(id,body);
    res.status(200).send({status:"OK", data:updateOneVehicle})
}

const deleteOneVehicle = (req,res) => {
    const { params: {id}} = req;
    if(id){
        return res.status(400).json({msg:"No se encontro el Vehiculo"})
    }
    const deleteOneVehicle= dealerServices.deleteOneVehicle(id)
    res.status(200).send({status:"OK", data:deleteOneVehicle})
}

const getOneAccesory = (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const oneAccesory = dealerServices.getOneAccesory(req.params.id);
    res.send({status:"OK", data: oneAccesory})
}

const createOneAccesory = (req,res) => {
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
    const createOneAccesory = dealerServices.createOneAccesory(newAccesory);
    res.status(201).send({status:"OK", data:createOneAccesory})
};

const updateOneAccesory = (req,res) => {
    const {body, params:{id}} = req
    if(!id){
        return res.status(400).json({msg:"No se encontro el Accesorio"})
    }
    const updateOneAccesory = dealerServices.updateOneAccesory(id,body);
    res.status(200).send({status:"OK", data:updateOneAccesory})
}

const deleteOneAccesory = (req,res) => {
    const { params: {id}} = req;
    if(id){
        return res.status(400).json({msg:"No se encontro el Accesorio"})
    }
    const deleteOneAccesory= dealerServices.deleteOneAccesory(id)
    res.status(200).send({status:"OK", data:deleteOneAccesory})
}

const getOnePost = (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const onePost = dealerServices.getOnePost(req.params.id);
    res.send({status:"OK", data: onePost})
}

const createOnePost = (req,res) => {
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
    const createOnePost = dealerServices.createOnePost(newPost);
    res.status(201).send({status:"OK", data:createOnePost})
};

const updateOnePost = (req,res) => {
    const {body, params:{id}} = req
    if(!id){
        return res.status(400).json({msg:"No se encontro la publicacion"})
    }
    const updateOnePost = dealerServices.updateOnePost(id,body);
    res.status(200).send({status:"OK", data:updateOnePost})
}

const deleteOnePost = (req,res) => {
    const { params: {id}} = req;
    if(id){
        return res.status(400).json({msg:"No se encontro la Publicacion"})
    }
    const deleteOnePost= dealerServices.deleteOnePost(id)
    res.status(200).send({status:"OK", data:deleteOnePost})
}
const getOneLead = (req,res) => {
    const{
        params: {id}
    } = req

    if(!id){
        return res.status(400).json({msg:"not found"});
    }
    const oneLead = dealerServices.getOneLead(req.params.id);
    res.send({status:"OK", data: oneLead})
}

const createOneLead = (req,res) => {
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
    const createOnePost = dealerServices.createOnePost(newPost);
    res.status(201).send({status:"OK", data:createOnePost})
};

const updateOneLead = (req,res) => {
    const onePost = dealerServices.updateOnePost()
}

const deleteOneLead = (req,res) => {
    const onePost = dealerServices.deleteOnePost()
}
module.exports = {
    getAllDealer,
    getOneDealer,
    createOneDealer,
    updateOneDealer,
    deleteOneDealer,
    getOneVehicle,
    createOneVehicle,
    updateOneVehicle,
    deleteOneVehicle,
    getOneAccesory,
    createOneAccesory,
    updateOneAccesory,
    deleteOneAccesory,
    getOnePost,
    createOnePost,
    updateOnePost,
    deleteOnePost,
    getOneLead,
    createOneLead,
    updateOneLead,
    deleteOneLead
}