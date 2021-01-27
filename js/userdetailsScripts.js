$("#user_agent").text(navigator.userAgent);
$("#connection").text(navigator.connection.effectiveType);
for (var property in navigator) {
  console.log(property)
  console.log(navigator[property])
}
navigator.getBattery().then((battery) => {
  $("#battery").text(battery)
})
