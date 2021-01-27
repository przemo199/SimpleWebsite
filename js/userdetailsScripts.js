"use strict";

$("#user_agent").text(navigator.userAgent);

$("#connection").text(navigator.connection.effectiveType);

// for (var property in navigator) {
//   console.log(property)
//   console.log(navigator[property])
// }

navigator.getBattery().then((battery) => {
  $("#battery").text(battery.level*100 + '%');
});

$.get('https://www.cloudflare.com/cdn-cgi/trace', function(response) {
  let data = response.split("\n")
  $("#ip").text(data[2].substring(3));
  $("#location").text(data[8].substring(4));
});

$("#webdriver").text(navigator.webdriver ? navigator.webdriver : "undefined");

/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
  //compatibility for firefox and chrome
  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({
        iceServers: []
      }),
      noop = function() {},
      localIPs = {},
      ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
      key;

  function iterateIP(ip) {
    if (!localIPs[ip]) onNewIP(ip);
    localIPs[ip] = true;
  }

  //create a bogus data channel
  pc.createDataChannel("");

  // create offer and set local description
  pc.createOffer().then(function(sdp) {
    sdp.sdp.split('\n').forEach(function(line) {
      if (line.indexOf('candidate') < 0) return;
      line.match(ipRegex).forEach(iterateIP);
    });

    pc.setLocalDescription(sdp, noop, noop);
  }).catch(function(reason) {
    alert("Error:" + reason);
  });

  //listen for candidate events
  pc.onicecandidate = function(ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}

// Usage

getUserIP(function(ip) {
  alert("Got IP! :" + ip);
});
