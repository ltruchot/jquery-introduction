import './styles.scss'; // entry point for styles
import $ from 'jquery';

const carouselSize = $('.carousel').width();
const imgNb = $('.img-container > img').length;
const imgContainer = $('.img-container');


imgContainer.animate({
  'margin-left': `${-(carouselSize * (imgNb - 1))}px`,
}, imgNb * 3000);

$('img').on('click', function () {
  imgContainer.stop();
  $('.overlay').fadeIn();
  $('.popup')
    .empty()
    .append($(this).clone())
    .fadeIn();
});
$('.popup').on('click', function () {
  $('.popup, .overlay').fadeOut();
});

$('button:nth-of-type(1)').on('click', function () {
  imgContainer.stop();
  const curMarginLeft = parseInt(imgContainer.css('margin-left'), 10);
  imgContainer.animate({
    'margin-left': `${curMarginLeft + carouselSize}px`,
  }, 500);
});

$('button:nth-of-type(2)').on('click', function () {
  imgContainer.stop();
  const curMarginLeft = parseInt(imgContainer.css('margin-left'), 10);
  imgContainer.animate({
    'margin-left': `${curMarginLeft - carouselSize}px`,
  }, 500);
});


/*
const carouselSize = $('.carousel').width();
const imgContainer = $('.img-container');
setInterval(function () {
  const currentMarginLeft = parseInt(imgContainer.css('margin-left'), 10);
  imgContainer.animate({
    'margin-left': `${currentMarginLeft - carouselSize}px`,
  }, 'slow');
}, 2000);
*/
