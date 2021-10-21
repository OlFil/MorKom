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

function renderHP(){
	this.elHP().style.width= this.hp+'%';
}

function createReloadButton(){
const $d = createElement('div','reloadWrap');
const $btn=createElement('button','button');
$btn.innerText = 'Restart';

$btn.addEventListener('click',function(){
	window.location.reload();
});

$d.appendChild($btn);
$arenas.appendChild($d);
}

function attack(){
	console.log(this.name+' Fight!');
}

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const Sonya={
	player:1,
	name : 'Sonya',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['knife','gun'],
	attack,
	changeHP,
	renderHP,
	elHP,
	shoot,
};

const Subzero={
	player:2,
	name : 'Subzero',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon:['knife','gun'],
	attack,
	changeHP,
	renderHP,
	elHP,
	shoot,
};

const $arenas= document.querySelector('.arenas');
const $button = document.querySelector('.button');
const $formFight = document.querySelector('.control');


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

/*$randomButton.addEventListener('click', function() {

	Sonya.changeHP(randomiser(20));
	Subzero.changeHP(randomiser(20));

	Sonya.renderHP();
	Subzero.renderHP();

	if (Sonya.hp ===0 || Subzero.hp===0 ){
		$randomButton.disabled=true;
		createReloadButton();
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
});	*/
function enemyAttack(){
	const hit=ATTACK[randomiser(3)-1];
	const defence = ATTACK[randomiser(3)-1];
	return {
		value: randomiser(HIT[hit]),
		hit,
		defence,
	}
}

$formFight.addEventListener('submit',function(e){
	e.preventDefault();
	console.dir($formFight);
	const enemy = enemyAttack();
	const attack = {};
	for (let item of $formFight){
		if (item.checked && item.name==='hit'){
			attack.value = randomiser(HIT[item.value]);
			attack.hit = item.value;
		}

		if (item.checked && item.name==='defence'){
			attack.defence=item.value;
		}
		item.checked=false;
	}

	/*if (attack.defence!=enemy.hit){
		Sonya.changeHP(enemy.value);
		Sonya.renderHP();
	}

	if (enemy.defence!=attack.hit){
		Subzero.changeHP(attack.value);
		Subzero.renderHP();
	}*/
	Sonya.shoot(attack,enemy);
	Subzero.shoot(enemy,attack);

	if (Sonya.hp ===0 || Subzero.hp===0 ){
		$button.disabled=true;
		createReloadButton();
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
	console.log('####: a', attack);
	console.log('####: e', enemy);
});

function shoot(a,b) {
	if (a.defence!=b.hit){
		this.changeHP(b.value);
		this.renderHP();
	}
}

$arenas.appendChild(createPlayer(Sonya));
$arenas.appendChild(createPlayer(Subzero));


