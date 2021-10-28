class Player{
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
}

/*const S=new Player({
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
});
console.log(S);*/

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

