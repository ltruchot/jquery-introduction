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

$("h1").hide();
$("h1").fadeIn(3000);
$("h1").animate({"margin-top": "100px"}, 1000);
$("h1").fadeOut("fast", function() { 
    $(this).show() 
});