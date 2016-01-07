/// <reference path="D:\VS projects\WebApplication33\Exercise2\FixIt.html" />

//For each of the following aplicable exercise below you should present a box on the page 
//with an alert that shows the result when the box is clicked!

//###Window object at page 124:###
//1. Link the script with FixIt.hmtl: DONE

//2. Add som tags that doesn't change the visual part of the paragraph: DONE

/*3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page*/

function createBox(functionofchoice) {
    var borderbox = document.createElement("div");
    borderbox.setAttribute("class", "box");
    var site = document.getElementsByTagName("body");
    site[0].appendChild(borderbox);
    borderbox.addEventListener('click', functionofchoice, true);
}
createBox(propertyPlay);

function propertyPlay() {
    var windowobjectarray = new Array();
    windowobjectarray.push("The height of my window is: " + window.screen.height);
    windowobjectarray.push(" The width of my window is: " + window.screen.width);

    alert(windowobjectarray);
};

//4.Add a stylesheet that displays the changed words in fat font and in red.


function makeClassForSpans() {
    var myspans = document.getElementsByTagName("span");

    for (var i = 0; i < myspans.length; i++) {
        myspans[i].setAttribute("class", "FatAndRed");
    }
}
makeClassForSpans();

//5. PLay with the Methods 


createBox(methodPlay);

function methodPlay() {
    window.alert("Yo! I'm a psychic, I foresee that in your immediate future you will want to print something. But then, you remember that you just want to look at some Thundercats");
    window.print();
    window.open("http://thundercats.wikia.com/wiki/ThunderCats_Wiki");
}
//### DOM page 126:###
//6. Play with the DOM-properties

createBox(domPropertiesPlay);

function domPropertiesPlay() {
    var domspan = document.getElementById("DOMplay");
    var documenttitle = document.title;

    domspan.innerHTML = "The title of this page is:  " + documenttitle;
}

//### String objects page 128, 129: ###

//7. Save the the text from the makeMeAnArray-paragraph into an array.
var paragraphtext = document.getElementById("makeMeAnArray");
var array = paragraphtext.innerText.split(" ");


//8. Use all the string methods and propertys allong with the array


createBox(makeMeAnArrayFunction);

function makeMeAnArrayFunction() {
    var textfromarray = document.getElementById('makeMeAnArray');
    var HTMLarray = textfromarray.innerHTML;
    var textarray = textfromarray.innerText;

    alert(HTMLarray.length);
    alert(HTMLarray.toUpperCase());
    alert(HTMLarray.toLowerCase());
    alert(textarray.charAt(6));
    alert(HTMLarray.indexOf('W'));
    alert(HTMLarray.lastIndexOf('w'));
    alert(HTMLarray.substring(78, 98));
    alert(HTMLarray.split(''));
    alert(HTMLarray.trim());
    alert(HTMLarray.replace('wuf', 'SNUDAN'));
}


//### String objects page 132: ###
//9. check if the 4th element in the array is a number
createBox(isElementNumber);

function isElementNumber() {

    alert(isNaN(array[4]) + "! If false then the element is a number, if true then the element is not a number")

}


//### Math page 134: ###
//10. Round one of the numbers in the paragraph up/down
createBox(roundNumber);

function roundNumber() {

    alert(array[4] + " rounds to the nearest number, which is: " + Math.round(array[4]));
}
//11. replace the 3rd word with PI then roud it to the nearest integer

createBox(replace3rdWord);

function replace3rdWord() {
    var replaced = array[2].replace(array[2], Math.PI);
    alert(Math.round(replaced));
}
//### Date object###
//12. Calculate how many days it's until your birthday and present it.

createBox(calculateDaysUntilBirthday);

function calculateDaysUntilBirthday() {
    var fullDay = 24 * 60 * 60 * 1000;
    var today = new Date();
    var birthDay = new Date(2016, 10, 2);
    var diffDays = Math.ceil(Math.abs((today.getTime() - birthDay.getTime()) / (fullDay)));

    alert(diffDays);

}

//13. Calculate how many minutes old you are and present it.
createBox(calculateHowManyMinutesIAm);

function calculateHowManyMinutesIAm() {
    var today = new Date();
    var est = new Date(1983, 10, 2);
    var difference = today.getTime() - est.getTime();
    var calculateddifference = (difference / (1000 * 60));

    alert('I am: ' + Math.ceil(calculateddifference) + ' minutes old ');
}
/*Bonus exercises:
/### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date*/



