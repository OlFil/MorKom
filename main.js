//import Game from './game.js';

//export const game = new Game();

//game.start();
import {Player} from './Player.js';
import {randomiser,$arenas,$formFight} from './utils.js';
import {enemyAttack,playerAttack,showResult} from './Attack.js';

import {genarateLogs} from './Log.js';

let player1;
let player2;

class Game{
	getPlayers = async()=>{
		const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res=>res.json());
		return body;

	}
	getP = async()=>{
		const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(res=>res.json());
		return body;
	}

	getAttack = async({h,d}=playerAttack()) =>{
		const res = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
					    method: 'POST',
					    body: JSON.stringify({
					        hit: h,
					        defence:d,
					    })
					}).then(res=>res.json());
		return res;
	}
	fight = async()=>{
		let res = await this.getAttack();
		console.log(res);
		return res;
	}

	start = async () => {
		const players = await this.getPlayers();
		console.log(players);
		const p1=players[randomiser(players.length)-1];
		const p2=await this.getP();
		console.log(p1,p2);
		player1=new Player({
			...p1,
			player:1,
			rootSelector: 'arenas',
		});
		player2=new Player({
			...p2,
			player:2,
			rootSelector: 'arenas',
		});
		
		$arenas.appendChild(player1.createPlayer());
		$arenas.appendChild(player2.createPlayer());
		genarateLogs('start',player1,player2);
		
		
		$formFight.addEventListener('submit',function(e){
		e.preventDefault();
		const {hit, defence,value} = enemyAttack();
		const {hit:phit, value: pvalue, defence: pdefence} = playerAttack();

		if (pdefence!=hit){
			player1.changeHP(value);
			player1.renderHP();
			genarateLogs('hit',player2,player1,value);
		}
		else {
			genarateLogs('defence',player2,player1);
		}

		if (defence!=phit){
			player2.changeHP(pvalue);
			player2.renderHP();
			genarateLogs('hit',player1,player2,pvalue);
		}
		else {
			genarateLogs('defence',player1,player2);
		}

		showResult();
		
	});
}
}
const game= new Game();
game.start();
