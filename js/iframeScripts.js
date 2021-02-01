"use strict";

function setNewUrl() {
  let url = $("#url-field").val();
  if (!url.includes("https://") && !url.includes("www.")) {
    url = "https://www." + url;
  }
  if (!url.includes("https://")) {
    url = "https://" + url;
  }
  if (!url.includes("www.")) {
    url = "www." + url;
  }
  $("#custom-iframe").attr("src", url);
}

$("#urlButton").click(setNewUrl);

$(document).on("keypress", "#url-field", function (e) {
  if (e.which == 13) {
    setNewUrl();
  }
});
