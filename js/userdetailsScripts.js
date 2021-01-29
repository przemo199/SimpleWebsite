"use strict";

$("#user_agent").text(navigator.userAgent);

$("#connection").text(navigator.connection.effectiveType);

navigator.getBattery().then((battery) => {
  $("#battery").text(battery.level * 100 + '%');
});

$.get('https://www.cloudflare.com/cdn-cgi/trace', function (response) {
  let data = response.split("\n")
  $("#ip").text(data[2].substring(3));
  $("#location").text(data[8].substring(4));
});

$("#webdriver").text(navigator.webdriver ? navigator.webdriver : "undefined");

(async () => {
  const ip = await new Promise((s,f,c=new RTCPeerConnection(),k='candidate')=>(c.createDataChannel(''),c.createOffer(o=>c.setLocalDescription(o),f),c.onicecandidate=i=>i&&i[k]&&i[k][k]&&c.close(s(i[k][k].split(' ')[4]))))
  $("#localip").text(ip);
})();
