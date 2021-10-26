
function playerLose(a,b){
if (a.hp ===0){
	return {
			l : a.name,
			w : b.name,
			};
}
else{
 	return {
 			l : b.name,
			w : a.name,
			};
	}
}

export default playerLose;