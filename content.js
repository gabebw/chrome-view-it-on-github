function clearBody(){
  var githubLink = jQuery("a:contains('view it on GitHub'):last").eq(0);
  var githubURL = githubLink.attr("href");
  var deleteButton = jQuery("[data-tooltip='Delete']:visible").eq(0);

  deleteButton.trigger("mousedown");
  deleteButton.trigger("mouseup");
  deleteButton.trigger("keydown");
  deleteButton.trigger("keyup");
  deleteButton.trigger("click");
  // chrome.runtime.sendMessage({"message": "open_github_page", "url": githubURL});
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "click_github_link" ) {
      clearBody();
    }
  }
);
