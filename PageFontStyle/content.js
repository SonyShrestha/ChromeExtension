chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "changeColor"){
        var addColor = '#' + request.clickedColor;               
        $('.type--h2').css('font-style','italic');
        $('.type--h2').css('color', addColor);
    }
});
