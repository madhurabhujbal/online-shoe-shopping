var express = require("express");
var app = express();

let shoeList =
    [
        {
            men: [

                {
                    name: 'Sports Shoe',
                    price: '£42.99',
                    url: '/images/men/blueShoe.png',
                    description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
                },
                {
                    name: 'Running Shoe',
                    price: '£52.99',
                    description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
                },
                {
                    name: 'Badminton Shoe',
                    price: '£99.99',
                    description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
                }
            ]
        },

        {
            women: [

                {
                    name: 'Sports Shoe',
                    price: '£42.99',
                    description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
                },
                {
                    name: 'Running Shoe',
                    price: '£52.99',
                    description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
                },
                {
                    name: 'Badminton Shoe',
                    price: '£99.99',
                    description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
                }
            ]
        },

        {
            kids: [

                {
                    name: 'Sports Shoe',
                    price: '£42.99',
                    description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
                },
                {
                    name: 'Running Shoe',
                    price: '£52.99',
                    description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
                },
                {
                    name: 'Badminton Shoe',
                    price: '£99.99',
                    description: "Step into a new realm of Air with the Nike Air Max Zephyr. It brings the soft cushioning of visible Air to the upper, adding a modern twist to the shoe's futuristic design."
                }
            ]
        }
    ]

app.get ("/", function (req,res) {
    res.render ( "shoes.ejs" );
} );

app.get("/url", (req, res, next) => {
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});