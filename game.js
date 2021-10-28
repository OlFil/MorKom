import {randomiser,$arenas,$formFight} from './utils.js';
import createElement from './createElement.js';
import {enemyAttack,playerAttack,showResult} from './Attack.js';
import {genarateLogs} from './Log.js';
import {createPlayer} from './creations.js';
import {Sonya,Subzero} from './Player.js';

class Game{
	constructor(){
	}
	start = ()=>{
		$formFight.addEventListener('submit',function(e){
		e.preventDefault();
		const {hit, value, defence} = enemyAttack();
		const {hit:phit, value: pvalue, defence: pdefence} = playerAttack();
		if (pdefence!=hit){
			Sonya.changeHP(value);
			Sonya.renderHP();
			genarateLogs('hit',Subzero,Sonya,value);
		}
		else {
			genarateLogs('defence',Subzero,Sonya);
		}

		if (defence!=phit){
			Subzero.changeHP(pvalue);
			Subzero.renderHP();
			genarateLogs('hit',Sonya,Subzero,pvalue);
		}
		else {
			genarateLogs('defence',Sonya,Subzero);
		}

		showResult();
		});
		$arenas.appendChild(createPlayer(Sonya));
		$arenas.appendChild(createPlayer(Subzero));
		genarateLogs('start',Sonya,Subzero);
	}

}

export default Game;