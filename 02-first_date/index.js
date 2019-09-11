var lovedTitle = $("<h3>loved</h3>");
lovedTitle.css("color", "pink");
var hatedTitle = $("<h3>hated</h3>");
hatedTitle.css("color", "darkblue");


$("#hate-box").prepend(hatedTitle);

var loveBox = $("#love-box");
loveBox.prepend(lovedTitle);

$(".image1").appendTo("#love-box");
loveBox.append($("#img2"));

$("#hate-box").append($(".last-image"));
$(".image6").remove();

$("#img3").css({ "border": "3px dashed yellow", "border-radius": "10px"});


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
