/*global $, jQuery, alert*/
/*jslint plusplus: true */
function win() {
    "use strict";
    if ($(window).width() >= 1320) {

        $(".grid").css("width", "1320px");
        $("#first").css("width", "1300px");
        $("#secondP").css("font-size", "17px");

    }
    if ($(window).width() < 1320) {
        $(".grid").css("width", "1100px");
        $("#first").css("width", "1080px");
        $("#secondP").css("font-size", "15px");

    }



}

$(document).ready(function () {
    "use strict";
    win();
    $('.grid').masonry({
        columnWidth: 220,
        itemSelector: '.grid-item'
    });

    var pos = [630, 535, 420, 300, 190, 90];
    $("li").click(function () {
        $("#arrow").css("right", pos[$(this).index()]);
    });
});
$(window).resize(function () {
    "use strict";
    win();
});
