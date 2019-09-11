var toto = $('.card');
for (var i = 0; i < 3; i++) {
  toto.clone().appendTo('body');
}
var colors = ['blue', 'red', 'green', 'yellow'];
var j = 0;
$('.card').each(function () {
  $(this).css('background-color', colors[j]);
  i++;
});

/*
$('.btn').on('click', function () {
  $(this).closest('.card').remove();
});
$('.btn').on('click', function () {
  $(this).parent().parent().remove();
});
$('.card').on('mouseover', function () {
  $(this).find('.btn').removeClass('btn-primary').addClass('btn-success');
});
*/


// creerChamp::string -> $
function creerChamp(label) {
  return $('<div class="form-group"><label>' + label + '</label><input class="form-control" /></div>');
  // ou utilisation du backtick pour string sur plusieurs lignes
  /*
  return $(`
  <div class="form-group">
    <label>${label}</label>
    <input class="form-control" />
  </div>
`); */
}
/*

// créer le formulaire
$('body').append('<form class="container"></form>');


// créer les inputs
var champs = ['nom', 'prenom', 'tel', 'email'];
for (var champ of champs) {
  $('form').append(creerChamp(champ));
}
$('form').append($('<button class="btn btn-primary">Envoyer</button>'));
$('label').after('*');
$('button').text('save');
$('.form-group:nth-of-type(3)').remove();

$('button').on('click', function () {
  $('body').empty();
});
$('input').eq(0).after('<div class="text-danger">Ce champs est requis</div>');
$('input').eq(0).on('input', function () {
  if ($(this).val() === '') {
    $('.text-danger').show();
  } else {
    $('.text-danger').hide();
  }
});
*/
