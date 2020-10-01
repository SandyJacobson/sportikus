const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      name: "Bowflex Weights",
      price: "$250",
      imgURLOne: "https://i.imgur.com/OCUxOV7.jpg",
      imgURLTwo: "https://i.imgur.com/mh6UxG6.jpg",
      imgURLThree: "https://i.imgur.com/dnF1spq.jpg",
      description:
        "This adjustable dumbbells, it comes with a unique dial system and plates in different sizes, allow you to adjust to desirable weights in this all-in-one equipment for multiple exercises. For this adjustable dumbbell set, just turn the dial, you could automatically change your resistance on each dumbbell from 5 lbs all the way up to 52.5 lbs of weight.",
      detail:
        "Weight Range: 5 to 52.5 lbs (2.27 to 23.8 kg) for each dumbbell. Exercises Available: 30+. Weight Settings: 15. Weight Settings in pounds: 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 30, 35, 40, 45, 50, and 52.5 lbs. Weight (Each): 52.5 lbs / 23.8 kg",
      reviews: [
        {
          title: "It's worth it for the lawsuit",
          rating: 5,
          content: "The weights fell off and hit my foot and now I can't walk. Great product though.",
          date: "09/21/2020",
          author: "Tyler H.",
          location: "New York, NY",
        }
      ],
    },
    {
      name: "Basketball",
      price: "$30",
      imgURLOne: "https://i.imgur.com/l0TNDbZ.jpg",
      imgURLTwo: "https://i.imgur.com/H8SJxWO.jpg",
      imgURLThree: "https://i.imgur.com/ZNu4vr1.jpg",
      description:
        "Basketball never stays still. Every player puts their own spin on the game, so it moves, morphs and shifts with the legends who shape it. For a game that's forever in flux, few things stay as consistent as the Spalding NBA Official Game Ball. For over three decades, Spalding has joined forces with the league to create the gold standard basketball. This ball is designed to feel like second nature in the hands of the legends who wield it. Strictly made for the hardwood, it has a full grain leather construction that turns butter-soft once broken in.",
      detail: "Official size: Size 7, 29.5",
      reviews: [
        {
          title: "I should have never skipped gym class",
          rating: 3,
          content: "I still don't know how to play basketball. Why isn't it working???",
          date: "09/29/2021",
          author: "Bruno G.",
          location: "Scranton, PA",
        },
        {
          title: "thy ball is most wondrous",
          rating: 4,
          content: "I've been playing for 600 years and not once has this ball deflated. AWESOMMMMME! Rating this 4 because shipping was awful.",
          date: "08/24/1452",
          author: "Mick R.",
          location: "Brooklyn, NYC",
        },
        {
          title: "Why can't all basketballs be the same color????",
          rating: 1,
          content: "As a professional player, I am saddened that your product is not more orange.",
          date: "07/04/2020",
          author: "Megan B.",
          location: "Brooklyn, NY",
        }
      ],
    },
    {
      name: "Treadmill",
      price: "$1000",
      imgURLOne: "https://i.imgur.com/nCePHdC.png",
      imgURLTwo: "https://i.imgur.com/a6L9Evn.png",
      imgURLThree: "https://i.imgur.com/baa5PuK.png",
      description:
        "Comfortable Running: Equipped with an advanced shock-absorbing system, deck cushioning mechanism and 5-layer compressed tread belt, our electric motorized treadmill effectively absorbs impacts and protects your knees, offering you a comfortable running experience.",
      detail:
        "Item dimensions (unfolded): 73 L x 36 W x 54 H - User weight capacity: 300 pounds Item dimensions (folded): 38' L x 36' W x 67.5' H. 22' x 55' Tread belt",
      reviews: [
        {
          title: "I need to go faster!!!",
          rating: 2,
          content: "Why are there only two speeds ???",
          date: "10/26/2020",
          author: "Sandy J.",
          location: "The Shire, NJ",
        },
        {
          title: "I can work and watch TV at the same time!",
          rating: 5,
          content: "I got mine at a discount and it was sweeeeeeeet! Also looks great in my living room!",
          date: "05/26/2020",
          author: "Breeana J.",
          location: "Atlanta, GA",
      }
      ],
    },
    {
      name: "Javelin",
      price: "$100",
      imgURLOne: "https://i.imgur.com/9jMQvsL.png",
      imgURLTwo: "https://i.imgur.com/dHRt4Oy.png",
      imgURLThree: "https://i.imgur.com/ybFY63G.png",
      description:
        "Our Javelin comes in quality and style unavailable from competing products. The TIP is made from HIGH-QUALITY stainless steel, so unlike our competitors, our javs. WILL NOT RUST. The Spear will look awesome as it TWIRLS through the air with its Vivid High Definition Spiral Paint job. Our Javelin Handles allow the thrower to take an Incredible Grip. You will love the way it feels in your hand. Will Last For Years! Fluttering is negative to throwing because it creates more wind resistance. Our javs., with their stiffness, have less flutter and glide through the air which means they are ABLE TO FLY FARTHER",
      detail: "Yellow and Slate Gray, smooth finish",
      reviews: [
        {
          title: "best tool to train hunting with",
          rating: 4,
          content: "I got this as a gift from GamGam. its like throwing and axe, but except that its a javelin....",
          date: "09/04/2020",
          author: "Alex P.",
          location: "Boise, ID",
        },
        {
          title: "10 out of 10 if I could rate it that, would buy again",
          rating: 5,
          content: "Perfect for whale hunting!",
          date: "09/04/2020",
          author: "Diane S.",
          location: "New York, NY",
        },
        {
          title: "might aswell just use a butter knife",
          rating: 1,
          content: "This is literally plastic.",
          date: "09/10/2020",
          author: "Isiah C.",
          location: "Queens, NY",
        }
      ],
    },
    {
      name: "Yellow Cleat",
      price: "$85",
      imgURLOne: "https://i.imgur.com/bXno3Pp.png",
      imgURLTwo: "https://i.imgur.com/EE7U9Yo.png",
      imgURLThree: "https://i.imgur.com/a5yRIkl.png",
      description:
        "Building on the forefoot plate innovation of the 6, the Nike Mercurial Superfly 7 Academy MG Cleat adds a versatile multi-ground plate that provides traction on natural- and artificial-grass surfaces",
      detail: "color: yellow",
      reviews: [
        {
          title: "not happy",
          rating: 1,
          content: "DON'T GET THESE. MADE WITH CHILD LABOR.",
          date: "09/10/2020",
          author: "Emma N.",
          location: "Chicago, IL",
        }
      ],
    },
    {
      name: "Weight Set",
      price: "$200",
      imgURLOne: "https://i.imgur.com/boxNU2J.jpg",
      imgURLTwo: "https://i.imgur.com/jQgsjqt.jpg",
      imgURLThree: "https://i.imgur.com/k1Pgar3.jpg",
      description:
        "The dumbbell weight set, includes 16 dumbell plates, 2 extension bars, 4 safety nuts, you can assemble them into 2 dumbbells, perfect for a whole-body workout and can help you achieve whatever fitness goals you have, without leaving the house. With ergonomic design, texture technology, non-slip extension bar, adjustable weight. It will help you work out muscular imbalances, and maintain a healthy body!",
      detail: "25lbs set",
      reviews: [
        {
          title: "Amazing",
          rating: 5,
          content: "I lose 800 pound from dum bell. Now I crush man's skull.",
          date: "08/10/2020",
          author: "Ash G.",
          location: "Denver, CO",
        },
        {
          title: "Good but expensive",
          rating: 3,
          content: "WHY ARE THESE 200 DOLLARS????",
          date: "08/10/2020",
          author: "Ashley K.",
          location: "San Francisco, CA",
        },
        {
          title: "SICK WEIGHTS",
          rating: 5,
          content: "Better than going to the gym!! JUST GET THESE.",
          date: "08/16/2020",
          author: "Chris A.",
          location: "Florida, CA",
        }
      ],
    },
    {
      name: "Golf Clubs",
      price: "$250",
      imgURLOne: "https://i.imgur.com/ruNHgQF.png",
      imgURLTwo: "https://i.imgur.com/hQFj5tD.png",
      imgURLThree: "https://i.imgur.com/KSezUYC.png",
      description:
        "Speed Bridge: Revolutionary Speed Bridge technology strategically supports the topline of the iron to unlock explosive distance and forgiveness with improved sound and fee. ECHO Damping System: Designed with energy channeling geometry to quickly eliminate harsh vibrations at impact delivering better feel without sacrificing face flexibility. Speed Pocket: Patented TaylorMade technology engineered to maximize face flexibility for increased ball speed and forgiveness on low face strike. Ultra Thin Face: Ultra thin 1. 5mm face design with Progressive Inverted Cone Technology delivers extreme ball speed across the face with an enhanced sweet spot designed to promote a straighter ball flight. Progressive Inverted Cone Technology: Inverted Cone Technology (ICT) is now uniquely positioned on each iron face to both increase the sweet spot and minimize side spin on mishits promoting a straighter ball flight",
      detail: "Teal and Gray, comes with 8 clubs",
      reviews: [
        {
          title: "Wowowowowow.",
          rating: 5,
          content: "Great for melee!!",
          date: "10/13/2020",
          author: "Matthew M.",
          location: "Keane, TX",
        },
        {
          title: "The four clubs are pretty good.",
          rating: 5,
          content: "Says it comes with 8 clubs but I only got 4.",
          date: "05/29/2020",
          author: "Ahsik U.",
          location: "New York, NY",
        },
      ],
    },
    {
      name: "Nike Stride",
      price: "$120",
      imgURLOne: "https://i.imgur.com/ckRvbwu.png",
      imgURLTwo: "https://i.imgur.com/tjr0ts8.jpg",
      imgURLThree: "https://i.imgur.com/aQRVvxi.jpg",
      description:
        "Hit the ground running in the Men's Nike Air Zoom Pegasus 37 Running Shoes. More comfortable and springy than ever, these sneakers are lightweight, breathable and cushioned",
      detail: "color: white",
      reviews: [
        {
          title: "Bleh.",
          rating: 3,
          content: "Raises my agility stat like mayyyyybe half a point? Not worth the money.",
          date: "12/01/2020",
          author: "Ken I.",
          location: "Oakland, CA",
        },
        {
          title: "No good.",
          rating: 1,
          content: "I could make this with 2 beaver pellets.",
          date: "02/08/2020",
          author: "Ken P.",
          location: "Las Cruces, NM",
        },
      ],
    },
    {
      name: "Hoodie",
      price: "$50",
      imgURLOne: "https://i.imgur.com/apYA6FJ.jpg",
      imgURLTwo: "https://i.imgur.com/YM5Ww7q.jpg",
      imgURLThree: "https://i.imgur.com/i5JY5XA.jpg",
      description:
        "80% Cotton, 20% Polyester. Made in KOREA. Basic One-Color Pullover Hoodie Sweatshirt for Women. DCF019-None ribbed trims at cuffs and waistband / Pull on closure / White color string. Lightweight and soft special double-sided fabric, Cotton with Spandex fabric. Regular fit, DCF019- 19 colors in 8 (U.S) sizes are available. Ribbed trims at cuffs and waistband / Kanga pocket / Long sleeve / Drawstring with metal tips / The product does not use rivets for protecting holes in the hood. The fine and sensitive material from the rivet can damage the fabric",
      detail: "One-color (Dcf019)-lavender",
      reviews: [
        {
          title: "Not the right size...",
          rating: 5,
          content: "Got it in black and it feels like BUTTAHHHHHHH.",
          date: "10/04/2020",
          author: "Brianna L.",
          location: "Detroit, MI",
        },
      ],
    },
    {
      name: "Black Shorts",
      price: "$50",
      imgURLOne: "https://i.imgur.com/bBa7eQX.png",
      imgURLTwo: "https://i.imgur.com/fsoFRo0.png",
      imgURLThree: "https://i.imgur.com/cnNgtEh.png",
      description:
        "Elastic closure. Russell Athletic Shorts, Covered elastic waistband and drawcord, Breathable mesh fabric, Active shorts Athletic cut and superior fit 7 1/2 inseam, Machine Wash Cold",
      detail: "Mesh, Black and Pink detailing",
      reviews: [
        {
          title: "Not the right size...",
          rating: 2,
          content: "Got these for my niece but they were triple XL...",
          date: "07/14/2015",
          author: "Aleks B.",
          location: "Chicago, IL",
        },
        {
          title: "ITS SO FLUFFYYYY!!!",
          rating: 5,
          content: "SO COMFY!!",
          date: "06/08/2010",
          author: "Pilar B.",
          location: "Tar Heel, NC",
        },
      ],
    },
  ];

  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();
