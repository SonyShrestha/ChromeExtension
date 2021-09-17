$(function(){
    $('#set_limit').click(function(){
        chrome.storage.sync.get('limit',function(budget){
            $('#limit').text(budget.limit);
        })
        var limit=$('#limit').val();
        if(limit){
            chrome.storage.sync.set({"limit":limit},function(){
                close();
            })
        }
    });
    $('#reset_total').click(function(){
        chrome.storage.sync.set({'total':0},function(){
            var notifOptions={
                type:"basic",
                iconUrl:"icon48.png",
                title:"Total Reset",
                message:"Total has been reset to 0."

            };
            chrome.notifications.create('',notifOptions)
        });
    })
})