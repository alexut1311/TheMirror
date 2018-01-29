/*global $, jQuery, alert*/
/*jslint plusplus: true */
//Am folosit jquery datorita usurintei de folosire
function win() {
    "use strict";
    // gridul si bara de stiri isi schimba dimensiunea daca fereastra este mai mica de 1320px.textul in bara
    //de stiri se modifica la redimensionare
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


    $('.grid').masonry({ //initializarea gridului
        columnWidth: 220,
        itemSelector: '.grid-item'
    });

    var pos = [630, 535, 420, 300, 190, 90], //pozitia sagetii
        dots = [$("#dot1"), $("#dot2"), $("#dot3")], // puncte pentru indicarea indexului
        text = [$("#dot1"), $("#dot2"), $("#dot3")], //lista cu stirile
        i = 0;

    $("p.secondP").each(function () { // creearea listei cu stiri
        text[i] = $(this);

        i++;

    });
    //cand se da click pe un punct, stirea se schimba in functie de index si punctul devine alb, restul avand doar o margine alba
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
        $("#arrow").css("right", pos[$(this).index()]); // schimbarea pozitiei sagetii in functie de meniul apasat
    });
});
$(window).resize(function () { // functie apelata in momentul cand fereastra se redimensioneaza
    "use strict";
    win();
});
