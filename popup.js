// //code to add event listener to button click

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   var url = tabs[0].url;
//   var regex = /proof\.html/;
//   if (regex.test(url)) {
//     url = url.replace(regex, '');
//   }
//   var copyTextarea = document.createElement('textarea');
//   document.body.appendChild(copyTextarea);
//   copyTextarea.value = url;
//   copyTextarea.select();
//   document.execCommand('copy');
//   document.body.removeChild(copyTextarea);
//   window.close();
// });

document.getElementById('copy').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    var regex = /proof\.html/;
    if (regex.test(url)) {
      url = url.replace(regex, '');
    }
    var copyTextarea = document.createElement('textarea');
    document.body.appendChild(copyTextarea);
    copyTextarea.value = url;
    console.log(copyTextarea.value);
    copyTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(copyTextarea);
    window.close();
  });
});
