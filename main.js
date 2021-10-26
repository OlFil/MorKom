import {player} from './player.js';
import randomiser from './utils.js';
import createReloadButton from './createReloadButton.js';
import createElement from './createElement.js';
import playerWins from './playersWins.js';
import playerLose from './playerLose.js';
import enemyAttack from './enemyAttack.js';
import playerAttack from './playerAttack.js';

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};


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
};

const $arenas= document.querySelector('.arenas');
const $button = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');


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

function showResult(){
	if (Sonya.hp ===0 || Subzero.hp===0 ){
		$button.disabled=true;
		genarateLogs('end')
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
}

$formFight.addEventListener('submit',function(e){
	e.preventDefault();
	const enemy = enemyAttack();
	const player = playerAttack();
	if (player.defence!=enemy.hit){
		Sonya.changeHP(enemy.value);
		Sonya.renderHP();
		genarateLogs('hit',Subzero,Sonya,enemy.value);
	}
	else {
		genarateLogs('defence',Subzero,Sonya);
	}

	if (enemy.defence!=player.hit){
		Subzero.changeHP(player.value);
		Subzero.renderHP();
		genarateLogs('hit',Sonya,Subzero,player.value);
	}
	else {
		genarateLogs('defence',Sonya,Subzero);
	}

	showResult();
});


$arenas.appendChild(createPlayer(Sonya));
$arenas.appendChild(createPlayer(Subzero));
genarateLogs('start',Sonya,Subzero);

function genarateLogs(type, player1, player2,val){
	const time=new Date().toLocaleTimeString().slice(0,5);
	console.log(time);
	switch(type){
		case 'start':
			const text = logs[type].replace('[time]',time).replace('[player1]',player1.name).replace('[player2]',player2.name);
			console.log(text);
			const el=`<p>${text}</p>`;
			$chat.insertAdjacentHTML('afterbegin',el); 
			break;
		case 'end':
			const res = playerLose(Sonya,Subzero);
			const text1 = logs[type][randomiser(logs[type].length-1)].replace('[playerWins]',res.w).replace('[playerLose]',res.l);
			console.log(text1);
			const el1=`<p>${text1}</p>`;
			$chat.insertAdjacentHTML('afterbegin',el1); 
			break;
		case 'hit':
			const text2 = logs[type][randomiser(logs[type].length-1)].replace('[playerKick]',player1.name).replace('[playerDefence]',player2.name);
			console.log(text2);
			const el2=`<p>${time} — ${text2} ${-val} ${player2.hp}/100</p>`;
			$chat.insertAdjacentHTML('afterbegin',el2); 
			break;
		case 'defence':
			const text3 = logs[type][randomiser(logs[type].length-1)].replace('[playerKick]',player1.name).replace('[playerDefence]',player2.name);
			console.log(text3);
			const el3=`<p>${time} — ${text3}</p>`;
			$chat.insertAdjacentHTML('afterbegin',el3); 
			break;
		case 'draw':
			const text4 = logs.draw;
			console.log(text4);
			const el4=`<p>${time} — ${text4}</p>`;
			$chat.insertAdjacentHTML('afterbegin',el4); 
			break;
		default:
			console.log('Ошибка где-то...');
	}
}