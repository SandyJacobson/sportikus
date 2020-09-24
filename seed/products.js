const db = require('../db/connection')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const products = 
    [
      {
        name: "Bowflex Weights",
        price: "250",
        imgURLOne: "https://i.imgur.com/OCUxOV7.jpg",
        imgURLTwo: "https://i.imgur.com/mh6UxG6.jpg",
        imgURLThree: "https://i.imgur.com/dnF1spq.jpg",
        description: "This adjustable dumbbells, it comes with a unique dial system and plates in different sizes, allow you to adjust to desirable weights in this all-in-one equipment for multiple exercises. For this adjustable dumbbell set, just turn the dial, you could automatically change your resistance on each dumbbell from 5 lbs all the way up to 52.5 lbs of weight.",
        detail: "Weight Range: 5 to 52.5 lbs (2.27 to 23.8 kg) for each dumbbell. Exercises Available: 30+. Weight Settings: 15. Weight Settings in pounds: 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 30, 35, 40, 45, 50, and 52.5 lbs. Weight (Each): 52.5 lbs / 23.8 kg"
      },
      {
        name: "Spalding Basketball",
        price: "30",
        imgURLOne: "https://i.imgur.com/l0TNDbZ.jpg",
        imgURLTwo: "https://i.imgur.com/H8SJxWO.jpg",
        imgURLThree: "https://i.imgur.com/ZNu4vr1.jpg",
        description: "Basketball never stays still. Every player puts their own spin on the game, so it moves, morphs and shifts with the legends who shape it. For a game that's forever in flux, few things stay as consistent as the Spalding NBA Official Game Ball. For over three decades, Spalding has joined forces with the league to create the gold standard basketball. This ball is designed to feel like second nature in the hands of the legends who wield it. Strictly made for the hardwood, it has a full grain leather construction that turns butter-soft once broken in.",
        detail: "Official size: Size 7, 29.5"
      },
      {
        name: "NordicTrack T Series Treadmill",
        price: "1000",
        imgURLOne: "https://i.imgur.com/nCePHdC.png",  
        imgURLTwo: "https://i.imgur.com/a6L9Evn.png",
        imgURLThree: "https://i.imgur.com/baa5PuK.png",
        description: "Comfortable Running: Equipped with an advanced shock-absorbing system, deck cushioning mechanism and 5-layer compressed tread belt, our electric motorized treadmill effectively absorbs impacts and protects your knees, offering you a comfortable running experience.",
        detail: "Item dimensions (unfolded): 73 L x 36 W x 54 H - User weight capacity: 300 pounds Item dimensions (folded): 38' L x 36' W x 67.5' H. 22' x 55' Tread belt"
      },
      {
        name: "Javelin",
        price: "100",
        imgURLOne: "https://i.imgur.com/9jMQvsL.png",
        imgURLTwo: "https://i.imgur.com/dHRt4Oy.png",
        imgURLThree: "https://i.imgur.com/ybFY63G.png",
        description: "Our Javelin comes in quality and style unavailable from competing products. The TIP is made from HIGH-QUALITY stainless steel, so unlike our competitors, our javs. WILL NOT RUST. The Spear will look awesome as it TWIRLS through the air with its Vivid High Definition Spiral Paint job. Our Javelin Handles allow the thrower to take an Incredible Grip. You will love the way it feels in your hand. Will Last For Years! Fluttering is negative to throwing because it creates more wind resistance. Our javs., with their stiffness, have less flutter and glide through the air which means they are ABLE TO FLY FARTHER",
        detail: "Yellow and Slate Gray, smooth finish",
      },
      {
        name: "Nike Mercurial Superfly 7 Academy MG",
        price: "85",
        imgURLOne: "https://i.imgur.com/bXno3Pp.png",
        imgURLTwo: "https://i.imgur.com/EE7U9Yo.png",
        imgURLThree: "https://i.imgur.com/a5yRIkl.png",
        description: "Building on the forefoot plate innovation of the 6, the Nike Mercurial Superfly 7 Academy MG Cleat adds a versatile multi-ground plate that provides traction on natural- and artificial-grass surfaces",
        detail: "color: yellow",
      },
      {
        name: "BESPORTBLE Fitness Dumbbell 30kg",
        price: "200",
        imgURLOne: "https://i.imgur.com/boxNU2J.jpg",
        imgURLTwo: "https://i.imgur.com/jQgsjqt.jpg",
        imgURLThree: "https://i.imgur.com/k1Pgar3.jpg",
        description: "The dumbbell weight set, includes 16 dumbell plates, 2 extension bars, 4 safety nuts, you can assemble them into 2 dumbbells, perfect for a whole-body workout and can help you achieve whatever fitness goals you have, without leaving the house. With ergonomic design, texture technology, non-slip extension bar, adjustable weight. It will help you work out muscular imbalances, and maintain a healthy body!",
        detail: "25lbs set",
      },
      {
        name: "Golf Clubs",
        price: "250",
        imgURLOne: "https://i.imgur.com/ruNHgQF.png",
        imgURLTwo: "https://i.imgur.com/hQFj5tD.png",
        imgURLThree: "https://i.imgur.com/KSezUYC.png",
        description: "Speed Bridge: Revolutionary Speed Bridge technology strategically supports the topline of the iron to unlock explosive distance and forgiveness with improved sound and fee. ECHO Damping System: Designed with energy channeling geometry to quickly eliminate harsh vibrations at impact delivering better feel without sacrificing face flexibility. Speed Pocket: Patented TaylorMade technology engineered to maximize face flexibility for increased ball speed and forgiveness on low face strike. Ultra Thin Face: Ultra thin 1. 5mm face design with Progressive Inverted Cone Technology delivers extreme ball speed across the face with an enhanced sweet spot designed to promote a straighter ball flight. Progressive Inverted Cone Technology: Inverted Cone Technology (ICT) is now uniquely positioned on each iron face to both increase the sweet spot and minimize side spin on mishits promoting a straighter ball flight",
        detail: "Teal and Gray, comes with 8 clubs"
      },
      {
        name: "NIKE AIR ZOOM PEGASUS 37 RUNNING SHOES",
        price: "120",
        imgURLOne: "https://i.imgur.com/ckRvbwu.png",
        imgURLTwo: "https://i.imgur.com/tjr0ts8.jpg",
        imgURLThree: "https://i.imgur.com/aQRVvxi.jpg",
        description: "Hit the ground running in the Men's Nike Air Zoom Pegasus 37 Running Shoes. More comfortable and springy than ever, these sneakers are lightweight, breathable and cushioned",
        detail: "color: white"
      },
      {
        name: "Lavender Pullover Graphic Hoodie",
        price: "50",
        imgURLOne: "https://i.imgur.com/apYA6FJ.jpg",
        imgURLTwo: "https://i.imgur.com/YM5Ww7q.jpg",
        imgURLThree: "https://i.imgur.com/i5JY5XA.jpg",
        description: "80% Cotton, 20% Polyester. Made in KOREA. Basic One-Color Pullover Hoodie Sweatshirt for Women. DCF019-None ribbed trims at cuffs and waistband / Pull on closure / White color string. Lightweight and soft special double-sided fabric, Cotton with Spandex fabric. Regular fit, DCF019- 19 colors in 8 (U.S) sizes are available. Ribbed trims at cuffs and waistband / Kanga pocket / Long sleeve / Drawstring with metal tips / The product does not use rivets for protecting holes in the hood. The fine and sensitive material from the rivet can damage the fabric",
        detail: "One-color (Dcf019)-lavender"
      },
      {
        name: "Nike Women's Basketball Short",
        price: "50",
        imgURLOne: "https://i.imgur.com/bBa7eQX.png",
        imgURLTwo: "https://i.imgur.com/fsoFRo0.png",
        imgURLThree: "https://i.imgur.com/cnNgtEh.png",
        description: "Elastic closure. Russell Athletic Shorts, Covered elastic waistband and drawcord, Breathable mesh fabric, Active shorts Athletic cut and superior fit 7 1/2 inseam, Machine Wash Cold",
        detail: "Mesh, Black and Pink detailing"
      }
    ]

    await Product.insertMany(products)
    console.log("Created products!")
}
const run = async () => {
    await main()
    db.close()
}

run()