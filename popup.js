document.getElementById('copy').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    var regex = /proof\.html/;
    var splitUrl = url.split('proof.html');
    var path = splitUrl[0];
    if (regex.test(url)) {
      url = path;
    }
    var copyTextarea = document.createElement('textarea');
    document.body.appendChild(copyTextarea);
    copyTextarea.value = path;
    console.log(copyTextarea.value);
    copyTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(copyTextarea);
    window.close();
  });
});
