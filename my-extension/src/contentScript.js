'use strict';
import './popup.css';


const pageTitle = document.head.getElementsByTagName('title')[0].innerHTML;
console.log(
  `Page title is: '${pageTitle}' - evaluated by Chrome extension's 'contentScript.js' file`
);

// Communicate with background file by sending a message
chrome.runtime.sendMessage(
  {
    type: 'GREETINGS',
    payload: {
      message: 'Hello, my name is Con. I am from ContentScript.',
    },
  },
  (response) => {
    console.log(response.message);
  }

);

// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'COUNT') {
    console.log(`Current count is ${request.payload.count}`);
  }

  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  sendResponse({});
  return true;
});
document.addEventListener('load', overrideCSS);
document.addEventListener('DOM', overrideCSS);
overrideCSS();


function overrideCSS() {

    chrome.scripting.insertCSS({
      target: { tabId: activeTab.id },
      files: ["popup.css"],
      allFrames: true
    });
  chrome.tabs.insertCSS({
    target: { tabId: activeTab.id },
    files: ["popup.css"]
  });

  var link = document.createElement("link");
  link.href = chrome.extension.getURL("popup.css");
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
}

