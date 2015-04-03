// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        document.getElementById("btnGetPosition").onclick = function() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        };
        var onSuccess = function (position) {
            // onSuccess Callback
            // This method accepts a Position object, which contains the
            // current GPS coordinates
            /*
            'Latitude: ' + position.coords.latitude
            'Longitude: ' + position.coords.longitude
            'Altitude: ' + position.coords.altitude
            'Accuracy: ' + position.coords.accuracy
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy
            'Heading: ' + position.coords.heading
            'Speed: ' + position.coords.speed
            'Timestamp: ' + position.timestamp
            */
            var output = document.getElementById("out");

            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var speed = position.coords.speed;

            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '° <br>Speed is ' + speed + 'km/h</p>';

            /*var img = new Image();
            img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
            output.appendChild(img);*/
        };
        function onError(error) {
            // onError Callback receives a PositionError object
            alert('code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n');
        }

        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();