
//1. create 7 hamburger objects using literal notation 
//   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
//   Please use the same html syntax of an article as in exercise1.
//1. create 7 hamburger objects using literal notation 
//   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
//   Please use the same html syntax of an article as in exercise1.
var listOfBurgers = [{
    name: "Ostasnudan",
    size: "120g",
    weekday: "monday",
    price: 69,
    img: "\Images/Hamburger.png"
},
{
    name: "Biffen",
    size: "1200g",
    weekday: "tuesday",
    price: 499,
    img: "\Images/Hamburger.png"
},
{
    name: "Stegefläsk burgare",
    size: "250g",
    weekday: "wednesday",
    price: 89,
    img: "\Images/Hamburger.png"
},
{
    name: "Renskavs burgare",
    size: "30g",
    weekday: "thursday",
    price: 20,
    img: "\Images/Hamburger.png"
},
{
    name: "Spiddekage burgare",
    size: "1500g",
    weekday: "friday",
    price: 295,
    img: "\Images/Hamburger.png"
},
{
    name: "Festasnudan",
    size: "300g",
    weekday: "saturday",
    price: 59,
    img: "\Images/Hamburger.png"
},
{
    name: "Bakisräddaren",
    size: "180g",
    weekday: "sunday",
    price: 59,
    img: "\Images/Hamburger.png"

},
];

buildTheWebsite(listOfBurgers);

function buildTheWebsite(listOfProducts) {
    for (var i = 0; i < listOfProducts.length; i++) {

        var image = document.createElement('img');
        image.src = listOfProducts[i].img;

        var nameOfProductId = document.getElementById('burgersPlace');

        var productBox = document.createElement('article')
            .appendChild(document.createElement('fieldset'))
            .appendChild(document.createElement('legend'))
            .appendChild(document.createTextNode(listOfProducts[i].weekday)).parentNode.parentNode
            .appendChild(document.createElement('h3'))
            .appendChild(document.createTextNode(listOfProducts[i].name)).parentNode.parentNode

        productBox.appendChild(document.createElement('span')).appendChild(image)
        productBox.appendChild(document.createElement('div')).appendChild(document.createTextNode("price: " + listOfProducts[i].price + "$"));
        productBox.appendChild(document.createElement('div')).appendChild(document.createTextNode("size: " + listOfProducts[i].size));  

        nameOfProductId.appendChild(productBox);

    }

}

//2. create Product objects with constructor notation, 
//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
//3. add 7 drinks to the page using Product.
//4. add 7 pizzas to the page using Product.
//5. add 7 subs to the page using Product.
//6. GO to file FixIt.html

//DRINKS
//Subs