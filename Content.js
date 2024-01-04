// background.js

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('youtube.com/watch')) {
    chrome.tabs.executeScript(tabId, { file: 'content.js' });
  }
});


// content.js

window.addEventListener('spfdone', skipAdsAndContinue);

window.addEventListener('yt-navigate-finish', skipAdsAndContinue);

function skipAdsAndContinue() {
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
  }
}
