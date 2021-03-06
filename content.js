function openGithubLinkInNewTab(){
  var githubLink = jQuery("a:contains('view it on GitHub'):last").eq(0);
  var githubURL = githubLink.attr("href");

  chrome.runtime.sendMessage({"message": "open_github_page", "url": githubURL});
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "click_github_link" ) {
      openGithubLinkInNewTab()
    }
  }
);
