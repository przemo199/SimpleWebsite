"use strict";

let map = $("#map");

function showLocationOnMap() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(displayLocation);
    navigator.geolocation.getCurrentPosition(panMap);
  } else {
    $("#latitude").text("Browser doesn't support geolocation!");
    $("#longitude").text("Browser doesn't support geolocation!");
  }
}

function displayLocation(position) {
  $("#latitude").text(position.coords.latitude);
  $("#longitude").text(position.coords.longitude);
}

function panMap(position) {
  let newSrc = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19034.01076623676!2d" +
      position.coords.longitude + "!3d" + position.coords.latitude +
      "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2suk!4v1613246103332!5m2!1spl!2suk";
  console.log(newSrc);
  map.attr("src", newSrc);
}

function showViewportSize() {
  $("#viewport").text($(window).width() + "×" + $(window).height());
}

$("#user_agent").text(navigator.userAgent);

$(window).on("resize", showViewportSize);
showViewportSize();

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

$("#find-button").click(showLocationOnMap);
