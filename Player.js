import createElement from './createElement.js';
export class Player{
	constructor(props){
		this.player= props.player;
	    this.name= props.name;
	    this.hp= props.hp;
	    this.img= props.img;
	};
	 elHP= ()=>{
	  	const $playerLife=document.querySelector(`.player${this.player} .life`);
		return $playerLife;
	};
	 changeHP= (n)=>{
	   	this.hp -= n;
		if(this.hp <= 0){
			this.hp=0;
		}
	};
	 renderHP= ()=>{this.elHP().style.width= this.hp+'%'};
	 attack = ()=>{console.log(this.name+' Fight!')};

	createPlayer= () =>{
		const $player = createElement('div',`player${this.player}`)
		const $prog = createElement('div','progressbar')
		const $char = createElement('div','character')
		const $name = createElement('div','name')
		$name.innerText = this.name
		const $life = createElement('div','life')
		$life.style.width=this.hp+'%';
		const $img=createElement('img');
		$img.src = this.img;

		$player.appendChild($prog);
		$player.appendChild($char);
		$prog.appendChild($life);
		$prog.appendChild($name);
		$char.appendChild($img);

		return $player
		}
}

export const Sonya=new Player({
	player:1,
	name : 'Sonya',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif'
});

export const Subzero=new Player({
	player:2,
	name : 'Subzero',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
});
