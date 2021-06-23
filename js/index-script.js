"use strict";

let interval;

function startUpdates() {
  if (!interval) {
    updateValues();
    interval = window.setInterval(updateValues, 100);
  }
}

function stopUpdates() {
  window.clearInterval(interval);
  interval = null;
}

function updateValues() {
  let date = new Date();
  document.getElementById("year").textContent = date.getFullYear().toString();
  document.getElementById("month").textContent = date.getMonth().toString();
  document.getElementById("date").textContent = date.getDate().toString();
  document.getElementById("day").textContent = date.getDay().toString();
  document.getElementById("hour").textContent = date.getHours().toString();
  document.getElementById("minute").textContent = date.getMinutes().toString();
  document.getElementById("second").textContent = date.getSeconds().toString();
  document.getElementById("millisecond").textContent = date.getMilliseconds().toString();
}

function showModal() {
  $("#mainModal").css("display", "block");
}

function closeModal() {
  $("#mainModal").css("display", "none");
}

function addListeners() {
  $("#startButton").click(() => {
    startUpdates();
    showModal();
  });

  $("#stopButton").click(stopUpdates);

  const buttons = Array.prototype.slice.call($(".close"));
  for (const button of buttons) {
    button.onclick = closeModal;
  }

  window.onclick = function (event) {
    if ($("#mainModal").is(event.target)) {
      closeModal();
    }
  }
}

addListeners();
