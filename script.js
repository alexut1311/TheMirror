/*global $, jQuery, alert*/
/*jslint plusplus: true */
function win() {
    "use strict";
    if ($(window).width() >= 1320) {

        $(".grid").css("width", "1320px");
    }
    if ($(window).width() < 1320) {
        $(".grid").css("width", "1100px");
    }


}
//630,535,420,300,190,90

$(document).ready(function () {
    "use strict";
    var pos = [630, 535, 420, 300, 190, 90];
    $("li").click(function () {
        $("#arrow").css("right", pos[$(this).index()]);
    });
});
$(window).resize(function () {
    "use strict";
    win();
});
