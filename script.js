/*global $, jQuery, alert*/
/*jslint plusplus: true */
function win() {
    "use strict";
    if ($(window).width() >= 1320) {

        $(".grid").css("width", "1320px");
        $("#first").css("width", "1300px");
        $("p.secondP").css("font-size", "17px");

    }
    if ($(window).width() < 1320) {
        $(".grid").css("width", "1100px");
        $("#first").css("width", "1080px");
        $("p.secondP").css("font-size", "15px");

    }



}

$(document).ready(function () {
    "use strict";
    win();


    $('.grid').masonry({
        columnWidth: 220,
        itemSelector: '.grid-item'
    });

    var pos = [630, 535, 420, 300, 190, 90],
        dots = [$("#dot1"), $("#dot2"), $("#dot3")],
        text = [$("#dot1"), $("#dot2"), $("#dot3")],
        i = 0;

    $("p.secondP").each(function () {
        text[i] = $(this);

        i++;

    });
    dots[0].click(function () {
        dots[0].attr("src", "dotFull.png");
        dots[1].attr("src", "dotHollow.png");
        dots[2].attr("src", "dotHollow.png");
        text[0].attr("style", "display:block");
        text[1].attr("style", "display:none");
        text[2].attr("style", "display:none");
        win();



    });
    dots[1].click(function () {
        dots[1].attr("src", "dotFull.png");
        dots[0].attr("src", "dotHollow.png");
        dots[2].attr("src", "dotHollow.png");
        text[1].attr("style", "display:block");
        text[0].attr("style", "display:none");
        text[2].attr("style", "display:none");
        win();



    });
    dots[2].click(function () {
        dots[2].attr("src", "dotFull.png");
        dots[1].attr("src", "dotHollow.png");
        dots[0].attr("src", "dotHollow.png");
        text[2].attr("style", "display:block");
        text[1].attr("style", "display:none");
        text[0].attr("style", "display:none");
        win();



    });

    $("li").click(function () {
        $("#arrow").css("right", pos[$(this).index()]);
    });
});
$(window).resize(function () {
    "use strict";
    win();
});
