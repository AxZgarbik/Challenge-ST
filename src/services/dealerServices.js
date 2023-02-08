const prisma = require("../database/database.js")

const getAllDealer = () => {
    const allDealers = prisma.dealers.findMany();
    return allDealers;
}

const getOneDealer = (id) => {
    const dealer = prisma.dealers.findUnique({where:{id:id}});
    if (!dealer){
        return;
    }
    return dealer;

}

const createOneDealer = (newDealer) => {
    const dealer = prisma.dealers.create({
        data:newDealer
    });
    return dealer;

}

const updateOneDealer = (id,body) => {
    const dealer = prisma.dealers.update({
        where:{id:id},
        data:body
    });
    if(!dealer){
        return
    }
    return dealer;

}

const deleteOneDealer = (id) => {
    const dealer = prisma.dealers.delete({
        where:{id:id},
    });
    if(!dealer){
        return
    }
    return dealer;
}

const getOneVehicle = (id) => {
    const vehicle = prisma.vehicles.findUnique({where:{id:id}});
    if (!vehicle){
        return;
    }
    return vehicle;

}

const createOneVehicle = (newVehicle) => {
    const vehicle = prisma.vehicles.create({
        data:newVehicle
    });
    return vehicle;

}

const updateOneVehicle = (id,body) => {
    const vehicle = prisma.vehicles.update({
        where:{id:id},
        data:body
    });
    if(!vehicle){
        return
    }
    return vehicle;

}

const deleteOneVehicle = (id) => {
    const vehicle = prisma.vehicles.delete({
        where:{id:id},
    });
    if(!vehicle){
        return
    }
    return vehicle;
}

const getOneAccesory = (id) => {
    const accesory = prisma.accesories.findUnique({where:{id:id}});
    if (!accesory){
        return;
    }
    return accesory;

}

const createOneAccesory = (newAccesory) => {
    const accesory = prisma.accesories.create({
        data:newAccesory
    });
    return accesory;

}

const updateOneAccesory = (id,body) => {
    const accesory = prisma.accesories.update({
        where:{id:id},
        data:body
    });
    if(!accesory){
        return
    }
    return accesory;

}

const deleteOneAccesory = (id) => {
    const accesory = prisma.accesories.delete({
        where:{id:id},
    });
    if(!accesory){
        return
    }
    return accesory;
}

const getOnePost = (id) => {
    const post = prisma.posts.findUnique({where:{id:id}});
    if (!post){
        return;
    }
    return post;

}

const createOnePost = (newPost) => {
    const post = prisma.posts.create({
        data:newPost
    });
    return post;

}

const updateOnePost = (id,body) => {
    const post = prisma.posts.update({
        where:{id:id},
        data:body
    });
    if(!post){
        return
    }
    return post;

}

const deleteOnePost = (id) => {
    const post = prisma.posts.delete({
        where:{id:id},
    });
    if(!post){
        return
    }
    return post;
}

const getOneLead = (id) => {
    const post = prisma.leads.findUnique({where:{id:id}});
    if (!post){
        return;
    }
    return post;

}

const createOneLead = (newPost) => {
    const post = prisma.leads.create({
        data:newPost
    });
    return post;

}

const updateOneLead = (id,body) => {
    const post = prisma.leads.update({
        where:{id:id},
        data:body
    });
    if(!post){
        return
    }
    return post;

}

const deleteOneLead = (id) => {
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
    deleteOneLead,
}