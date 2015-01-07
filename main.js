debugger

$(function(){
  $("body").text("hi");
  // Operates on popup.html
  $("body").css({backgroundColor: "red"});
});
// chrome.tabs.query({'active': true}, function(tabs) {
//   chrome.tabs.executeScript({
//     code: '$("body").css({backgroundColor: "red"})'
//   });
// });
