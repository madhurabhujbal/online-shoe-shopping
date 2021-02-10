let shoeList = {
    men: [
        {
            id : 1001,
            name: 'CHRISTIAN LOUBOUTIN',
            price: '835.99',
            image: '/images/men/shoe1/shoe.jpg',
            shoeviews: ['/images/men/shoe1/shoe.jpg', '/images/men/shoe1/view1.jpg', '/images/men/shoe1/view2.jpg', '/images/men/shoe1/view3.jpg', '/images/men/shoe1/view4.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}, {size: 'UK 9', isAvail : true}, {size: 'UK 10', isAvail : false}],
            description: "Vida viva flat crosta suede clf gg versi"
        },
        {
            id : 1002,
            name: 'GUCCI',
            price: '550.99',
            image: '/images/men/shoe2/shoe.jpg',
            shoeviews: ['/images/men/shoe2/shoe.jpg', '/images/men/shoe2/view1.jpg', '/images/men/shoe2/view2.jpg', '/images/men/shoe2/view3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Tennis 1977 canvas high-top trainers"
        },
        {
            id : 1003,
            name: 'VALENTINO GARAVANI',
            price: '499.99',
            image: '/images/men/shoe3/shoe.jpg',
            shoeviews: ['/images/men/shoe3/shoe.jpg', '/images/men/shoe3/view1.jpg', '/images/men/shoe3/view2.jpg', '/images/men/shoe3/view3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}],
            description: "Giggies canvas low-top trainers"
        },
        {
            id : 1004,
            name: 'MALLET',
            price: '164.99',
            image: '/images/men/shoe4/shoe.jpg',
            shoeviews: ['/images/men/shoe4/shoe.jpg', '/images/men/shoe4/view1.jpg', '/images/men/shoe4/view2.jpg', '/images/men/shoe4/view3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}, {size: 'UK 9', isAvail : false}, {size: 'UK 10', isAvail : true}, {size: 'UK 11', isAvail : true}],
            description: "Diver leather and mesh trainers"
        },
        {
            id : 1005,
            name: 'Christian Louboutin',
            price: '759.99',
            image: '/images/men/shoe5/shoe.jpg',
            shoeviews: ['/images/men/shoe5/shoe.jpg', '/images/men/shoe5/view1.jpg', '/images/men/shoe5/view2.jpg', '/images/men/shoe5/view3.jpg', '/images/men/shoe5/view4.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}, {size: 'UK 9', isAvail : true}, {size: 'UK 10', isAvail : false}],
            description: "Greggo flat calf p/tresse plonge ds/vv/g"
        },
        {
            id : 1006,
            name: 'Barbour',
            price: '99.99',
            image: '/images/men/shoe6/shoe.jpg',
            shoeviews: ['/images/men/shoe6/shoe.jpg', '/images/men/shoe6/view1.jpg', '/images/men/shoe6/view2.jpg', '/images/men/shoe6/view3.jpg'],
            sizes: [{ size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : true}, {size: 'UK 9', isAvail : false}, {size: 'UK 10', isAvail : true}, {size: 'UK 11', isAvail : true}],
            description: "Stern leather boat shoes"
        },
    ],
    women: [
        {
            id : 2001,
            name: 'Jimmy Choo',
            price: '450.00',
            image: '/images/women/shoe1/shoe.jpg',
            shoeviews: ['/images/women/shoe1/shoe.jpg', '/images/women/shoe1/view1.jpg', '/images/women/shoe1/view2.jpg', '/images/women/shoe1/view3.jpg'],
            sizes: [{ size: 'UK 4', isAvail : true}, { size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : false}],
            description: "Gabie fireball glitter dégradé pointed toe flats"
        },
        {
            id : 2002,
            name: 'The Row',
            price: '450.00',
            image: '/images/women/shoe2/shoe.jpg',
            shoeviews: ['/images/women/shoe2/shoe.jpg', '/images/women/shoe2/view1.jpg', '/images/women/shoe2/view2.jpg', '/images/women/shoe2/view3.jpg'],
            sizes: [{ size: 'UK 4', isAvail : true}, { size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : false}],
            description: "Nude strappy leather heeled sandals"
        },
        
        {
            id : 2003,
            name: 'Golden Goose',
            price: '435.99',
            image: '/images/women/shoe3/shoe.jpg',
            shoeviews: ['/images/women/shoe3/shoe.jpg', '/images/women/shoe3/view1.jpg', '/images/women/shoe3/view2.jpg', '/images/women/shoe3/view3.jpg'],
            sizes: [{ size: 'UK 4', isAvail : true}, { size: 'UK 5', isAvail : false},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : true}, {size: 'UK 8', isAvail : false}],
            description: "Superstar leopard-print distressed suede and calf-hair trainers"
        },
        {
            id : 2004,
            name: 'JW ANDERSON',
            price: '495.00',
            image: '/images/women/shoe4/shoe.jpg',
            shoeviews: ['/images/women/shoe4/shoe.jpg', '/images/women/shoe4/view1.jpg', '/images/women/shoe4/view2.jpg', '/images/women/shoe4/view3.jpg'],
            sizes: [{ size: 'UK 4', isAvail : true}, { size: 'UK 5', isAvail : false},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : false}],
            description: "Chain-embellished leather loafers"
        },
        {
            id : 2005,
            name: 'CHRISTIAN LOUBOUTIN',
            price: '485.00',
            image: '/images/women/shoe5/shoe.jpg',
            shoeviews: ['/images/women/shoe5/shoe.jpg', '/images/women/shoe5/view1.jpg', '/images/women/shoe5/view2.jpg', '/images/women/shoe5/view3.jpg', '/images/women/shoe5/view4.jpg'],
            sizes: [{ size: 'UK 4', isAvail : true}, { size: 'UK 5', isAvail : false},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : false}],
            description: "La massine flat nappa shiny/gg"
        },
        {
            id : 2006,
            name: 'CHRISTIAN LOUBOUTIN',
            price: '785.00',
            image: '/images/women/shoe6/shoe.jpg',
            shoeviews: ['/images/women/shoe6/shoe.jpg', '/images/women/shoe6/view1.jpg', '/images/women/shoe6/view2.jpg', '/images/women/shoe6/view3.jpg', '/images/women/shoe6/view4.jpg'],
            sizes: [{ size: 'UK 4', isAvail : true}, { size: 'UK 5', isAvail : true},  {size: 'UK 6', isAvail : true}, {size: 'UK 7', isAvail : false}, {size: 'UK 8', isAvail : false}],
            description: "Follies strass flat rete/suede"
        },
    ],

    kids: [
        {
            id : 3001,
            name: 'BURBERRY',
            price: '242.99',
            image: '/images/kids/shoe1/shoe.jpg',
            shoeviews: ['/images/kids/shoe1/shoe.jpg', '/images/kids/shoe1/view1.jpg', '/images/kids/shoe1/view2.jpg'],
            sizes: [{ size: '2-4yrs', isAvail : true},  {size: '5-9yrs', isAvail : true}, {size: '10-12yrs', isAvail : false}],
            description: "Union woven low top trainers"
        },
        {
            id : 3002,
            name: 'ADIDAS',
            price: '52.99',
            image: '/images/kids/shoe2/shoe.jpg',
            shoeviews: ['/images/kids/shoe2/shoe.jpg', '/images/kids/shoe2/view1.jpg', '/images/kids/shoe2/view2.jpg'],
            sizes: [{ size: '2-4yrs', isAvail : true},  {size: '5-9yrs', isAvail : false}, {size: '10-12yrs', isAvail : true}],
            description: "U_Path Run mesh trainers"
        },
        {
            id : 3003,
            name: 'UGG',
            price: '65.00',
            image: '/images/kids/shoe3/shoe.jpg',
            shoeviews: ['/images/kids/shoe3/shoe.jpg', '/images/kids/shoe3/view1.jpg', '/images/kids/shoe3/view2.jpg', '/images/kids/shoe3/view3.jpg'],
            sizes: [{ size: '4-12months', isAvail : true}, { size: '12-24months', isAvail : false}, { size: '24-36months', isAvail : true}],
            description: "Neumel wool-lined suede boots"
        },
        {
            id : 3004,
            name: 'CLARKS',
            price: '36.00',
            image: '/images/kids/shoe4/shoe.jpg',
            shoeviews: ['/images/kids/shoe4/shoe.jpg', '/images/kids/shoe4/view1.jpg', '/images/kids/shoe4/view2.jpg'],
            sizes: [{ size: '1-2yrs', isAvail : true}, { size: '2-4yrs', isAvail : true}, { size: '4-6yrs', isAvail : true}],
            description: "Crown Jump leather Mary Jane shoes"
        },
        {
            id : 3005,
            name: 'CLARKS',
            price: '28.00',
            image: '/images/kids/shoe5/shoe.jpg',
            shoeviews: ['/images/kids/shoe5/shoe.jpg', '/images/kids/shoe5/view1.jpg', '/images/kids/shoe5/view2.jpg'],
            sizes: [{ size: '1-2yrs', isAvail : false}, { size: '2-4yrs', isAvail : true}, { size: '4-6yrs', isAvail : false}],
            description: "Tiny Dusk leather trainers"
        },
        {
            id : 3006,
            name: 'ADIDAS',
            price: '50.00',
            image: '/images/kids/shoe6/shoe.jpg',
            shoeviews: ['/images/kids/shoe6/shoe.jpg', '/images/kids/shoe6/view1.jpg', '/images/kids/shoe6/view2.jpg'],
            sizes: [{ size: '7-8yrs', isAvail : true}, { size: '9-10yrs', isAvail : true}, { size: '10-12yrs', isAvail : false}],
            description: "Retroset mesh trainers"
        },
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