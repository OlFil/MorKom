function changeHP(n){
	this.hp -= n;
	if(this.hp <= 0){
		this.hp=0;
	}
}

function elHP(){
	const $playerLife=document.querySelector('.player'+ this.player+' .life');
	return $playerLife;
}

function renderHP($pL){
	$pL.style.width= this.hp+'%';
}


function createReloadButton(){
const $d = createElement('div','reloadWrap');
const $btn=createElement('button','button');
$btn.innerText = 'Restart';
$d.appendChild($btn);
return $d;
}



const Sonya={
	player:1,
	name : 'Sonya',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['knife','gun'],
	attack: function (){
		console.log(name+' Fight!');
	},
	changeHP: changeHP,
	renderHP: renderHP,
	elHP :elHP,
};

const Subzero={
	player:2,
	name : 'Subzero',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon:['knife','gun'],
	attack: function (){
		console.log(name+' Fight!');
	},
	changeHP: changeHP,
	renderHP: renderHP,
	elHP :elHP,
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

function randomiser(a){
return Math.ceil(Math.random()*a);
}

function playerWins(name){
const $loseTitle=createElement('div','loseTitle');
if (name){
	$loseTitle.innerText=name+' win!';
}
else {
$loseTitle.innerText='draw!';
}

return $loseTitle;
}

$randomButton.addEventListener('click', function() {

	Sonya.changeHP(randomiser(20));
	Subzero.changeHP(randomiser(20));

	Sonya.renderHP(Sonya.elHP());
	Subzero.renderHP(Subzero.elHP());

	if (Sonya.hp ===0 || Subzero.hp===0 ){
		$randomButton.disabled=true;
		$reloadBtn=createReloadButton();
		$arenas.appendChild($reloadBtn);
		$reloadBtn.addEventListener('click', function(){
		window.location.reload();
		});
	}

	if(Sonya.hp===0 && Sonya.hp< Subzero.hp){
		$arenas.appendChild(playerWins(Subzero.name));
	}
	else if (Subzero.hp===0 && Subzero.hp< Sonya.hp){
		$arenas.appendChild(playerWins(Sonya.name));
	}
	else if (Sonya.hp===0 && Subzero.hp===0){
		$arenas.appendChild(playerWins());
	}
});	

$arenas.appendChild(createPlayer(Sonya));
$arenas.appendChild(createPlayer(Subzero));


