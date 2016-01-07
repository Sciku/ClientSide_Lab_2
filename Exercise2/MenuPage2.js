
//1. create 7 hamburger objects using literal notation 
//   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
//   Please use the same html syntax of an article as in exercise1.

//********************************Literal Notation*******************************************
//var listOfBurgersUsingLiteralNotation = [{
//    name: "Ostasnudan",
//    size: "120g",
//    weekday: "monday",
//    price: 69,
//    img: "\Images/Hamburger.png"
//},
//{
//    name: "Biffen",
//    size: "1200g",
//    weekday: "tuesday",
//    price: 499,
//    img: "\Images/Hamburger.png"
//},
//{
//    name: "Stegefläsk burgare",
//    size: "250g",
//    weekday: "wednesday",
//    price: 89,
//    img: "\Images/Hamburger.png"
//},
//{
//    name: "Renskavs burgare",
//    size: "30g",
//    weekday: "thursday",
//    price: 20,
//    img: "\Images/Hamburger.png"
//},
//{
//    name: "Spiddekage burgare",
//    size: "1500g",
//    weekday: "friday",
//    price: 295,
//    img: "\Images/Hamburger.png"
//},
//{
//    name: "Festasnudan",
//    size: "300g",
//    weekday: "saturday",
//    price: 59,
//    img: "\Images/Hamburger.png"
//},
//{
//    name: "Bakisräddaren",
//    size: "180g",
//    weekday: "sunday",
//    price: 59,
//    img: "\Images/Hamburger.png"
//},
//];

//***********************************************************************************************

//2. create Product objects with constructor notation, 
//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)

//********************************Constructor Notation*******************************************

var hamburgers = [
    createProduct("Ostasnudan", "120g", "Måndag", 69),
    createProduct("Biffen", "400g", "Tisdag", 89),
    createProduct("Stegefläskaren", "300g", "Onsdag", 99),
    createProduct("Renskavsburger", "90g", "Torsdag", 39),
    createProduct("Spiddekageburgare Deluxe", "150g", "Fredag", 119),
    createProduct("Festasnudan", "600g", "Lördag", 299),
    createProduct("Bakisräddaren", "200g", "Söndag", 199)
];

function createProduct(name, size, dayOfTheWeek, price) {
    var hamburger = {
        name: name,
        size: size,
        dayOfTheWeek: dayOfTheWeek,
        price: price,
        img: "\Images/Hamburger.png"
    };
    return hamburger;
}

buildTheWebsite(hamburgers);

//3. add 7 drinks to the page using Product.

var drinks = [
    createProduct("Jägerbomb", "6cl", "Måndag", 60, "\Images/Drink.png"),
    createProduct("Halsrensarn", "20cl", "Tisdag", 90, "\Images/Drink.png"),
    createProduct("Gula fläcken", "2cl", "Onsdag", 90, "\Images/Drink.png"),
    createProduct("Vit ryss", "4cl", "Torsdag", 119, "\Images/Drink.png"),
    createProduct("Svart ryss", "4cl", "Fredag", 119, "\Images/Drink.png"),
    createProduct("Ryss", "100cl", "Lördag", 15, "\Images/Drink.png"),
    createProduct("Green Dragon", "8cl", "Söndag", 25, "\Images/Drink.png")
];

function createProduct(name, size, dayOfTheWeek, price, img) {
    this.name = name;
    this.size = size;
    this.dayOfTheWeek = dayOfTheWeek;
    this.price = price;
    this.img = img;
}


buildTheWebsite(drinks);

//4. add 7 pizzas to the page using Product.

var pizzas = [
    createProduct("Margharita", "barn", "Måndag", 50, "\Images/Pizza.png"),
    createProduct("Vesuvio", "standard", "Tisdag", 50, "\Images/Pizza.png"),
    createProduct("Capricciosa", "standard", "Onsdag", 50, "\Images/Pizza.png"),
    createProduct("Kebabpizza", "familje", "Torsdag", 55, "\Images/Pizza.png"),
    createProduct("Calzone", "standard", "Fredag", 55, "\Images/Pizza.png"),
    createProduct("Pommespizza", "familje", "Lördag", 60, "\Images/Pizza.png"),
    createProduct("Turtles special", "barn", "Söndag", 39, "\Images/Pizza.png")
];

function createProduct(name, size, dayOfTheWeek, price, img) {
    this.name = name;
    this.size = size;
    this.dayOfTheWeek = dayOfTheWeek;
    this.price = price;
    this.img = img;
}

buildTheWebsite(pizzas);

//5. add 7 subs to the page using Product.

var subs = [
    createProduct("Ost", "120g", "Måndag", 55, "\Images/Subs.png"),
    createProduct("Skinka", "400g", "Tisdag", 55, "\Images/Subs.png"),
    createProduct("Ost & Skinka", "300g", "Onsdag", 55, "\Images/Subs.png"),
    createProduct("Skinka & Ost", "90g", "Torsdag", 55, "\Images/Subs.png"),
    createProduct("Skinkost", "150g", "Fredag", 55, "\Images/Subs.png"),
    createProduct("Ostskinka", "600g", "Lördag", 55, "\Images/Subs.png"),
    createProduct("Leverpastej", "200g", "Söndag", 55, "\Images/Subs.png")
];

function createProduct(name, size, dayOfTheWeek, price, img) {
    this.name = name;
    this.size = size;
    this.dayOfTheWeek = dayOfTheWeek;
    this.price = price;
    this.img = img;
}

buildTheWebsite(subs)

function buildTheWebsite(listOfProducts) {
    for (var i = 0; i < listOfProducts.length; i++) {

        var img = document.createElement('img');
        img.src = listOfProducts[i].img;

        var nameOfProductId1 = document.getElementById('burgersPlace');
        var nameOfProductId2 = document.getElementById('subsPlace');
        var nameOfProductId3 = document.getElementById('pizzaPlace');
        var nameOfProductId4 = document.getElementById('subsPlace');


        var productBox = document.createElement('article')
            .appendChild(document.createElement('fieldset'))
            .appendChild(document.createElement('legend'))
            .appendChild(document.createTextNode(listOfProducts[i].dayOfTheWeek)).parentNode.parentNode
            .appendChild(document.createElement('h3'))
            .appendChild(document.createTextNode(listOfProducts[i].name)).parentNode.parentNode

        productBox.appendChild(document.createElement('span')).appendChild(img)
        productBox.appendChild(document.createElement('div')).appendChild(document.createTextNode("Pris: " + listOfProducts[i].price + "kr"));
        productBox.appendChild(document.createElement('div')).appendChild(document.createTextNode("Storlek: " + listOfProducts[i].size));

        nameOfProductId1.appendChild(productBox);
        nameOfProductId2.appendChild(productBox);
        nameOfProductId3.appendChild(productBox);
        nameOfProductId4.appendChild(productBox);
    }

}
//6. GO to file FixIt.html

//DRINKS
//Subs