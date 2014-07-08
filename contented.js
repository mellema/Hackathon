//content.js

/* Listen for messages */
// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     /* If the received message has the expected format... */
//     if (msg.text && (msg.text == "report_back")) {
//         /* Call the specified callback, passing
//            the web-pages DOM content as argument */
//     sendResponse(document.getElementById("mybutton").innerHTML);
//     }
// });

window.addEventListener("load", function() {
  console.log($('.send-message').attr('data-li-fullname'));
  console.log($('content'));

  chrome.extension.sendMessage({
    type: "dom-loaded",
    data: {
      namer: $('.send-message').attr('data-li-fullname')
    }
  });
}, true);

alert(document.title);
