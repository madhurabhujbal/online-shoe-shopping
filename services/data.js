let shoeList = {
    men: [

        {
            id : 1001,
            name: 'Sports Shoe',
            price: '42.99',
            image: '/images/men/blueShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}, {size: 'UK 9', isAvail : true}, {size: 'UK 10', isAvail : false}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        },
        {
            id : 1002,
            name: 'Running Shoe',
            price: '52.99',
            image: '/images/men/greenShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        },
        {
            id : 1003,
            name: 'Badminton Shoe',
            price: '99.99',
            image: '/images/men/pinkShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        },
        {
            id : 1004,
            name: 'Barbour',
            price: '99.99',
            image: '/images/men/shoe4/shoe.jpg',
            shoeviews: ['/images/men/shoe4/shoe.jpg', '/images/men/shoe4/view1.jpg', '/images/men/shoe4/view2.jpg', '/images/men/shoe4/view3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}, {size: 'UK 9', isAvail : false}, {size: 'UK 10', isAvail : true}, {size: 'UK 11', isAvail : true}],
            description: "Stern leather boat shoes"
        },
        {
            id : 1005,
            name: 'Christian Louboutin',
            price: '759.99',
            image: '/images/men/shoe5/shoe.jpg',
            shoeviews: ['/images/men/shoe5/shoe.jpg', '/images/men/shoe5/view1.jpg', '/images/men/shoe5/view2.jpg', '/images/men/shoe5/view3.jpg', '/images/men/shoe5/view4.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}, {size: 'UK 9', isAvail : true}, {size: 'UK 10', isAvail : false}],
            description: "Greggo flat calf p/tresse plonge ds/vv/g"
        }
    ],
    women: [
        {
            id : 2001,
            name: 'Sports Shoe',
            price: '42.99',
            image: '/images/women/blueShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        },
        {
            id : 2002,
            name: 'Running Shoe',
            price: '52.99',
            image: '/images/women/greenShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        },
        {
            id : 2003,
            name: 'Badminton Shoe',
            price: '99.99',
            image: '/images/women/pinkShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        },
        {
            id : 2004,
            name: 'Casual Shoe',
            price: '79.99',
            image: '/images/women/lightPinkShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        }
    ],

    kids: [
        {
            id : 3001,
            name: 'Sports Shoe',
            price: '42.99',
            image: '/images/kids/blueShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        },
        {
            id : 3002,
            name: 'Running Shoe',
            price: '52.99',
            image: '/images/kids/greenShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        },
        {
            id : 3003,
            name: 'Badminton Shoe',
            price: '99.99',
            image: '/images/kids/pinkShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        },
        {
            id : 3004,
            name: 'Casual Shoe',
            price: '79.99',
            image: '/images/kids/lightPinkShoe.png',
            shoeviews: ['/images/men/side1.jpg', '/images/men/side2.jpg', '/images/men/side3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
        }
    ]
}

users = [
    {
        username: 'test',
        name: 'Alice',
        password: 'test',
        orders: [{id:'ord-001', items : [
                            {id: 1001, size : 'UK 5', count: 1, price: 129},
                            {id: 2001, size : 'UK 6', count: 1, price: 89}
                        ],
                        status : "Delievered",
                        date : '26-Dec-2020'
                    },
                {id:'ord-005', items : [
                            {id: 1002, size : 'UK 7', count: 1, price: 65}
                            ],
                            status : "Ordered",
                            date : '31-Jan-2021'}
                ]
    },
    {
        username: 'user1',
        name: 'Joe',
        password: 'password1',
        orders: []
    },
    {
        username: 'user2',
        name: 'Bob',
        password: 'password2',
        orders: []
    },
];

module.exports={shoeList, users};