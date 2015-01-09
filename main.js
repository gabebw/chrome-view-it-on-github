// This code runs in the context of a tab in Chrome.

function clearBody(){
  var githubLink = jQuery("a:contains('view it on GitHub'):last").eq(0);
  var githubURL = githubLink.attr("href");
  var deleteButton = jQuery("[data-tooltip='Delete']:visible").eq(0);

  chrome.runtime.sendMessage({"message": "open_github_page", "url": githubURL});
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("got message");
    if( request.message === "click_github_link" ) {
      clearBody();
    }
  }
);
