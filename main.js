function _overlay() {
  var text = document.createTextNode("HELLO THERE");
  var o = document.createElement("div");
  o.setAttribute("id", "instapaper_overlay");
  o.appendChild(text);
  // o.setAttribute('id', 'ov');
  // o.setAttribute('class', 'instapaper_overlay instapaper_ignore');
  return o;
}

function clearBody(){
  var body = document.createElement("body");
  document.body.appendChild(_overlay());
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    clearBody();
    $("body").html("");
  }
)
