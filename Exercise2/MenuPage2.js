
//1. create 7 hamburger objects using literal notation 
//   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
//   Please use the same html syntax of an article as in exercise1.

var listOfBurgersUsingLiteralNotation = [
    {
    name: "Ostasnudan",
    size: "120g",
    dayOfTheWeek: "monday",
    price: 69,
    img: "\Images/Hamburger.png"
},
{
    name: "Biffen",
    size: "1200g",
    dayOfTheWeek: "tuesday",
    price: 499,
    img: "\Images/Hamburger.png"
},
{
    name: "Stegefläsk burgare",
    size: "250g",
    dayOfTheWeek: "wednesday",
    price: 89,
    img: "\Images/Hamburger.png"
},
{
    name: "Renskavs burgare",
    size: "30g",
    dayOfTheWeek: "thursday",
    price: 20,
    img: "\Images/Hamburger.png"
},
{
    name: "Spiddekage burgare",
    size: "1500g",
    dayOfTheWeek: "friday",
    price: 295,
    img: "\Images/Hamburger.png"
},
{
    name: "Festasnudan",
    size: "300g",
    dayOfTheWeek: "saturday",
    price: 59,
    img: "\Images/Hamburger.png"
},
{
    name: "Bakisräddaren",
    size: "180g",
    dayOfTheWeek: "sunday",
    price: 59,
    img: "\Images/Hamburger.png"
},
];

buildTheWebsite(listOfBurgersUsingLiteralNotation, "burgersPlace")

function buildTheWebsite(listOfProducts, byPlaceOfProduct) {
    for (var i = 0; i < listOfProducts.length; i++) {

        var img = document.createElement("img");
        img.src = listOfProducts[i].img;

        var nameOfProduct = document.getElementById(byPlaceOfProduct);

        var products = document.createElement('article')
       .appendChild(document.createElement('fieldset'))
       .appendChild(document.createElement('legend'))
       .appendChild(document.createTextNode(listOfProducts[i].dayOfTheWeek)).parentNode.parentNode
       .appendChild(document.createElement('h3'))
       .appendChild(document.createTextNode(listOfProducts[i].name)).parentNode.parentNode

        products.appendChild(document.createElement('span')).appendChild(img)
        products.appendChild(document.createElement('div')).appendChild(document.createTextNode("Pris: " + listOfProducts[i].price + "kr"));
        products.appendChild(document.createElement('div')).appendChild(document.createTextNode("Storlek: " + listOfProducts[i].size));

        nameOfProduct.appendChild(products);
    }
}

//2. create Product objects with constructor notation, 
//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
function createProduct(name, size, dayOfTheWeek, price, img) {
    this.name = name;
    this.size = size;
    this.dayOfTheWeek = dayOfTheWeek;
    this.price = price;
    this.img = img;
}

//3. add 7 drinks to the page using Product.
//4. add 7 pizzas to the page using Product.
//5. add 7 subs to the page using Product.

var listOfDrinksUsingConstructorNotation = [
    new createProduct("Jägerbomb", "6cl", "Måndag", 60, "\Images/Drink.png"),
    new createProduct("Halsrensarn", "20cl", "Tisdag", 90, "\Images/Drink.png"),
    new createProduct("Gula fläcken", "2cl", "Onsdag", 90, "\Images/Drink.png"),
    new createProduct("Vit ryss", "4cl", "Torsdag", 119, "\Images/Drink.png"),
    new createProduct("Svart ryss", "4cl", "Fredag", 119, "\Images/Drink.png"),
    new createProduct("Ryss", "100cl", "Lördag", 15, "\Images/Drink.png"),
    new createProduct("Green Dragon", "8cl", "Söndag", 25, "\Images/Drink.png")];

buildTheWebsite(listOfDrinksUsingConstructorNotation, "drinksPlace");

var listOfPizzasUsingConstructorNotation = [
    new createProduct("Margharita", "barn", "Måndag", 50, "\Images/Pizza.png"),
    new createProduct("Vesuvio", "standard", "Tisdag", 50, "\Images/Pizza.png"),
    new createProduct("Capricciosa", "standard", "Onsdag", 50, "\Images/Pizza.png"),
    new createProduct("Kebabpizza", "familje", "Torsdag", 55, "\Images/Pizza.png"),
    new createProduct("Calzone", "standard", "Fredag", 55, "\Images/Pizza.png"),
    new createProduct("Pommespizza", "familje", "Lördag", 60, "\Images/Pizza.png"),
    new createProduct("Turtles special", "barn", "Söndag", 39, "\Images/Pizza.png")];

buildTheWebsite(listOfPizzasUsingConstructorNotation, "pizzaPlace");

var listOfSubsUsingConstructorNotation = [
    new createProduct("Ost", "120g", "Måndag", 55, "\Images/Subs.png"),
    new createProduct("Skinka", "400g", "Tisdag", 55, "\Images/Subs.png"),
    new createProduct("Ost & Skinka", "300g", "Onsdag", 55, "\Images/Subs.png"),
    new createProduct("Skinka & Ost", "90g", "Torsdag", 55, "\Images/Subs.png"),
    new createProduct("Skinkost", "150g", "Fredag", 55, "\Images/Subs.png"),
    new createProduct("Ostskinka", "600g", "Lördag", 55, "\Images/Subs.png"),
    new createProduct("Leverpastej", "200g", "Söndag", 55, "\Images/Subs.png")];

buildTheWebsite(listOfSubsUsingConstructorNotation, "subsPlace");


//6. GO to file FixIt.html

//DRINKS: vet inte riktigt vad du menar
//Subs: vet inte riktigt vad du menar