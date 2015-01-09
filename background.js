// This script runs in the background.
console.log("hi from background.js");

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "click_github_link"});
  });
});

// Listens to messages sent by chrome.tabs.sendMessage
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("LISTENER FIRED");
});
