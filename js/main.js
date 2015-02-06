document.addEventListener("DOMContentLoaded", function(){
  
    if(navigator.geolocation) { 
    
        var params = {enableHighAccuracy: false, timeout:3600, maximumAge:60000};
    
        navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
    
    } else {
    //browser does not support geolocation
        alert("Sorry, but your browser does not support location based awesomeness.")
    }
});

function reportPosition(position) { 
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    var output = document.querySelector("#output");
    output.appendChild(canvas);
    var context = canvas.getContext("2d");
    var img = document.createElement("img");
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&zoom=14&size=400x400&scale=2&maptype=terrain&language=english&markers=color:red|"+latitude+","+longitude+"&key=AIzaSyDP68CXSK9TynSN4n_Moo7PPakL8SQM0xk";
    img.onload = function imageDraw() {
        context.drawImage(img, 0, 0, 400, 400); 
    } 
    console.log(latitude);
    console.log(longitude);
}

function gpsError(error) {   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}

    