import {Sonya,Subzero} from './obj.js';
import randomiser from './utils.js';
import {createReloadButton} from './creations.js';
import {genarateLogs} from './Log.js';
import {$arenas} from './main.js';
import createElement from './createElement.js';

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const $formFight = document.querySelector('.control');


export function playerAttack(){
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

	return attack;
}


/*export function enemyAttack(){
	const hit=ATTACK[randomiser(3)-1];
	const defence = ATTACK[randomiser(3)-1];
	return {
		value: randomiser(HIT[hit]),
		hit,
		defence,
	}
}*/

export const enemyAttack = (hit= ATTACK[randomiser(3)-1], defence= ATTACK[randomiser(3)-1]) =>{
	return {
		value: randomiser(HIT[hit]),
		hit,
		defence,
	}
};

function playerWins(name){
const $loseTitle=createElement('div','loseTitle');
if (name){
	$loseTitle.innerText=name+' win!';
}
else {
	$loseTitle.innerText='draw!';
	genarateLogs('draw');
}
return $loseTitle;
}



const $button = document.querySelector('.button');
export function showResult(){
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

