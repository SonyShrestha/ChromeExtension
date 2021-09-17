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
a) It contains information about extension.<br>
b) It is written in JSON format.<br>
c) Mandatory fields:<br>
    -> Manifest Version (manifest_version)<br>
    -> Name of the extension (name)<br>
    -> Version of the extension (version)<br>
<br>
d) Optional fields:<br>
    -> Description for extension (description)<br>
    -> Icon for extension (icon-> 128, 48, 16)<br>
            Google recommends to provide icon of three different sizes: 128X128, 48X48, 16X16 so that it can choose among icons depending on where it has to display our extension<br>
    -> Browser Action extension (default_icon, default_popup)<br>
            We need to specify that our extension is browser action extension<br>
<br>
# Writing HTML page 
Our Extension can have one or more HTML pages that represents UI of our extension.<br>
A basic popup html page is written.<br>
<br>

# Add extension to Chrome Browser
Chrome-> More Tools-> Extension-> Turn on Developer Mode-> Load unpacked-> Select folder that contains extension <br>
<br>

# Writing JavaScript File
We can write javascript file and add its reference in html file.<br>
Following line should be included in head section of HTML file.<br>
<script src="jquery-3.1.0.min.js"></script><br>
<script src="popup.js" type="text/javascript"></script><br>


# Adding CSS file
To add External CSS file <br>
<link rel="stylesheet" type="text/css" href="style.css"> <br>