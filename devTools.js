//devTools.js

chrome.devtools.panels.create(
  "GroupedIn", 
  "img/icon16.png", 
  "index.html",
  function() {

  }
);

window.onload = function() {
  var port = chrome.extension.connect({ name: "color-divs-port" });
  document.getElementById("button").onclick = function() {
      port.postMessage({ type: "color-divs"});
  }
}