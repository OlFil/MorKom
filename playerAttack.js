
function playerAttack(){
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

export default playerAttack;