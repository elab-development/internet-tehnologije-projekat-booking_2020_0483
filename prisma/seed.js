const {PrismaClient} = require('@prisma/client');
const {users, listings} = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.user.deleteMany();
        await prisma.listing.deleteMany();

        await prisma.user.createMany({
            data: users
        });
        console.log('Users are created successfully!');

        await prisma.listing.createMany({
            data: listings
        });
        console.log('Listing are created successfully!');
    } catch (e) {
        console.log(e);
    } finally {
        await prisma.$disconnect();
    }
}

load();
