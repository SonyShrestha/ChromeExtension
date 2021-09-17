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
a) It contains information about extension.
b) It is written in JSON format.
c) Mandatory fields:
    -> Manifest Version (manifest_version)
    -> Name of the extension (name)
    -> Version of the extension (version)

d) Optional fields:
    -> Description for extension (description)
    -> Icon for extension (icon-> 128, 48, 16)
            Google recommends to provide icon of three different sizes: 128X128, 48X48, 16X16 so that it can choose among icons depending on where it has to display our extension
    -> Browser Action extension (default_icon, default_popup)
            We need to specify that our extension is browser action extension


Writing HTML page 
Our Extension can have one or more HTML pages that represents UI of our extension.
A basic popup html page is written.


Add extension to Chrome Browser
Chrome-> More Tools-> Extension-> Turn on Developer Mode-> Load unpacked-> Select folder that contains extension 


Writing JavaScript File
We can write javascript file and add its reference in html file.
Following line should be included in head section of HTML file.
<script src="jquery-3.1.0.min.js"></script>
<script src="popup.js" type="text/javascript"></script>


Adding CSS file
To add External CSS file
<link rel="stylesheet" type="text/css" href="style.css"> 