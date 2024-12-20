document.getElementById('fillform').addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: truw }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content.js"]
        })
    })
})