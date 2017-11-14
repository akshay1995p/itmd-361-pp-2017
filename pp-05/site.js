var doorbellpath = "media/doorbell.mp3";
var currentlyPlaying;

$(document).ready(function(){
$("#doorbell").remove();

function ringDoorbell() {
var doorbell = new Audio('media/doorbell.mp3');
doorbell.play();
}
$("#ringdoorbell").on("click", function(){
ringDoorbell();
});
$(document).on("keypress", function(event) {
if (event.key === "d") {
ringDoorbell();
}
});
});