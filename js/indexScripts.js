"use strict";

let interval;

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
  let date = new Date();
  document.getElementById("year").textContent = date.getFullYear();
  document.getElementById("month").textContent = date.getMonth();
  document.getElementById("date").textContent = date.getDate();
  document.getElementById("day").textContent = date.getDay();
  document.getElementById("hour").textContent = date.getHours();
  document.getElementById("minute").textContent = date.getMinutes();
  document.getElementById("second").textContent = date.getSeconds()
  document.getElementById("millisecond").textContent = date.getMilliseconds();
}

function showModal() {
  document.getElementById("mainModal").style.display = "block";
}

function closeModal() {
  document.getElementById("mainModal").style.display = "none";
}

function addListeners() {
  document.getElementById('startButton').addEventListener('click', function () {
    startUpdates();
    showModal();
  });

  document.getElementById("stopButton").onclick = stopUpdates;

  const buttons = [].slice.call(document.querySelectorAll(".close"));

  for (const button of buttons) {
    button.addEventListener("click", closeModal);
  }

  window.onclick = function (event) {
    let modal = document.getElementById("mainModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

window.addEventListener('DOMContentLoaded', addListeners);
