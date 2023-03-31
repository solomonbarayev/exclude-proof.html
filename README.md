# exclude-proof.html

this extension is used to for copy the URL of the current page and exclude the proof.html from the URL.

Intension:
When working with Quadient Inspire Designer, we need to copy the URL of the page and paste it in the browser. But the URL contains the proof.html which gets in the way of pasting the path back into file explorer to rename the html file for the purpose of storing the html page (renamed) into server.
So this extension will help you to copy the URL without the proof.html.

### To add the extension to your chrome:

#### step 1:

clone the repo to your local machine.

#### step 2:

go to chrome://extensions/ and enable developer mode. Then click on "Load unpacked" and select the folder where you cloned the repository.

##### future updates:

open file explorer from the extension itself to the path of the html file without the proof.html.
explore:
window.open(path); //since it already include the full path
