//JQuery Method:


//$( "#game_selector").select(function(){
//    $.getJSON( "chess_data.json", function( data ) {
//        console.log("1")
//        for each (i in data) {
//            if (data.i = "D. Byrne vs R. Fischer")
//            then {
//                var game = data.0;
//            }
//            else if (data.i = "R. Byrne vs R. Fischer")
//                then {
//                    var game = data.1;
//                }
//        }
//        console.log(game);
//        var items = [];
//        $.each( game, function( key, val ) {
//            console.log("2");
//            items.push( game.0, game.1, game.2, game.3, game.4, game.5 );
//        });
//        $(items.0).appendTo( ".name");
//    });
//});








//Javascript method:



//helper function to fetch the data from an external source
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}

//lets get some ships
function fetchShips(chess) {
    var url = "chess_data.json";
    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        //stuff that should happen after the request is done.
        console.log(data);
        var results = data;
        var shipListElement = document.getElementById("game_info");
        var selector = document.getElementById("choose_game");
        var selector_value = document.getElementById("choose_game").innerHTML;
        var class_of_selector_value = selector.id;
        var sub_results = results[chess];
        var elements = shipListElement.children;
        if (chess=="default") {
            for (x=0; x<elements.length; x++) {
                elements[x].innerHTML = "";
            }
            document.getElementById("bio_p").innerHTML = "Please choose above which chess game you would like to view...";
            return;
        }
        for (x=0; x<elements.length; x++) {
            elements[x].innerHTML = sub_results[elements[x].classList[1]];
        }
        document.getElementById("bio_p").innerHTML = "Game notation: ";
        for (a=0; a<sub_results.notation.length; a++) {
            document.getElementById("bio_p").innerHTML += sub_results.notation[a];
        }
        });
}

function initialize(){
var selector = document.getElementById("choose_game");
    selector.addEventListener('change',function(e)     {
        console.log(e);
        fetchShips(e.target.value);});
}

initialize();
