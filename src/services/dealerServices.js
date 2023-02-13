const prisma = require("../database/database.js")

const getAllDealer = async () => {
    const allDealers = await prisma.dealer.findMany();
    return allDealers;
};


const getDealerById = async (id) => {
    const dealer = await prisma.dealer.findUnique({where:{id:parseInt(id)}});
    if (!dealer){
        return;
    }
    return dealer;
}

const createDealer = async (newDealer) => {
    const dealer = await prisma.dealer.create({
        data:newDealer
    });
    return dealer;

}

const updateDealer = (id,body) => {
    const dealer = prisma.dealer.update({
        where:{id:id},
        data:body
    });
    if(!dealer){
        return
    }
    return dealer;

}

const deleteDealer = (id) => {
    const dealer = prisma.dealer.delete({
        where:{id:id},
    });
    if(!dealer){
        return
    }
    return dealer;
}

const getAllVehicles = async () => {
    const allDealers = await prisma.vehicles.findMany({
        include:{var:true}
    });
    return allDealers;
};


const getAllVehiclesByDealerId = (id) => {
    const vehicles = prisma.vehicles.findMany({
        where:{dealerId:parseInt(id)},
        include:{var:true}}
        );
    if (!vehicles){
        return;
    }
    return vehicles;

}

const getVehicleById = (id) => {
    const vehicle = prisma.vehicles.findUnique({
        where:{id:parseInt(id)},
        include:{var:true}
    });
    if (!vehicle){
        return;
    }
    return vehicle;

}

const createVehicle = (newVehicle) => {
    const vehicle = prisma.vehicles.create({
        data:newVehicle
    });
    return vehicle;

}

const updateVehicle = (id,body) => {
    const vehicle = prisma.vehicles.update({
        where:{id:id},
        data:body
    });
    if(!vehicle){
        return
    }
    return vehicle;

}

const deleteVehicle = (id) => {
    const vehicle = prisma.vehicles.delete({
        where:{id:id},
    });
    if(!vehicle){
        return
    }
    return vehicle;
}

const getAllVariants = (id) => {
    const vehicles = prisma.variants.findMany({where:{vehicleId:parseInt(id)}});
    if (!vehicles){
        return;
    }
    return vehicles;

}

const getVariantById = (id) => {
    const vehicle = prisma.variants.findUnique({where:{id:id}});
    if (!vehicle){
        return;
    }
    return vehicle;

}

const createVariant = (newVariant) => {
    const vehicle = prisma.variants.create({
        data:newVariant
    });
    return vehicle;

}

const updateVariant = (id,body) => {
    const vehicle = prisma.variants.update({
        where:{id:id},
        data:body
    });
    if(!vehicle){
        return
    }
    return vehicle;

}

const deleteVariant = (id) => {
    const vehicle = prisma.variants.delete({
        where:{id:id},
    });
    if(!vehicle){
        return
    }
    return vehicle;
}

const getAccesoryById = (id) => {
    const accesory = prisma.accesories.findUnique({where:{id:id}});
    if (!accesory){
        return;
    }
    return accesory;

}

const createAccesory = (newAccesory) => {
    const accesory = prisma.accesories.create({
        data:newAccesory
    });
    return accesory;

}

const updateAccesory = (id,body) => {
    const accesory = prisma.accesories.update({
        where:{id:id},
        data:body
    });
    if(!accesory){
        return
    }
    return accesory;

}

const deleteAccesory = (id) => {
    const accesory = prisma.accesories.delete({
        where:{id:id},
    });
    if(!accesory){
        return
    }
    return accesory;
}

const getPostById = (id) => {
    const post = prisma.posts.findUnique({where:{id:id}});
    if (!post){
        return;
    }
    return post;

}

const createPost = (newPost) => {
    const post = prisma.posts.create({
        data:newPost
    });
    return post;

}

const updatePost = (id,body) => {
    const post = prisma.posts.update({
        where:{id:id},
        data:body
    });
    if(!post){
        return
    }
    return post;

}

const deletePost = (id) => {
    const post = prisma.posts.delete({
        where:{id:id},
    });
    if(!post){
        return
    }
    return post;
}

const getLeadById = (id) => {
    const post = prisma.leads.findUnique({where:{id:id}});
    if (!post){
        return;
    }
    return post;

}

const createLead = async (newLead) => {
    const lead = await prisma.leads.create({
        data:newLead
    });
    return lead;

}

const updateLead = (id,body) => {
    const post = prisma.leads.update({
        where:{id:id},
        data:body
    });
    if(!post){
        return
    }
    return post;

}

const deleteLead = (id) => {
    const post = prisma.leads.delete({
        where:{id:id},
    });
    if(!post){
        return
    }
    return post;
}

module.exports = {
    getAllDealer,
    getDealerById,
    createDealer,
    updateDealer,
    deleteDealer,
    getAllVehicles,
    getAllVehiclesByDealerId,
    getVehicleById,
    createVehicle,
    updateVehicle,
    deleteVehicle,
    getAllVariants,
    getVariantById,
    createVariant,
    updateVariant,
    deleteVariant,
    getAccesoryById,
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
    deleteLead,
}