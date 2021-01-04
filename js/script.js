"use strict";

var interval;

function startUpdates() {
	updateValues();
	interval = window.setInterval(updateValues, 100);
}

function stopUpdates() {
	window.clearInterval(interval);
}

function updateValues() {
	var date = new Date();
	document.getElementById("year").textContent = date.getFullYear();
	document.getElementById("month").textContent = date.getMonth();
	document.getElementById("hour").textContent = date.getHours();
	document.getElementById("minute").textContent = date.getMinutes();
	document.getElementById("second").textContent = date.getSeconds()
	document.getElementById("millisecond").textContent = date.getMilliseconds();
}

function addEventListeners() {
	document.getElementById("startButton").onclick = startUpdates;
	document.getElementById("stopButton").onclick = stopUpdates;
}
