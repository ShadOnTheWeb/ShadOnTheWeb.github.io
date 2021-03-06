// Current Location Scripts
(function () {

    var status = document.getElementById('status');

    (function getGeoLocation() {
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
            document.getElementById("location").innerHTML = "&#9728; " + data.location.city + ", " + data.location.state;
            var newTitle = data.location.city + ", " + data.location.state + " " + document.getElementById("title").innerHTML;
            document.getElementById("title").innerHTML = newTitle;

            document.getElementById("temp_right_now").innerHTML = Math.round(data.current_observation.temp_f) + "&#176;";

            document.getElementById("curr_condition").innerHTML = data.current_observation.weather;

            document.getElementById("wind").innerHTML = "Wind: " + data.current_observation.wind_mph + " mph " + data.current_observation.wind_dir;

            document.getElementById("precipitation").innerHTML = "Precipitation: " + Math.round(data.current_observation.precip_today_in) + "in";

            //this line will cause the Loading message to fade away.

        });


    }


    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());
