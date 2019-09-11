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

$("#img3").css({ "border": "3px dashed yellow", "border-radius": "10px"})