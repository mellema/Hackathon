function doStuffWithDOM(element) {
    alert("I received the following DOM content:\n" + element);
}

// /* When the browser-action button is clicked... */
// chrome.browserAction.onClicked.addListener(function(tab) {
//     /*...check the URL of the active tab against our pattern and... */
//     if (urlRegex.test(tab.url)) {
//         /* ...if it matches, send a message specifying a callback too */
//         chrome.tabs.sendMessage(tab.id, { text: "report_back" },
//                                 doStuffWithDOM);
//     }
// });
//
// chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
//     chrome.tabs.executeScript(null,{file:"content.js"});
// });

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('background');
    switch(request.type) {
        case "dom-loaded":
            console.log(request.data.namer);
        break;
    }
    return true;
});
