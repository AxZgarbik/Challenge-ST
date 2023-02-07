const dealers = require("./seeds/dealers.json");
const vehicles= require("./seeds/vehicles.json");
const accessorys= require("./seeds/accessorys.json");
const posts=require("./seeds/posts.json")
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main(){
    const arrayPost=[];
    for (let dealer of dealers){
        await prisma.dealer.create({
            data: dealer
        })
    }
    for (let vehicle of vehicles){
        await prisma.vehicles.create({
            data: vehicle
        })
    }
    for (let accessory of accessorys){
        await prisma.accessory.create({
            data: accessory
        })
    }
    for (let post of posts){
        const { name, description, dealerId,arrayVehicles } = post;
        const postId = await prisma.post.create({
            data: {name,description,dealerId}
        });
        const newPost = [postId.id,arrayVehicles];
        arrayPost.push(newPost);
    }

    for (let post of arrayPost){
        for (let identify of post[1]) {
            let getVehicles = await prisma.vehicles.findUnique({
                where:{
                    identifier:identify
                }
            })
            await prisma.vehiclesOnPosts.create({
                data:{
                    postId: post[0],
                    vehicleId: getVehicles.id
                }
            })
        }
    }
}

main().catch(e =>{
    console.log(e)
    process.exit(1)
}).finally(()=>{
    prisma.$disconnect
})