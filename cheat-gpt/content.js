chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getOCRResult") {
        var element = document.activeElement;
        var text = element.innerText || element.textContent;
        sendResponse({ result: text });
    }
});

