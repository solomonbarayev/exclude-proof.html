chrome.browserAction.onClicked.addListener(function (tab) {
  var url = tab.url;
  if (url.indexOf('proof.html') !== -1) {
    url = url.replace('proof.html', '');
  }
  chrome.permissions.request(
    { permissions: ['clipboardWrite'] },
    function (granted) {
      if (granted) {
        var input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
    }
  );
});
