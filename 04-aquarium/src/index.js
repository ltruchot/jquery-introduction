// body
var body = $('body');
body.css('background-color', 'darkcyan');

// poisson 1
var poisson1 = $('<img src="assets/images/poisson1.png" />');
poisson1.css({
  width: '200px',
  position: 'absolute',
  top: '500px',
  left: '300px',
});
var poisson2 = poisson1.clone();
poisson2.css({
  width: '300px',
  top: '10px',
  left: '500px',
  transform: 'scaleX(-1)',
});
var poisson3 = poisson2.clone();
poisson3.attr('src', 'assets/images/poisson2.png');
poisson3.css('top', '150px');


// algue 1
var algue1 = $('<img src="assets/images/algue1.png" />');
algue1.css({
  position: 'absolute',
  height: '250px',
  bottom: '-40px',
  left: '200px',
});

var algue2 = algue1.clone();
algue2.attr('src', 'assets/images/algue2.png');
algue2.css({ left: '600px' });

body.append(poisson1, poisson2, poisson3, algue1, algue2);


setInterval(function () {
  var position = parseInt(poisson3.css('left'), 10);
  position++;
  poisson3.css('left', position.toString() + 'px');
}, 10);
