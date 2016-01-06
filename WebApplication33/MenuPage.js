//HappyHour logic:  DONE
function SetHappyHourPrice() {
    var happyhour = 10;
    var happyhourrebate = 0.9;
    var datenow = new Date();
    var hournow = datenow.getHours();
    var normalprice = document.getElementsByClassName("price");

    if (happyhour === hournow) {
        for (var i = 0; i < normalprice.length; i++) {
            normalprice[i].innerHTML = (normalprice[i].innerHTML * happyhourrebate).toFixed(2);

        }
    }
}
document.getElementsByClassName('price').innerHTML = SetHappyHourPrice();


//Method calls:  DONE
TodaysOffer();
//Adjust price function: (add .toFixed(2) for 2 decimals): DONE

/*Add pictures function to span:*/
function AddPicturesToSpan() {
    var pictures = document.getElementsByTagName('span');
    for (var i = 0; i < pictures.length; i++) {
        pictures[i].innerHTML = "<img src='Images/Hamburger.png'/>";

    }
}
document.getElementsByTagName('span').innerHTML = AddPicturesToSpan();

/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

function TodaysOffer() {
    var todaysofferrebate = 0.8;
    var todaysdate = new Date().getDay();

    var weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    for (var i = 0; i < weekdays.length; i++) {
        if (i === todaysdate) {
            var weekdayinfo = document.getElementById(weekdays[i]);
            var normalprice = weekdayinfo.innerHTML;
            var todaysoffer = normalprice * todaysofferrebate;

            weekdayinfo.innerHTML = +todaysoffer.toFixed(2);
            weekdayinfo.style.backgroundColor = "red";
        }

    }
}

/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/