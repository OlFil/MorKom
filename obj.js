export const Sonya={
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

export const Subzero={
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