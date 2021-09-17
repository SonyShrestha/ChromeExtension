# Budget Manager
Features included:
<ol>
    <li>Browser Action Extension</li>
    <li>Accepts spending</li>
    <li>Displays total spending</li>
    <li> Notify user when limit is reached</li>
    <li>Option to reset total and limit</li>
</ol>
<br>

# Chrome Storage
Chrome Storage is a place where we can store value within a variable.<br>
We need permissions to use chrome storage. This permission is defined in manifest.json file.<br>
<br>

# Options Page
Options page can be viewed by right clicking on the extension.<br>
Options page will have HTML, CSS and JS as per requirement.<br>
In this project, we are going to set and reset budget limit.<br>
Options page should be specified in manifest file. (options_page)<br>
<br>

# Notifications
To enable notification, it should be specified in manifest.json file (permissions-> notifications)<br>
Sample Code for generating notification<br>
```
var notifOptions={
    type:"basic",
    iconUrl:"icon48.png",
    title:"Total Reset",
    message:"Total has been reset to 0."
};
chrome.notifications.create('',notifOptions)
```
<br>
Note: <br>
chrome.notifications.create('',notifOptions) will give notification each time a condition is met.<br>
chrome.notifications.create('notifName',notifOptions) will give notification once for individual notifName provided.<br>