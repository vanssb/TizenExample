window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
    document.getElementById("image").style.display = "none";
    document.getElementById("resolution").style.display = "none";
    console.log(document.getElementById("image").style.display);
    document.getElementById("resolution").innerHTML = window.screen.availWidth + "x"+ window.screen.availHeight;
};

function tongleVisibility(name){
	var status = document.getElementById(name).style.display;
	document.getElementById(name).style.display = status !== "none" ? "none" : "inline-block";
	console.log(name + ": " + document.getElementById(name).style.display);
}