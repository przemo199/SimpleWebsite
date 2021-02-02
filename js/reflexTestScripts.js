"use strict";

const button = $("#test-button");

function prepareTest() {
  button.html("<p>Click on screen when it changes color</p>");
  button.off();
  setTimeout(startTest, 1000 + Math.random() * 1000);
}

function startTest() {
  button.css("background-color", "#A91B0D");
  let milliseconds = window.performance.now();
  button.click(function () {
    button.off();
    button.html("<p>Your reaction time: " + (window.performance.now() - milliseconds).toFixed(2) + "ms<br/>"
      + "Click to try again...</p>");
    button.css("background-color", "#1877f2");
    button.click(prepareTest);
  });
}

button.click(prepareTest);
