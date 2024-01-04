// content.js

window.addEventListener('spfdone', skipAdsAndContinue);

window.addEventListener('yt-navigate-finish', skipAdsAndContinue);

function skipAdsAndContinue() {
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
  }
}
