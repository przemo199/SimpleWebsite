"use strict";

var interval;

function startUpdates() {
  if (interval == null) {
    updateValues();
    interval = window.setInterval(updateValues, 100);
  }
}

function stopUpdates() {
  window.clearInterval(interval);
  interval = null;
}

function updateValues() {
  var date = new Date();
  document.getElementById("year").textContent = date.getFullYear();
  document.getElementById("month").textContent = date.getMonth();
  document.getElementById("date").textContent = date.getDate();
  document.getElementById("day").textContent = date.getDay();
  document.getElementById("hour").textContent = date.getHours();
  document.getElementById("minute").textContent = date.getMinutes();
  document.getElementById("second").textContent = date.getSeconds()
  document.getElementById("millisecond").textContent = date.getMilliseconds();
}

function addEventListeners() {
  document.getElementById("startButton").onclick = startUpdates;
  document.getElementById("stopButton").onclick = stopUpdates;
}

addEventListeners();
