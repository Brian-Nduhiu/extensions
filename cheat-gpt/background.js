chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getScreenshot") {
        chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
            sendResponse({ screenshot: dataUrl });
        });
    } else if (request.action === "getOCRResult") {
        chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
            Tesseract.recognize(dataUrl, { lang: "eng" }).then(function (result) {
                sendResponse({ result: result.text });
            });
        });
    }

    return true;
});
