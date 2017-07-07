// Current Location Scripts
(function () {

    var status = document.getElementById('status');

    (function getGeoLocation() {
        status.innerHTML = 'Getting Location...';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/7aad11ba4c630761/geolookup/conditions/q/"+lat+","+ long+".json";
        //change this to the correct URL for wunderground
        getJSON(url).then(function (data) {
            console.log(data);
            //add the code necessary here to update the page with all of the correct data points.
            var newH1 = data.location.city + ", " + data.location.state + " - " + document.getElementById("cityDisplay").innerHTML;
            console.log(newH1);

            document.getElementById("cityDisplay").innerHTML = newH1;
            var newTitle = data.location.city + ", " + data.location.state + " - " + document.getElementById("title").innerHTML;
            document.getElementById("title").innerHTML = newTitle;

            document.getElementById("currentTemp").innerHTML = Math.round(data.current_observation.temp_f) + "&#176;";

            document.getElementById("summary").innerHTML = data.current_observation.weather;

            document.getElementById("add1").innerHTML = "Wind speed: " + data.current_observation.wind_mph + " mph";

            document.getElementById("add2").innerHTML = data.current_observation.observation_time;
            //I am here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //this line will cause the Loading message to fade away.
            document.getElementById("cover").classList.add('fadeout');

        });


    }


    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());
