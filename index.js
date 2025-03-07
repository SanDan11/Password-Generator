function generatePassword() {
    var length = 14;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var retVal = "";

    for (var i = 0; i < length; ++i) {

        retVal += charset.charAt(Math.floor(Math.random() * charset.length));

    }
    document.getElementById("password").value = retVal;
}

function copyText() {
    var copyText = document.getElementById("password");

    copyText.select();

    navigator.clipboard.writeText(copyText.value);
}

function startTime() {
    const today = new Date();

    const options = {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    const time = today.toLocaleString("en-US", options);

    document.getElementById("clock").innerHTML = time;

    setTimeout(startTime, 1000);
}


function checkTime(i) {
    if (i < 10) { 
        i = "0" + i; 
    }
    return i;
}


function checkTime(i) {
    if (i <10 ) {i = "0" + 1}
    return i;
}