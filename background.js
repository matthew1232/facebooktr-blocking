chrome.webRequest.onBeforeRequest.addListener(
    function(details) {    
        const shouldCancel = details.url.includes('facebook.com/tr')

        if (shouldCancel){
            console.log(`Blocked Facebook request to ${details.url} from ${details.initiator}`);
        };

        return {cancel: shouldCancel};
    },
 {urls: ["<all_urls>"]},
["blocking"]);