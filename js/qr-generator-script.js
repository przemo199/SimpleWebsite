"use strict";

const url = "https://chart.googleapis.com/chart?cht=qr&";

function updateSrc() {
  let query = url;
  query += "chs=";
  query += $("#width").val();
  query += "x";
  query += $("#height").val();
  query += "&chl=";
  query += $("#text").val();
  query += "&choe=";
  query += $("#encoding").val();
  query += "&chld=";
  query += $("#error-correction").val();
  query += "|";
  query += $("#margin").val();
  $("#qr-code").attr("src", query);
  //return false;
}

$("#generate-button").click(updateSrc);