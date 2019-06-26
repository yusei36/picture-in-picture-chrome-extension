document.addEventListener('keyup', function (event) {
  if (event.altKey && event.code === 'KeyP') {
    chrome.runtime.sendMessage({ message: 'keyup' });
  }
});
