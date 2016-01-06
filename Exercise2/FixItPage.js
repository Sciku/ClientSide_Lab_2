/// <reference path="D:\VS projects\WebApplication33\Exercise2\FixIt.html" />


//For each of the following aplicable exercise below you should present a box on the page 
//with an alert that shows the result when the box is clicked!

//###Window object at page 124:###
//1. Link the script with FixIt.hmtl: DONE

//2. Add som tags that doesn't change the visual part of the paragraph: DONE

/*3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page*/

function CreateBox1(propfunction) {
    var borderbox = document.createElement("div");
    borderbox.setAttribute("class", "box");
    var site = document.getElementsByTagName("body");
    site[0].appendChild(borderbox);
    borderbox.addEventListener('click', propfunction, true);
}
CreateBox1(propertyplay);

function propertyplay() {
    var windowobjectarray = new Array();
    windowobjectarray.push("The height of my window is: " + window.screen.height);
    windowobjectarray.push(" The width of my window is: " + window.screen.width);

    alert(windowobjectarray);
};

//4.Add a stylesheet that displays the changed words in fat font and in red.


function makeclassforspans(){
    var myspans = document.getElementsByTagName("span");

    for (var i = 0; i < myspans.length; i++) {
        myspans[i].setAttribute("class", "FatAndRed");
    }
}
makeclassforspans();

//5. PLay with the Methods 

function CreateBox2(objectfunction) {
    var borderbox2 = document.createElement("div");
    borderbox2.setAttribute("class", "box2");
    var site = document.getElementsByTagName("body");
    site[0].appendChild(borderbox2);
    borderbox2.addEventListener('click', objectfunction, true);
}

CreateBox2(methodplay);

function methodplay() {
    window.alert("Yo! I'm a psychic, I foresee that in your immediate future you will want to print something. But then, you remember that you just want to look at some Thundercats");
    window.print();
    window.open("http://thundercats.wikia.com/wiki/ThunderCats_Wiki");
}
//### DOM page 126:###
//6. Play with the DOM-properties
function CreateBox3(DOMfunction) {
    var borderbox3 = document.createElement("div");
    borderbox3.setAttribute("class", "box3");
    var site = document.getElementsByTagName("body");
    site[0].appendChild(borderbox3);
    borderbox3.addEventListener('mouseover', DOMfunction, true);
}

CreateBox3(dompropertiesplay);

function dompropertiesplay() {
    var DOMspan = document.getElementById("DOMplay");
    var documenttitle = document.title;

    DOMspan.innerHTML = "The title of this page is:  " + documenttitle;
}

//### String objects page 128, 129: ###

//7. Save the the text from the makeMeAnArray-paragraph into an array.
//8. Use all the string methods and propertys allong with the array

function CreateBox4(arrayfunction) {
    var borderbox4 = document.createElement("div");
    borderbox4.setAttribute("class", "box4");
    var site = document.getElementsByTagName("body");
    site[0].appendChild(borderbox4);
    borderbox4.addEventListener('mouseover', arrayfunction, true);
}

CreateBox4(makemeanarray);

function makemeanarray() {
    var textfromarrayparagraph = document.getElementById("makeMeAnArray").innerHTML;
    alert(textfromarrayparagraph.length);
    alert(textfromarrayparagraph.toUpperCase());
    alert(textfromarrayparagraph.toLowerCase());
    alert(textfromarrayparagraph.charAt(4));
    alert(textfromarrayparagraph.indexOf('s'));
    alert(textfromarrayparagraph.lastIndexOf('w'));
    alert(textfromarrayparagraph.substring(78, 98));
    alert(textfromarrayparagraph.split(''));
    alert(textfromarrayparagraph.trim());
    alert(textfromarrayparagraph.replace('wuf', 'SNUDAN'));

}





//### String objects page 132: ###
//9. check if the 4th element in the array is a number



//### Math page 134: ###
//10. Round one of the numbers in the paragraph up/down
//11. replace the 3rd word with PI then roud it to the nearest integer

//### Date object###
//12. Calculate how many days it's until your birthday and present it.
//13. Calculate how many minutes old you are and present it.

/*Bonus exercises:
/### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date*/



