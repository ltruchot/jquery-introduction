/* let cpLapins = ["Fertile"];
setInterval(()=> {
    let nouveauxLapins = [];
    for (var i = 0; i < cpLapins.length; i++) {
        if (cpLapins[i] === "Fertile") {
            nouveauxLapins.push("Infertile")
        } else {
            cpLapins[i] = "Fertile";
        }
    }
    cpLapins = cpLapins.concat(nouveauxLapins)
    console.log(cpLapins.length);
}, 3000) */

var divEl = $('<div id="toto"></div>');
$("body").append(divEl);
// ou directement
$("#toto").append('<div id="titi"></div>');
$("#toto").prepend('<div id="tutu">bonjour</div>');
// after, before
$('<div id="tete"></div>').appendTo("#tutu");

console.log($("#tutu").text(), $("#tutu").html());
$("#tutu").html("<span>aurevoir</span>");
console.log($("#tutu").text(), $("#tutu").html());
$("#tutu > span").text("adieu");
console.log($("#tutu").text(), $("#tutu").html());
// $("#toto").remove();
//$("#tutu").empty();
$("h1").append("*");

$('#tutu').find("span");
console.log($("span").parent());
$("span").closest("div");
console.log($("#tutu").siblings())
$('#toto > div').each(function () {
    $(this).text("coucou");
});
console.log($("h1").css("font-size"));
$("h1").css("font-size", "12px");
$("h1").css({"font-color": "blue", "text-transform": "uppercase"});

console.log($("h1").first().attr("id"));
$("h1").attr("id", "toto");
$( "img" ).attr({
    src: "/resources/hat.gif",
    alt: "jQuery Logo"
  });
$("h1").addClass("hidden");

$("h1").hide();
$("h1").fadeIn(3000);
$("h1").animate({"margin-top": "100px"}, 1000);
$("h1").fadeOut("fast", function() { 
    $(this).show() 
});