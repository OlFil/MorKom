function createReloadButton(){
const $d = createElement('div','reloadWrap');
const $btn=createElement('button','button');
$btn.innerText = 'Restart';

$btn.addEventListener('click',function(){
	window.location.reload();
});

$d.appendChild($btn);
$arenas.appendChild($d);
}

export default createReloadButton;