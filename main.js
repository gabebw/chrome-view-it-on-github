function clearBody(){
  // $ doesn't work but jQuery does, for some reason
  jQuery("body").html("");
  // This is the actual console that you can see
  console.log("HELLO");
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "click_github_link" ) {
      clearBody();
    }
  }
)
