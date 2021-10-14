
const Sonya={
	name : 'Sonya',
	hp: 150,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['knife','gun'],
	attack: function (){
		console.log(name+' Fight!');
	}
};

const Subzero={
	name : 'Subzero',
	hp: 150,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon:['knife','gun'],
	attack: function (){
		console.log(name+' Fight!');
	}
};

/*function createPlayer(cl,n,life) {
const $arenas= document.querySelector('.arenas');

const $player = document.createElement('div');
$player.classList.add(cl);

const $prog = document.createElement('div');
$prog.classList.add('progressbar')

const $char = document.createElement('div');
$char.classList.add('character')

$player.appendChild($prog);
$player.appendChild($char);


const $life = document.createElement('div');
$life.style.width=life;
$life.classList.add('life')


const $name = document.createElement('div');
$name.innerText = n
$name.classList.add('name')


$prog.appendChild($life);
$prog.appendChild($name);

const $img=document.createElement('img');
$img.src = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif';

$char.appendChild($img);

$arenas.appendChild($player);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);

*/



function createPlayer(cl,obj) {
const $arenas= document.querySelector('.arenas');

const $player = document.createElement('div');
$player.classList.add(cl);

const $prog = document.createElement('div');
$prog.classList.add('progressbar')

const $char = document.createElement('div');
$char.classList.add('character')

$player.appendChild($prog);
$player.appendChild($char);


const $life = document.createElement('div');
$life.style.width=obj.hp;
$life.classList.add('life')


const $name = document.createElement('div');
$name.innerText = obj.name
$name.classList.add('name')


$prog.appendChild($life);
$prog.appendChild($name);

const $img=document.createElement('img');
$img.src = obj.img;

$char.appendChild($img);

$arenas.appendChild($player);
}



createPlayer('player1', Sonya);
createPlayer('player2', Subzero);
