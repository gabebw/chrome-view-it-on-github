// This code runs in the context of a tab in Chrome.

function logToExtensionConsole(text){
  chrome.runtime.sendMessage({"message": "log", "text": text });
}

function clearBody(){
  var githubLink = jQuery("a:contains('view it on GitHub'):last").eq(0);
  var githubURL = githubLink.attr("href");

  console.log(deleteButton);
  console.log(deleteButton.length);
  console.log(deleteButton.attr("class"));

  $(document.body).trigger({ type: "keydown", which: "#".charCodeAt(0) });
  deleteButton.trigger({ type: "keydown", which: "#".charCodeAt(0) });
  deleteButton.parent().trigger({ type: "keydown", which: "#".charCodeAt(0) });
  deleteButton.parent().parent().trigger({ type: "keydown", which: "#".charCodeAt(0) });
  deleteButton.parent().parent().parent().trigger({ type: "keydown", which: "#".charCodeAt(0) });
  deleteButton.parent().parent().parent().parent().trigger({ type: "keydown", which: "#".charCodeAt(0) });
  deleteButton.parent().parent().parent().parent().parent().trigger({ type: "keydown", which: "#".charCodeAt(0) });
  deleteButton.parent().parent().parent().parent().parent().parent().trigger({ type: "keydown", which: "#".charCodeAt(0) });
  deleteButton.parent().parent().parent().parent().parent().parent().parent().trigger({ type: "keydown", which: "#".charCodeAt(0) });
  deleteButton.parent().parent().parent().parent().parent().parent().parent().parent().trigger({ type: "keydown", which: "#".charCodeAt(0) });


  // chrome.runtime.sendMessage({"message": "open_github_page", "url": githubURL});
}

window.addEventListener("load", function(event){
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "click_github_link" ) {
        clearBody();
      }
    }
  );
});
