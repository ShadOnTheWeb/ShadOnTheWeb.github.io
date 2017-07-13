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


//
////helper function to fetch the data from an external source
//function getJSON(url) {
//    return fetch(url)
//        .then(function (response) {
//        return response.json();
//    })
//        .catch(function (error) {
//        console.log(error);
//    });
//}
//
////lets get some ships
//function fetchShips() {
//    var url = "chess_data.json";
//    //call getJSON function to get the list of ships from the api
//    getJSON(url).then(function (data) {
//        //stuff that should happen after the request is done.
//        console.log(data);
//        var results = data.results;
//        var shipListElement = document.getElementById('shiplist');
//        shipListElement.innerHTML = "";
//        results.forEach(function(ship) {
//            var listItem = document.createElement('li');
//            var anchor = document.createElement('a');
//            anchor.setAttribute('href',ship.url);
//            anchor.innerHTML = ship.name;
//            listItem.appendChild(anchor);
//            shipListElement.appendChild(listItem);
//            anchor.addEventListener('click',function(event){
//                //when clicked the default link behavior should be stopped, and the ship details function should be called, passing the value of the href attritute in. Prevent it from opening the other page and make it add the details to a div on the page instead. How do you stop the default behavior? event.preventDefault(); This replaces the querySelectorAll in part 2.
//                event.preventDefault();
//                document.getElementById('model').innerHTML = ship.model;
//                document.getElementById('cost').innerHTML = ship.cost_in_credits;
//                document.getElementById('crew').innerHTML = ship.crew;
//                //getShipDetails(ship.url);
//            });
//        });
//    });
//}
//
//fetchShips();


