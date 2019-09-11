
const randomIntFromInterval = (min, max) => { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const creerLapin = () => {
  const lapin = $('<div class="lapin"></div>');
  lapin.css({
    left: randomIntFromInterval(0, 800) + "px",
    top: randomIntFromInterval(0, 600) + "px",
  })
  $(".prairie").append(lapin);
}
setInterval(() => {
  creerLapin();
  creerLapin();
  debugger;
}, 3000)


/*

function createSelect(options) {
  const selectEl = `
    <select>
        ${options.map((el, i) => `<option value="${i + 1}">` + el + '</option>').join('')}
    </select>`;

  let selectEl = '<select id="ddl">';
  for (let i = 0; i < options.length; i++) {
    selectEl += `<option value="${i + 1}">${options[i]}</option>`;
  }
  selectEl += '</select>';

  return selectEl;
}

const liste = ['cd', 'dvd', 'bluray', 'vinyl'];
const liste2 = ['toto', 'titi'];

document.body.innerHTML = createSelect(liste);

const select = document.getElementById('ddl');
select.addEventListener('change', function (e) {
  console.log(e.target.value);
});


$('#ddl').on('change', function () {
  const val = $(this).attr('value');
});

/*
const game = 'Mario"MO"';
const players = 'Peach'
+ ", 'Toad', Mario";
const templateString = `
<div>
  <p>"Hello ${players}. Welcome on ${game}."</p>
</div>
`;
document.body.innerHTML = templateString;
console.log(templateString);

*/
/*


let i = 1;
i += 3;
i *= 8;
const list = [];
list.push(i);
const j = 40;
list.push(j);
const sum = list[0] + list[1];
console.log(sum);


*/
