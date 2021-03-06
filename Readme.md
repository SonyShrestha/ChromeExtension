# Extension Types
a) Browser Action<br>
This type of extension stays in toolbar and is accessible at all times<br>
<br>
b) Page Action<br>
This type of extension stays in toolbar but grey-ed out and is accessible only on certain pages<br>
<br>
c) Neither Browser Action nor Page Action<br>
This type of extension runs in the background<br>
<br>

# Writing a Manifest file
<ol>
    <li>It contains information about extension.</li>
    <li>It is written in JSON format.</li>
    <li>Mandatory fields:</li>
    <ul>
        <li>Manifest Version (manifest_version)</li>
        <li>Name of the extension (name)</li>
        <li>Version of the extension (version)</li>
    </ul>
    <li>Optional fields:</li>
    <ul>
        <li>Description for extension (description)</li>
        <li>Icon for extension (icon-> 128, 48, 16)</li>
            Google recommends to provide icon of three different sizes: 128X128, 48X48, 16X16 so that it can choose among icons depending on where it has to display our extension
        <li>Browser Action extension (browser_action--> default_icon, default_popup, default_title)</li>
            We need to specify that our extension is browser action extension<br>
            default_icon-> Icon that represents extension
            default_popup-> HTML file that represents UI of respective extension
            default_title-> Text that gets displayed when we hover over chrome extension
        <li>Page Action Extension (page_action--> default_icon, default_popup, default_title)</li>
            We need to specify that our extension is page action extension<br>
            default_icon-> Icon that represents extension
            default_popup-> HTML file that represents UI of respective extension
            default_title-> Text that gets displayed when we hover over chrome extension
</ol>
<br>
Sample manifest file for browser_action extension

```
{
    "manifest_version":2,
    "name":"Budget Manager",
    "version":"1.0",
    "description":"Tracks your overall spending",
    "icons":{
        "128":"icon128.png",
        "48":"icon48.png",
        "16":"icon16.png"
    },
    "browser_action":{
        "default_icon":"icon16.png",
        "default_popup":"popup.html",
        "default_title":"Budget Manager"
    },
    "options_page":"option.html",
    "permissions":[
        "storage",
        "notifications"
    ]
}
```
<br><br>

# Writing HTML page 
Our Extension can have one or more HTML pages that represents UI of our extension.<br>
A basic popup html page is written.<br>
<br><br>

# Add extension to Chrome Browser
Chrome-> More Tools-> Extension-> Turn on Developer Mode-> Load unpacked-> Select folder that contains extension <br>
<br><br>

# Writing JavaScript File
We can write javascript file and add its reference in html file.<br>
Following line should be included in head section of HTML file.<br>
```
<script src="jquery-3.1.0.min.js"></script><br>
<script src="popup.js" type="text/javascript"></script>
```
<br><br>

# Adding CSS file
To add External CSS file <br>
```
<link rel="stylesheet" type="text/css" href="style.css"> 
```
<br><br>

# Chrome Storage
Chrome Storage is a place where we can store value within a variable.<br>
We need permissions to use chrome storage. This permission is defined in manifest.json file.(permissions-> storage)<br>

```
# Get one variable
chrome.storage.sync.get('total'); 

# Get multiple variables
chrome.storage.sync.get(['total','limit']);

# Get multiple variables and call function
chrome.storage.sync.get(['total','limit'],function(){

});

# Set value of a variable
chrome.storage.sync.set({'total':newTotal});

# Set value of a variable and call function
chrome.storage.sync.set({'total':newTotal},function(){

});
```
<br><br>

# Options Page
<ol>
    <li>Options page can be viewed by right clicking on the extension.</li>
    <li>Options page will have HTML, CSS and JS as per requirement.</li>
    <li>Options page should be specified in manifest file. (options_page)</li>
</ol>
<br><br>

# Notifications
To enable notification, it should be specified in manifest.json file (permissions-> notifications)<br><br>
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
<br><br>

# Background Page vs Event Page
Background page runs at all times an consume resources even when not required.<br>
Event page runs only when required.<br>
<br><br>

# Context Menu 
It is possible to display our chrome extension as a context menu item (options displayed when we right click in Chrome)<br>
<br><br>

# Create background and event page and working with Context Menu
To create background and event page, we need to specify its information in manifest page and set permission to display extension into context menu (permissions-> contextMenus)<br>

```
-- Manifest file format

"background":{
    "scripts":["eventPage.js"],
    "persistent":false
},

"permissions":[
    "storage",
    "notifications",
    "contextMenus"
]
```

```
-- Context menu to appear on selection of text on chrome browser

var contextMenuItem={
    "id":"spendMoney",
    "title":"SpendMoney",
    "contexts":["selection"]
};
chrome.contextMenus.create(contextMenuItem);
```
<br><br>

# Badge
Badges appear over the Browser Action Icon and include a short text.<br>
Chrome storage can listen to the changes being made to chrome storage value.<br>

```
chrome.storage.onChanged.addListener(function(changes,storageName){
    chrome.browserAction.setBadgeText({"text":changes.total.newValue.toString()});
})
```
<br><br>

# Page Action Chrome Extension
This extension will remain active only on specific chrome pages.<br>
To create page action chrome extension, we should use page_action key in manifest.json file.<br>
<br><br>

# Content Scripts
<ol>
    <li>They are capable of manipulating DOM</li>
    <li>Runs in the context of the web page</li>
    <li>Can change DOM</li>
    <li>Font color, hyperlinks, structure DOM</li>
    <li>Cannot use all chrome API's</li>
</ol>
<br>

```
Note:
-> Content Page cannot highlight page action icon.
-> Event Page can hightlight page action icon.
-> Popup Script cannot change font style of any particular HTML element.
-> Content Script can change font style of any particular HTML element.
```