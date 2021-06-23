"use strict";

const testButton = $("#test-button");
let t;

function prepareTest() {
  testButton.find("p").text("Click on screen as quickly as you can when the background colour changes");
  testButton.off();
  testButton.click(handleFalseStart);
  t = setTimeout(startTest, 1000 + Math.random() * 1000);
}

function handleFalseStart() {
  testButton.off();
  clearTimeout(t);
  testButton.find("p").html("You clicked too early<br/>Click to try again...");
  testButton.click(prepareTest);
}

function startTest() {
  testButton.off();
  testButton.css("background-color", "#A91B0D");
  let milliseconds = window.performance.now();
  testButton.click(function () {
    testButton.off();
    testButton.find("p").html("Your reaction time: " + (window.performance.now() - milliseconds).toFixed(2) + "ms<br/>"
        + "Click to try again...");
    testButton.css("background-color", "#1877f2");
    testButton.click(prepareTest);
  });
}

testButton.click(prepareTest);
