/*
When a click button is entered,
query in chrome storage if total already exists
if it does exist, add it to new total otherwise newtotal will be 0
add user entered amount to newtotal
set total back to newtotal
update our UI
*/

$(function(){
    chrome.storage.sync.get(['total','limit'],function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    })

    $('#submit_amount').click(function(){
        chrome.storage.sync.get(['total','limit'],function(budget){
            var newTotal=0;
            if(budget.total){
                newTotal+=parseInt(budget.total);
            }

            var amount=$('#amount_spent').val();
            if (amount){
                newTotal+=parseInt(amount);
            }
            chrome.storage.sync.set({'total':newTotal},function(){
                if ((amount) && (parseInt(newTotal)>=parseInt(budget.limit))){
                    var notifOptions={
                        type:"basic",
                        iconUrl:"icon48.png",
                        title:"Limit Reached",
                        message:"Uh oh! Limit is reached"
                    };
                    chrome.notifications.create('',notifOptions)
                }
            });

            $('#total').text(newTotal);
            $('#amount_spent').val('');
        })
    })
})