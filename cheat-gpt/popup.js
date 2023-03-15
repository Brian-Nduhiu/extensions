chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getOCRResult" }, function (response) {
        if (response && response.result) {
            document.getElementById("result").textContent = response.result;
        }
    });
});
