function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}

function fetchShips(chess) {
    var url = "chess_data.json";
    getJSON(url).then(function (data) {
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
            document.getElementById("bio_p").innerHTML += sub_results.notation[a] + "   ";
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
