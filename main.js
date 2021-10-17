
const Sonya={
	player:1,
	name : 'Sonya',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['knife','gun'],
	attack: function (){
		console.log(name+' Fight!');
	}
};

const Subzero={
	player:2,
	name : 'Subzero',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon:['knife','gun'],
	attack: function (){
		console.log(name+' Fight!');
	}
};

const $arenas= document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

function createElement(tag,className){
	const $tag=document.createElement(tag);
	if(className){
		$tag.classList.add(className);
	}
	return $tag;
}

function createPlayer(obj) {

const $player = createElement('div','player'+obj.player)
const $prog = createElement('div','progressbar')
const $char = createElement('div','character')
const $name = createElement('div','name')
$name.innerText = obj.name
const $life = createElement('div','life')
$life.style.width=obj.hp+'%';
const $img=createElement('img');
$img.src = obj.img;

$player.appendChild($prog);
$player.appendChild($char);
$prog.appendChild($life);
$prog.appendChild($name);
$char.appendChild($img);

return $player
}

function randomiser(){
return Math.ceil(Math.random()*10);
}

function changeHP(player){
	const $playerLife=document.querySelector('.player'+player.player+' .life');
	player.hp -= randomiser();
	if (player.hp>0){
		$playerLife.style.width=Subzero.hp+'%';
	}
	else {
		$playerLife.style.width='0%';
	}

	if(player.hp<0){
		$randomButton.disabled = true;
		winner(player);
	}
}

function winner(player){
if(player.name===Sonya.name)
	$arenas.appendChild(playerLose(Subzero.name));
else
	$arenas.appendChild(playerLose(Sonya.name));
}

function playerLose(name){
const $loseTitle=createElement('div','loseTitle');
$loseTitle.innerText=name+' win!';
return $loseTitle;
}

$randomButton.addEventListener('click', function() {
	changeHP(Sonya);
	changeHP(Subzero);
});	

$arenas.appendChild(createPlayer(Sonya));
$arenas.appendChild(createPlayer(Subzero));


