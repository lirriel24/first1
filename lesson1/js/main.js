var startTime;
var checkTime;

//Initialize function
var init = function() {
    // TODO:: Do your initialization job
    console.log("init() called");
    
    $(".ui-page#two").css({"color":"red","font-size":"24px"});

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (error) {
                console.error("getCurrentApplication(): " + error.message);
            }
        }
    });

    window.addEventListener('tizenhwkey', function(ev) {
        if (ev.keyName === "back") {
            var activePopup = document.querySelector('.ui-popup-active'),
                page = document.getElementsByClassName('ui-page-active')[0],
                pageid = page ? page.id : "";

            if (pageid === "one" && !activePopup) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {}
            } else {
                window.history.back();
            }
        }
    });
};


// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
    var today = new Date();
    var h = today.getHours();

    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('divbutton1').innerHTML = "Current time: " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 250);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

