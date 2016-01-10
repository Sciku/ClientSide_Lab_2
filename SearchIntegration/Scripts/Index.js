$(document).ready(function () {
    searchFunction();  

    $(".box").change(function () {
        searchFunction();  //Triggas när man ändrar i en checkbox
    });

    $('#search').keydown(function () {
        searchFunction();    
    });
   
}) ;


function searchFunction() {
    var output = "<ul class='searchresults'>";
    var searchfield = $('#search').val();
    var myExpression = new RegExp(searchfield, 'i');
    $.getJSON('Menuitems.json', function (data) {
        $.each(data, function (key, val) {

            if ((val.name.search(myExpression) !== -1) ||
                (val.about.search(myExpression) !== -1)) {
                if ($("#" + val.category).is (":checked")) {   //Eftersom jag har samma namn på på mina checkbox-id som category i JSON filen kollar jag om någon av dessa checkboxarna är iklickad

                    output += "<li>";
                    output += "<p>";
                    output += "<strong>" + val.name + "</strong>";
                    output += val.about;
                    output += "</p>";
                    output += "<img src='Images/" + val.image;
                    output += "'alt='" + val.name;
                    output += "'/>";
                    output += "</li>";
                }
            }
        });
        output += "</ul>";
        $('#update').html(output);
    });
}
