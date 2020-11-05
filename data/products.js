const products = [
  // LAUNDRY BAG
  {
    name: 'Adder',
    image:
      'https://i.pinimg.com/originals/4b/60/87/4b6087175458ccc489c23f4985b9cb06.jpg',
    description:
      'With its lively zigzag pattern, the Adder blue seagrass laundry basket with lid combines functionality with distinctive design.',
    brand: 'Apple',
    category: 'Laundry Bag',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Latimer',
    image:
      'https://i.pinimg.com/originals/ef/84/15/ef84152856d850e7adc3e8e86e52397d.png',
    description:
      'The Latimer woven water hyacinth laundry basket with 2 sections provides a stylish storage solution for your washing.',
    brand: 'Apple',
    category: 'Laundry Bag',
    price: 69.99,
    countInStock: 10,
    rating: 3.5,
    numReviews: 11,
  },
  {
    name: 'Idaho',
    image:
      'https://i.pinimg.com/474x/38/53/85/38538533b553973d23fdb6443c11cc45.jpg',
    description:
      'The Idaho small bamboo lidded storage trunk features a striking combination of zigzags and stripes in black and neutral.',
    brand: 'Apple',
    category: 'Laundry Bag',
    price: 59.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 18,
  },
  {
    name: 'Misto',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61EC9sR3ZhL._AC_SL1500_.jpg',
    description:
      'An extremely useful and practical Misto natural wooden clothes airer is a traditional design made from solid beech wood.',
    brand: 'Apple',
    category: 'Laundry Bag',
    price: 29.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Jericho',
    image:
      'https://i.pinimg.com/736x/4c/12/06/4c12065ed4c896542fc00a8b621d27b6.jpg',
    description:
      'The Jericho striped black and sand woven cotton laundry bin is a timeless design with removable rods that allow it be collapsed for easy storage.',
    brand: 'Apple',
    category: 'Laundry Bag',
    price: 19.99,
    countInStock: 10,
    rating: 4.0,
    numReviews: 2,
  },
  {
    name: 'Penny',
    image:
      'https://i.pinimg.com/originals/a4/56/73/a45673a6e2e1a91d9f8a85da4b31a216.png',
    description:
      'Showcasing an on-trend design, the Penny black and white spot canvas laundry bin is a versatile design that’s perfect for storing washing.',
    brand: 'Apple',
    category: 'Laundry Bag',
    price: 19.99,
    countInStock: 10,
    rating: 4.0,
    numReviews: 10,
  },
  {
    name: 'Salvador',
    image:
      'https://i.pinimg.com/736x/03/26/f1/0326f1df656f90485c0e334dd24df9f9.jpg',
    description:
      'The Salvador black and white set of 3 woven cord fabric storage baskets is a soft and squishy design that adds pattern and texture to a bathroom.',
    brand: 'Apple',
    category: 'Laundry Bag',
    price: 19.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 20,
  },
  {
    name: 'Nelson',
    image:
      'https://i.pinimg.com/originals/d8/c1/c4/d8c1c423c76b8e45ed2db11b45d97e8e.png',
    description:
      'Store your laundry in style with the Nelson natural folding linen laundry basket with wooden frame.',
    brand: 'Apple',
    category: 'Laundry Bag',
    price: 34.99,
    countInStock: 10,
    rating: 2.5,
    numReviews: 33,
  },
  {
    name: 'Scallop',
    image:
      'https://s3.eu-west-2.amazonaws.com/imagerepositorypressloft/clients/31512/m/6771317_m.jpg',
    description:
      'The Scallop mustard printed cotton drawstring laundry bag is a versatile design that’s perfect for laundry or travelling.',
    brand: 'Apple',
    category: 'Laundry Bag',
    price: 7.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 45,
  },
  // KID STORAGE
  {
    name: 'STUVA / FRITIDS 1',
    image:
      'https://www.ikea.com/us/en/images/products/stuva-fritids-wardrobe-white-white__0614973_PE687099_S5.JPG?f=xl',
    description:
      'Your child can use this wardrobe for many years since it is deep enough to hold adult-sized hangers and has an interior which you can move as your child grows. The open shelves are perfect for books, collectables or to display things like pictures, prizes or art projects.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 405.99,
    countInStock: 10,
    rating: 4.0,
    numReviews: 22,
  },
  {
    name: 'SUNDVIK',
    image:
      'https://www.ikea.com/us/en/images/products/sundvik-wardrobe-white__0626568_PE692872_S5.JPG?f=xl',
    description:
      'Kid Wardrobe is deep enough to hold standard-sized adult hangers. Doors with silent soft-closing damper',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 199.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'GODISHUS',
    image:
      'https://www.ikea.com/us/en/images/products/godishus-wardrobe-white__0721180_PE735622_S5.JPG?f=xl',
    description:
      'You can position the shelf and clothes rail in two different ways – clothes rail at the top and shelf down below, or both together at the top of the wardrobe.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 69.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 33,
  },
  {
    name: 'SUNDVIK',
    image:
      'https://www.ikea.com/us/en/images/products/sundvik-wardrobe-black-brown__0626569_PE692873_S5.JPG?f=xl',
    description:
      'Doors with silent soft-closing damper. Deep enough to hold standard-sized adult hangers.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 229.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 5,
  },
  {
    name: 'STUVA / FRITIDS 2',
    image:
      'https://www.ikea.com/us/en/images/products/stuva-fritids-wardrobe-with-storage-bench-white-white__0586103_PE671958_S5.JPG?f=xl',
    description:
      'Your child can use this wardrobe for many years since it is deep enough to hold adult-sized hangers and has an interior which you can move as your child grows. The open shelves are perfect for books, collectables or to display things like pictures, prizes or art projects.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 308.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'TROFAST 1',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-light-white-stained-pine-white__0351236_PE547495_S5.JPG?f=xl',
    description:
      'A playful and sturdy storage series for storing and organizing toys, sitting, playing, and relaxing.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 91.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'TROFAST 2',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white__0545786_PE655692_S5.JPG?f=xl',
    description:
      'Storage combination with boxes. The frame comes with guide rails, so you can place boxes and shelves where you want them, and change them any time.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 68.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'TROFAST 3',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0535760_PE649618_S5.JPG?f=xl',
    description:
      'Storage combination with boxes. The frame comes with guide rails, so you can place boxes and shelves where you want them, and change them any time.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 66.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'TROFAST 4',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0383745_PE558437_S5.JPG?f=xl',
    description:
      'Storage combination with boxes. The frame comes with guide rails, so you can place boxes and shelves where you want them, and change them any time.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 54.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'TROFAST 5',
    image:
      'https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-black-white__0541368_PE653558_S5.JPG?f=xl',
    description:
      'Storage combination with boxes. The frame comes with guide rails, so you can place boxes and shelves where you want them, and change them any time.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 69.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 62,
  },
  {
    name: 'Wall Cabinet',
    image:
      'https://www.ikea.com/us/en/images/products/stuva-fritids-wall-cabinet-white-light-blue__0720877_PE732919_S5.JPG?f=xl',
    description:
      'A practical and dust-free way to store small and large things – or to hide the chaos that often arises when it comes to children’s things. Perfect height for small children. They can easily reach and find things on their own.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 57.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'STUVA / FÖLJA 1',
    image:
      'https://www.ikea.com/us/en/images/products/stuva-foelja-storage-combination-with-bench-white__0627356_PE693310_S5.JPG?f=xl',
    description:
      'With the included colorful stickers, you can quickly label drawers and cabinets in your own personal way',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 339.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'STUVA / FÖLJA 2',
    image:
      'https://www.ikea.com/us/en/images/products/stuva-foelja-6-drawer-dresser-white__0609940_PE684706_S5.JPG?f=g',
    description:
      '6-drawer dresser. A practical and dust-free way to store small and large things – or to hide the chaos that often arises when it comes to children’s things. Perfect height for small children. They can easily reach and find things on their own. ',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 169.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'STUVA / FRITIDS',
    image:
      'https://www.ikea.com/us/en/images/products/stuva-fritids-loft-bed-with-4-drawers-2-doors-white-white__0876668_PE676524_S5.JPG?f=xl',
    description:
      'With this loft bed you get a complete solution for your child’s room – including desk, wardrobe and open shelf unit. You can assemble the desk parallel, perpendicular, or complete with 2 ADILS legs for a free-standing desk.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 489.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'UPPRYMD',
    image:
      'https://www.ikea.com/us/en/images/products/upprymd-box-black-yellow-turquoise__0831122_PE776969_S5.JPG?f=xl',
    description:
      'Everything in its place. With a box it is easier to keep track of all your little things.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 11.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'NÖJSAM',
    image:
      'https://www.ikea.com/us/en/images/products/noejsam-box-and-basket-gray__0656611_PE709430_S5.JPG?f=xl',
    description:
      'Everything in its place. With a box it is easier to keep track of all your little things. The box is made of 100% polyester, a durable material which is tested, approved, and free from harmful substances and additives.',
    brand: 'Apple',
    category: 'Kid storage and organizer',
    price: 9.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'MYLLRA',
    image:
      'https://www.ikea.com/us/en/images/products/myllra-changing-table-with-drawers-white__0812339_PE776804_S5.JPG?f=xl',
    description:
      'The front of the changing table can be removed and transformed into a decorative wall shelf when your child is past the diaper stage. ',
    brand: 'Apple',
    category: 'Changing Table',
    price: 199.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'SNIGLAR',
    image:
      'https://www.ikea.com/us/en/images/products/sniglar-changing-table-beech-white__0627303_PE693287_S5.JPG?f=xl',
    description:
      'Comfortable height for changing the baby. Practical storage space within close reach. You can always keep a hand on your baby.',
    brand: 'Apple',
    category: 'Changing Table',
    price: 34.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'SMÅGÖRA',
    image:
      'https://www.ikea.com/us/en/images/products/smagoera-changing-table-bookshelf-white__0597193_PE677022_S5.JPG?f=xl',
    description:
      'Comfortable height for changing the baby. Practical storage space within close reach. You can always keep a hand on your baby.',
    brand: 'Apple',
    category: 'Changing Table',
    price: 69.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'ÖNSKLIG',
    image:
      'https://www.ikea.com/us/en/images/products/oensklig-racks-for-changing-table-set-of-4-white__0711380_PE728172_S5.JPG?f=xl',
    description:
      'With these storage baskets you can have everything from diapers and washcloths to skin care products and towels close at hand by the changing table. Perfect when you have a lively baby who requires all of your attention.',
    brand: 'Apple',
    category: 'Changing Table',
    price: 9.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'VÄDRA',
    image:
      'https://www.ikea.com/us/en/images/products/vaedra-changing-pad__0606116_PE682034_S5.JPG?f=xl',
    description:
      'The first diaper changes can feel like a real challenge, but with a soft changing pad the moment feels both secure and comfortable for you and your newborn baby. Perfect to have on the changing table at home and easy to bring on a trip.',
    brand: 'Apple',
    category: 'Changing Table',
    price: 17.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'GULLIVER',
    image:
      'https://www.ikea.com/us/en/images/products/gulliver-changing-table-white__0627306_PE693289_S5.JPG?f=xl',
    description:
      'Comfortable height for changing the baby. Practical storage space within close reach. You can always keep a hand on your baby.',
    brand: 'Apple',
    category: 'Changing Table',
    price: 79.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  // sofa
  {
    name: 'Kota',
    image:
      'https://cdn.habitat.co.uk/media/catalog/product/cache/1/image/1200x925/9df78eab33525d08d6e5fb8d27136e95/2/5/257693.jpg',
    description:
      'The Kota orange fabric 3 seater sofa bed features a click-clack mechanism that allows the back to flip all the way down, transforming a 3 seater sofa to a comfortable bed in seconds.',
    brand: 'Apple',
    category: 'Sofa and sofa bed',
    price: 350.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Hendricks',
    image: 'https://images.qvc.com/is/image/u2/5/08/518608.001',
    description:
      'The sumptuous Hendricks navy velvet 4 seater sofa features low, wide arms and soft, deep feather and fibre cushions finished with button detailing.Made in Italy, this sofa has a substantial, retro-styled design and is fully upholstered with removable frame covers.',
    brand: 'Apple',
    category: 'Sofa and sofa bed',
    price: 1350.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Fenner',
    image:
      'https://cdn1.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2019/01/best_sofa.jpg?itok=xeEwJ1EY',
    description:
      'Made in Italy, the Fenner orange velvet 3 seater sofa has slender cushioned arms and soft, feather-wrapped fibre seat and back cushions.',
    brand: 'Apple',
    category: 'Sofa and sofa bed',
    price: 1600.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Hyde',
    image:
      'https://i.pinimg.com/736x/5b/1e/fa/5b1efaa0d59b7e11aac9418d3ba3bfae.jpg',
    description:
      "The Hyde charcoal fabric 3 seater sofa bed delivers high comfort with slender proportions. The sofa's space-saving bed has an easy pull-out action that extends horizontally for a smaller footprint, and a deep mattress that provides a comfortable, firm sleeping platform.",
    brand: 'Apple',
    category: 'Sofa and sofa bed',
    price: 999.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Celine',
    image:
      'https://i.pinimg.com/originals/5b/9a/fc/5b9afc456bfe275ff35867e8c03ad3ce.png',
    description:
      'With its gentle round edges, high reclined back and sumptuous padding, the foam-filled seat cushion invites you to relax and wind down in style. This elegant and luxurious design is finished with black metal legs for a contemporary, lighter-than-air look, which makes it ideal for smaller spaces.',
    brand: 'Apple',
    category: 'Sofa and sofa bed',
    price: 175.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Layne',
    image:
      'https://i.pinimg.com/originals/90/62/f6/9062f62637bc7b12bcb7210ff22a897b.png',
    description:
      "The Layne hand-woven wool pouffe is a striking monochrome-striped design with strong visual appeal and complements both bold and neutral schemes.Filled with lightweight polystyrene beads, the flat weave pouffe provides relaxed additional seating in the home. Exclusive to Habitat, the Layne's pouffe's palette and pattern complement a variety of rug designs in our collection.",
    brand: 'Apple',
    category: 'Sofa and pouffes & footstools',
    price: 95.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Joshua',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFWPf7588cuwLEL3rxZySlPhEGVi4cXBiC-UH8df203k5iDv9wFq1fwk-SiQ&usqp=CAc',
    description:
      "The Joshua charcoal fabric storage footstool is an informal, everyday design that's perfect for families and those who like to entertain. The Joshua storage footstool features storage space beneath the seat for hiding clutter.",
    brand: 'Apple',
    category: 'Sofa and pouffes & footstools',
    price: 295.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Durrie',
    image:
      'https://i.pinimg.com/originals/a4/11/50/a411509a93cb102143b40212daf8cb12.jpg',
    description:
      'Add a graphic touch to your home with the Durrie monochrome floor cushion, featuring an intricate diamond inspired knitted pattern.',
    brand: 'Apple',
    category: 'Sofa and pouffes & footstools',
    price: 75.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Gentry',
    image:
      'https://i.pinimg.com/474x/82/b4/a9/82b4a98e34cbbdc75cce9bf88d7478e4.jpg',
    description:
      'The Gentry tufted Indian wool pouffe is a visually appealing design, combining the fluffiness of the wool with a Berber-style pattern.',
    brand: 'Apple',
    category: 'Sofa and pouffes & footstools',
    price: 95.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Gentry',
    image:
      'https://i.pinimg.com/474x/82/b4/a9/82b4a98e34cbbdc75cce9bf88d7478e4.jpg',
    description:
      'The Gentry tufted Indian wool pouffe is a visually appealing design, combining the fluffiness of the wool with a Berber-style pattern.',
    brand: 'Apple',
    category: 'Sofa and pouffes & footstools',
    price: 95.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Cuscino',
    image:
      'https://i.pinimg.com/originals/96/29/10/96291066fda1afdb548d82d547e5791f.png',
    description:
      'Made in Italy, the Cuscino corner sofa has soft, feather-filled scatter cushions for a supremely comfortable sit.',
    brand: 'Apple',
    category: 'Sofa ',
    price: 3200.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Fenner',
    image:
      'https://cdn.habitat.co.uk/media/catalog/product/cache/1/image/1200x925/9df78eab33525d08d6e5fb8d27136e95/7/7/779310.jpg',
    description:
      'Made in Italy, the Fenner charcoal fabric right-hand 4 seater corner sofa has slender cushioned arms and soft, feather-wrapped fibre seat and back cushions.',
    brand: 'Apple',
    category: 'Sofa and pouffes & footstools',
    price: 2300.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  //TABLE
  {
    name: 'Drio',
    image:
      'https://cdn.habitat.fr/thumbnails/product/812/812063/box/600/600/40/drio-table-a-rallonge-naturel_812063.jpg',
    description:
      'Perfect for family gatherings and unexpected guests, the Drio walnut extending dining table seats 4 people when closed and up to 10 when its 2 extension leaves are added.',
    brand: 'Apple',
    category: 'Table and dining table',
    price: 800.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Lincoln',
    image:
      'https://i.pinimg.com/736x/b8/35/91/b835913894ae271a134b0f6c6cdfb0ee.jpg',
    description:
      'The versatile Lincoln flip top table converts from a small 4 seater square table to an 8 seater rectangular one in an instant.',
    brand: 'Apple',
    category: 'Table and dining table',
    price: 495.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Celia',
    image:
      'https://i.pinimg.com/originals/4a/87/fc/4a87fcce49b62c4493c1154d4ecadee6.png',
    description:
      'Perfect for family gatherings and unexpected guests, the Drio walnut extending dining table seats 4 people when closed and up to 10 when its 2 extension leaves are added.',
    brand: 'Apple',
    category: 'Table and dining table',
    price: 890.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Dublin',
    image:
      'https://cdn.habitat.co.uk/media/catalog/product/cache/1/image/1200x925/9df78eab33525d08d6e5fb8d27136e95/1/7/1784785.jpg',
    description:
      'The contemporary, Dublin round oak and glass dining table adds a sense of space to a room, thanks to its simple, clean-lined cross frame and clear glass top.',
    brand: 'Apple',
    category: 'Table and dining table',
    price: 375.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Anderson',
    image:
      'https://i.pinimg.com/originals/93/fe/b4/93feb4087a190737d340ec843acc1e43.jpg',
    description:
      'The Anderson 6 seater oak and grey dining table has clean, simple lines and a beautiful, wild grain top that is complemented by its soft, neutral-toned base.',
    brand: 'Apple',
    category: 'Table and dining table',
    price: 450.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Kirby',
    image:
      'https://i.pinimg.com/564x/96/15/b2/9615b2d3f401446adac45a483ca02ed2.jpg',
    description:
      'The Kirby oak veneer and red gloss 4-seater dining table was created in the Habitat design studio with a subtle nod to the 80s.',
    brand: 'Apple',
    category: 'Table and dining table',
    price: 90.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Etta',
    image:
      'https://i.pinimg.com/originals/31/73/b2/3173b27de686e557a90a6d7454bcaf6a.png',
    description:
      'The Etta 6-8 seater black stained oak extending dining table has a gently rounded, veneered top and elegant, tapered legs in solid oak.',
    brand: 'Apple',
    category: 'Table and dining table',
    price: 595.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Jerry',
    image:
      'https://emailtuna.com/images/newsletter/1ae/1ae787a6635dc4e4e10bcd31fe88d41b.jpg',
    description:
      'Perfect for everyday dining and entertaining guests, the Jerry 4-8 seater white extending dining table is a streamlined design with feature white-oiled legs in solid oak.',
    brand: 'Apple',
    category: 'Table and dining table',
    price: 450.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Radius',
    image:
      'https://i.pinimg.com/originals/65/ce/32/65ce32f1fea50ac3ec628b79404acd3e.jpg',
    description:
      'The understated and timeless Radius dining range is beautifully crafted from lacquered solid oak and oak veneer with rounded corners, featuring beautiful bridal joints.',
    brand: 'Apple',
    category: 'Table and dining table',
    price: 1930.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },

  //RUG

  {
    name: 'Dakari',
    image:
      'https://cdn.habitat.co.uk/media/catalog/product/cache/1/image/414x317/9df78eab33525d08d6e5fb8d27136e95/1/7/1789002.jpg',
    description:
      'A contemporary design, the Dakari brown and cream flatweave wool rug will create a strong focal point in any room.',
    brand: 'Apple',
    category: 'Rug',
    price: 150.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Numi',
    image:
      'https://az651873.vo.msecnd.net/img/prods/240/397_zchxki7mju2bfmejhkxwigcotton_tail_8310_agate_denimst.jpg',
    description:
      'The Numi white and black hand woven wool rug will grab your attention whether it’s placed in a living room or bedroom setting.',
    brand: 'Apple',
    category: 'Rug',
    price: 360.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Jungle',
    image:
      'https://cdn.shopify.com/s/files/1/1033/0751/products/jungle-safari-black-white-A-RC-SK008-81_d45447cd-3de8-4f2e-9af3-e20ea45e02d0_720x720.jpg?v=1571439278',
    description:
      'Turn your room into a tropical paradise with the Jungle black and white hand tufted wool rug.',
    brand: 'Apple',
    category: 'Rug',
    price: 256.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Spot',
    image:
      'https://cdn11.bigcommerce.com/s-9pa577tua8/images/stencil/500x659/attribute_rule_images/1338826_source_1588996997.png',
    description:
      'Liven up your home with the Spot black and white spotted handwoven wool rug.',
    brand: 'Apple',
    category: 'Rug',
    price: 395.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Byron',
    image:
      'https://www.staall.com/web/uploads/prices_products/46/byron-multicoloured-handtufted-pile-rug-140-x-200c-295ee79a06-large.jpg',
    description:
      'The Byron multi-coloured and abstract patterned wool 140x200cm rug features block shapes interspersed with sculptural curves.',
    brand: 'Apple',
    category: 'Rug',
    price: 250.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Lora',
    image:
      'https://secure.img1-fg.wfcdn.com/im/73287707/resize-h310-w310%5Ecompr-r85/1056/105635372/amall-power-loom-ivory-rug.jpg',
    description:
      'Moroccan inspired, the Lora multi-coloured hand woven flatweave wool rug is perfect for adding an elegant accent to any room.',
    brand: 'Apple',
    category: 'Rug',
    price: 180.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Berber',
    image:
      'https://cdn.habitat.co.uk/media/catalog/product/cache/1/image/1200x925/9df78eab33525d08d6e5fb8d27136e95/1/7/1786732.jpg',
    description:
      'The Kirby oak veneer and red gloss 4-seater dining table was created in the Habitat design studio with a subtle nod to the 80s.',
    brand: 'Apple',
    category: 'Rug',
    price: 395.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Quinn',
    image:
      'https://secure.img1-fg.wfcdn.com/im/99187490/resize-h800-w800%5Ecompr-r85/1119/111928425/Ebeling+Geometric+Black+Area+Rug.jpg',
    description:
      'Complement and uplift your interiors in style with the Quinn multi-coloured wool rug.',
    brand: 'Apple',
    category: 'Rug',
    price: 280.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Andes',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvAnLFDMzIyCo84itd2QeLLcXehyGV2Nm7Vw&usqp=CAU',
    description:
      'Inspired by Aztec tapestries, the Andes multi-coloured wool flat weave runner will add warmth and texture to a room.',
    brand: 'Apple',
    category: 'Rug',
    price: 160.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 22,
  },

  // {
  //   name: 'Airpods Wireless Bluetooth Headphones',
  //   image: '/images/phone.jpg',
  //   description:
  //     'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
  //   brand: 'Apple',
  //   category: 'Electronics',
  //   price: 89.99,
  //   countInStock: 10,
  //   rating: 4.5,
  //   numReviews: 12,
  // },
  // {
  //   name: 'iPhone 11 Pro 256GB Memory',
  //   image: '/images/phone.jpg',
  //   description:
  //     'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
  //   brand: 'Apple',
  //   category: 'Electronics',
  //   price: 599.99,
  //   countInStock: 7,
  //   rating: 4.0,
  //   numReviews: 8,
  // },
  // {
  //   name: 'Cannon EOS 80D DSLR Camera',
  //   image: '/images/camera.jpg',
  //   description:
  //     'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
  //   brand: 'Cannon',
  //   category: 'Electronics',
  //   price: 929.99,
  //   countInStock: 5,
  //   rating: 3,
  //   numReviews: 12,
  // },
  // {
  //   name: 'Sony Playstation 4 Pro White Version',
  //   image: '/images/playstation.jpg',
  //   description:
  //     'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
  //   brand: 'Sony',
  //   category: 'Electronics',
  //   price: 399.99,
  //   countInStock: 11,
  //   rating: 5,
  //   numReviews: 12,
  // },
  // {
  //   name: 'Logitech G-Series Gaming Mouse',
  //   image: '/images/mouse.jpg',
  //   description:
  //     'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
  //   brand: 'Logitech',
  //   category: 'Electronics',
  //   price: 49.99,
  //   countInStock: 7,
  //   rating: 3.5,
  //   numReviews: 10,
  // },
  // {
  //   name: 'Amazon Echo Dot 3rd Generation',
  //   image: '/images/alexa.jpg',
  //   description:
  //     'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  //   brand: 'Amazon',
  //   category: 'Electronics',
  //   price: 29.99,
  //   countInStock: 0,
  //   rating: 4,
  //   numReviews: 12,
  // },
];

export default products;
