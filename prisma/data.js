const {Prisma} = require('@prisma/client');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const users = [
    {
        id: '662cd804792a1a50136c9c36',
        name: "host",
        email: "host",
        hashedPassword: bcrypt.hashSync('host', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: '6630b8dd6cdf2b665ca7d44c',
        name: "guest",
        email: "guest",
        hashedPassword: bcrypt.hashSync('guest', salt),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
const listings = [
    {
        title: "Beachfront Villa",
        description: "A stunning villa located right by the beach!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486274/d5kllne2qyjnsobde5gm.webp",
        createdAt: new Date(),
        category: "Beach",
        roomCount: 3,
        bathroomCount: 2,
        guestCount: 6,
        locationValue: "BZ", // Initials for Belize
        userId: "662cd804792a1a50136c9c36",
        price: 250
    },
    {
        title: "Windmill House",
        description: "A cozy house with a view of windmills!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486274/t6gfpr2qurbazhv9v7bs.jpg",
        createdAt: new Date(),
        category: "Windmills",
        roomCount: 2,
        bathroomCount: 1,
        guestCount: 4,
        locationValue: "NL", // Initials for Netherlands
        userId: "662cd804792a1a50136c9c36",
        price: 150
    },
    {
        title: "Modern City Apartment",
        description: "A stylish apartment in the heart of the city!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486274/cwvaki5rjzunvqtrzstk.jpg",
        createdAt: new Date(),
        category: "Modern",
        roomCount: 2,
        bathroomCount: 1,
        guestCount: 4,
        locationValue: "US", // Initials for United States
        userId: "662cd804792a1a50136c9c36",
        price: 180
    },
    {
        title: "Countryside Retreat",
        description: "A charming cottage in the peaceful countryside!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486273/xzffgu2irtdzhnkem1vc.webp",
        createdAt: new Date(),
        category: "Countryside",
        roomCount: 1,
        bathroomCount: 1,
        guestCount: 2,
        locationValue: "FR", // Initials for France
        userId: "662cd804792a1a50136c9c36",
        price: 120
    },
    {
        title: "Poolside Paradise",
        description: "A luxurious villa with a beautiful pool!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486273/vxnwc9x2ddhbc0rkfitw.jpg",
        createdAt: new Date(),
        category: "Pools",
        roomCount: 4,
        bathroomCount: 3,
        guestCount: 8,
        locationValue: "ES", // Initials for Spain
        userId: "662cd804792a1a50136c9c36",
        price: 300
    },
    {
        title: "Island Getaway",
        description: "A cozy cottage on a secluded island!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486273/zzr29lkhunns3idpufoc.jpg",
        createdAt: new Date(),
        category: "Islands",
        roomCount: 1,
        bathroomCount: 1,
        guestCount: 2,
        locationValue: "FI", // Initials for Finland
        userId: "662cd804792a1a50136c9c36",
        price: 200
    },
    {
        title: "Lakeside Cabin",
        description: "A rustic cabin near a serene lake!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486273/u1idmbdi5gguz8b3gm2z.avif",
        createdAt: new Date(),
        category: "Lake",
        roomCount: 2,
        bathroomCount: 1,
        guestCount: 4,
        locationValue: "CA", // Initials for Canada
        userId: "662cd804792a1a50136c9c36",
        price: 130
    },
    {
        title: "Ski Chalet",
        description: "A cozy chalet for your skiing adventures!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486272/cgw2u1bubyjy9vrdezcn.jpg",
        createdAt: new Date(),
        category: "Skiing",
        roomCount: 3,
        bathroomCount: 2,
        guestCount: 6,
        locationValue: "CH", // Initials for Switzerland
        userId: "662cd804792a1a50136c9c36",
        price: 280
    },
    {
        title: "Ancient Castle",
        description: "Experience the grandeur of an ancient castle!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486272/ho5xtvdnebflmnibtszw.webp",
        createdAt: new Date(),
        category: "Castles",
        roomCount: 10,
        bathroomCount: 5,
        guestCount: 20,
        locationValue: "GB", // Initials for United Kingdom
        userId: "662cd804792a1a50136c9c36",
        price: 1000
    },
    {
        title: "Spooky Cave Retreat",
        description: "An adventurous stay in a mysterious cave!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486273/tm94gmjoyjwtywztv93q.jpg",
        createdAt: new Date(),
        category: "Caves",
        roomCount: 1,
        bathroomCount: 0,
        guestCount: 2,
        locationValue: "AU", // Initials for Australia
        userId: "662cd804792a1a50136c9c36",
        price: 80
    },
    {
        title: "Rustic Camping Site",
        description: "Experience nature in a rustic camping site!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486272/zyswem4m2twn4a7j57hx.webp",
        createdAt: new Date(),
        category: "Camping",
        roomCount: 0,
        bathroomCount: 0,
        guestCount: 4,
        locationValue: "CA", // Initials for Canada
        userId: "662cd804792a1a50136c9c36",
        price: 50
    },
    {
        title: "Arctic Cabin",
        description: "A cozy cabin in the midst of arctic wilderness!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486272/mh2dhgsxful4blcxitba.webp",
        createdAt: new Date(),
        category: "Arctic",
        roomCount: 2,
        bathroomCount: 1,
        guestCount: 4,
        locationValue: "NO", // Initials for Norway
        userId: "662cd804792a1a50136c9c36",
        price: 180
    },
    {
        title: "Desert Oasis",
        description: "A luxurious oasis in the midst of the desert!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486273/esh1v9jyv3xq1c4xgjzj.webp",
        createdAt: new Date(),
        category: "Desert",
        roomCount: 3,
        bathroomCount: 2,
        guestCount: 6,
        locationValue: "SA", // Initials for Saudi Arabia
        userId: "662cd804792a1a50136c9c36",
        price: 300
    },
    {
        title: "Rustic Barn House",
        description: "Experience farm life in a rustic barn house!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486272/mwziaaeld65ndvzgm1x2.jpg",
        createdAt: new Date(),
        category: "Barns",
        roomCount: 3,
        bathroomCount: 2,
        guestCount: 6,
        locationValue: "US", // Initials for United States
        userId: "662cd804792a1a50136c9c36",
        price: 200
    },
    {
        title: "Luxurious Mansion",
        description: "Indulge in luxury in this extravagant mansion!",
        imageSrc: "https://res.cloudinary.com/dwf9dvqj5/image/upload/v1714486272/y9ntdmyp0yuj1ce7q85x.webp",
        createdAt: new Date(),
        category: "Lux",
        roomCount: 10,
        bathroomCount: 5,
        guestCount: 20,
        locationValue: "US", // Initials for United States
        userId: "662cd804792a1a50136c9c36",
        price: 1500
    }
];

module.exports = {
    users, listings
}