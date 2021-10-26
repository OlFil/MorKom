function enemyAttack(){
	const hit=ATTACK[randomiser(3)-1];
	const defence = ATTACK[randomiser(3)-1];
	return {
		value: randomiser(HIT[hit]),
		hit,
		defence,
	}
}
export default enemyAttack;