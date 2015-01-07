chrome.tabs.query({'active': true}, function(tabs) {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});
