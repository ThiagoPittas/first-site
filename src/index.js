//rd
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/714063027149733899"), {
    method : "GET",
    mode : "cors"
}).then(function(responseJson) {
    if (responseJson.ok) {
        return responseJson.json();
    }
    return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    console.log(fieldDescribe.url);
    console.log(fieldDescribe.username);
    document.getElementById("rd").src = fieldDescribe.url;
    document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
    console.warn("Somethin went wrong.", $ownerNode);
    document.getElementById("rd");
    document.getElementById("username");
});
//gicatt
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/925822496203239474"), {
    method : "GET",
    mode : "cors"
}).then(function(responseJson) {
    if (responseJson.ok) {
        return responseJson.json();
    }
    return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    console.log(fieldDescribe.url);
    console.log(fieldDescribe.username);
    document.getElementById("gicatt").src = fieldDescribe.url;
    document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
    console.warn("Somethin went wrong.", $ownerNode);
    document.getElementById("gicatt");
    document.getElementById("username");
});
//isabella
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/961634910421012540"), {
    method : "GET",
    mode : "cors"
}).then(function(responseJson) {
    if (responseJson.ok) {
        return responseJson.json();
    }
    return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
    console.log(fieldDescribe.url);
    console.log(fieldDescribe.username);
    document.getElementById("isabella").src = fieldDescribe.url;
    document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
    console.warn("Somethin went wrong.", $ownerNode);
    document.getElementById("isabella");
    document.getElementById("username");
});