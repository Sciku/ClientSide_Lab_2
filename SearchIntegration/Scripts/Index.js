$(document).ready(function () {
    searchFunction();
    $('#search').keydown(function ()
    {
        searchFunction();
    });

});
    function searchFunction() {
            var searchfield = $('#search').val();
            var myExpression = new RegExp(searchfield, 'i');
            $.getJSON('Menuitems.json', function (data) {
                var output = "<ul class='searchresults'>";
                $.each(data, function (key, val) {

                    if ((val.name.search(myExpression) !== -1) ||
                        (val.about.search(myExpression) !== -1)) {
                        output += "<li>";
                        output += "<p>";
                        output += val.name;
                        output += val.about;
                        output += "</p>";
                        output += "<img src='Images/" + val.image
                        output += "'alt='" + val.name;
                        output += "'/>";
                        output += "</li>";
                    }
                });
                output += "</ul>";
                $('#update').html(output);
            });
    }
