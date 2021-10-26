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

export default playerWins;