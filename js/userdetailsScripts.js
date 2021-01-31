"use strict";

function showLocation(position) {
  $("#latitude").text(position.coords.latitude);
  $("#longitude").text(position.coords.longitude);
}

$("#user_agent").text(navigator.userAgent);
function showViewportSize() {
  $("#viewport").text($(window).width() + "×" + $(window).height());
}
showViewportSize();
$(window).on("resize", showViewportSize)
// window.addEventListener('resize', showViewportSize);

$("#languages").text(navigator.languages.join(", "));

$("#connection").text(navigator.connection.effectiveType);

navigator.getBattery().then((battery) => {
  $("#battery").text(battery.level * 100 + '%');
});

$.get('https://www.cloudflare.com/cdn-cgi/trace', function (response) {
  let data = response.split("\n")
  $("#ip").text(data[2].substring(3));
  $("#location").text(data[8].substring(4));
});

// Possible to reverse location with https://nominatim.openstreetmap.org/reverse?lat=53.399191&lon=-1.502347&format=json

$("#webdriver").text(navigator.webdriver ? navigator.webdriver : "undefined");

let map;

function initMap() {
  var mapCenter = new google.maps.LatLng(0.0, 0.0); //Google map Coordinates
  map = new google.maps.Map($("#map")[0], {
    center: mapCenter,
    zoom: 8
  });
}

$("#find-button").click(function () {
  navigator.geolocation.getCurrentPosition(showLocation)
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let infoWindow = new google.maps.InfoWindow({map: map});
      let pos = {lat: position.coords.latitude, lng: position.coords.longitude};
      console.log(1)
      infoWindow.setPosition(pos);
      infoWindow.setContent("Found your location <br/>Lat : " + position.coords.latitude + " </br>Lang :" + position.coords.longitude);
      map.panTo(pos);
      console.log(1)
    });
  } else {
    console.log("Browser doesn't support geolocation!");
  }
});
