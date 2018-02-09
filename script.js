/*global $, jQuery, alert*/
/*jslint plusplus: true */
//Am folosit jquery datorita usurintei de folosire
//6d43277f9c88de3d
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
function dayNight(hour,timezone)
{      "use strict";
      if (timezone==="AM")
          {
              if (parseInt(hour)>=6 && parseInt(hour)<12)
                  return "day";
              else
                  return "night";

        }
       if (timezone==="PM")
          {
              if (parseInt(hour)>=8)
                  return "night";
              else
                  return "day";

        }

    
}
function weather(city){
    $.ajax({
        url: "https://autocomplete.wunderground.com/aq?query="+city+"&cb=call=?",
        dataType: 'jsonp',
        success: function (parsed_json1) {
            cityId=parsed_json1.RESULTS[0].zmw;
            cityName=parsed_json1.RESULTS[0].name.substring(0,parsed_json1.RESULTS[0].name.indexOf(','))+", "+parsed_json1.RESULTS[0].c;
            $("#cityId").text(cityId);
            $("#cityName").text(cityName);
               $.ajax({
        url: "https://api.wunderground.com/api/6d43277f9c88de3d/conditions/q/zmw:"+$("#cityId").text()+".json",
        dataType: "jsonp",
        success: function (parsed_json2) {
            hour=parsed_json2.current_observation.observation_time.substring(parsed_json2.current_observation.observation_time.indexOf(",")+1,parsed_json2.current_observation.observation_time.indexOf(":"));
            if(parsed_json2.current_observation.observation_time.search("PM")!==-1){
                timezone=parsed_json2.current_observation.observation_time.substring(parsed_json2.current_observation.observation_time.search("PM"),parsed_json2.current_observation.observation_time.search("PM")+2);
            }
            if(parsed_json2.current_observation.observation_time.search("AM")!==-1){
                timezone=parsed_json2.current_observation.observation_time.substring(parsed_json2.current_observation.observation_time.search("AM"),parsed_json2.current_observation.observation_time.search("AM")+2);
            }
            
            $("#city").text(cityName);
            $("#grad").text(Math.round(parseFloat(parsed_json2.current_observation.temp_c))+"°");
            $("#time").text(parsed_json2.current_observation.observation_time.substring(parsed_json2.current_observation.observation_time.indexOf("on")+2,parsed_json2.current_observation.observation_time.lenght));
            if (dayNight(hour,timezone)==="day")
           { $("#wicon").attr("src","png/"+parsed_json2.current_observation.icon+".png");}
            if (dayNight(hour,timezone)==="night")
           { $("#wicon").attr("src","png/"+parsed_json2.current_observation.icon+"n.png");}
            $("#wiconName").text(parsed_json2.current_observation.weather);
            if (parsed_json2.current_observation.icon==="")
                {
                     $("#wicon").attr("src","");}

                

        }
    });

            
        }
    });
    
}

function getData(){
var i;
 var out;
var arr=[];
$('#weathersearch').keyup(function(){
arr=[];

var value=$(this).val();           

$.ajax({
url:"http://autocomplete.wunderground.com/aq?&cb=call=?",
dataType: "jsonp",
data:{
"query":value
},
crossDomain: true,
success: function (parsed_json) {
var c =$.each(parsed_json.RESULTS,function(i,item){
out=(parsed_json.RESULTS[i].name);
    if(parsed_json.RESULTS[i].type=="city"&& arr.length<=9)
    {arr.push(out);}

 });
 $( "#weathersearch" ).autocomplete({
 source:arr,


});

},
 error: function (xhr, ajaxOptions, thrownError) {
alert(xhr.status);
alert(thrownError);
    }

  }); 
      });

}

$(document).ready(function () {
    "use strict";
    win();
    $('.grid').masonry({ //initializarea gridului
        columnWidth: 220,
        itemSelector: '.grid-item'
    });

    var pos = [690, 598, 498, 390, 280, 178, 88], //pozitia sagetii
        dots = [$("#dot1"), $("#dot2"), $("#dot3")], // puncte pentru indicarea indexului
        text = [$("#dot1"), $("#dot2"), $("#dot3")], //lista cu stirile
        i = 0,
        items = [],
        cityId,
        cityName,
        hour,
        timezone,
        input = document.getElementById("weathersearch");

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
    
    //input.addEventListener("keyup", function(event) {
   // event.preventDefault();
   // if (event.keyCode === 13) {
    //    document.getElementById("myBtn").click();
   // }
//});


getData();
$("#searchw").click(function(){
 weather(input.value);
});

    
});


$(window).resize(function () { // functie apelata in momentul cand fereastra se redimensioneaza
    "use strict";
    win();
});
