import createElement from './createElement.js';
//import {$arenas} from './main.js';
import {$arenas} from './utils.js';
export function createPlayer({player,hp, name, img}) {

const $player = createElement('div',`player${player}`)
const $prog = createElement('div','progressbar')
const $char = createElement('div','character')
const $name = createElement('div','name')
$name.innerText = name
const $life = createElement('div','life')
$life.style.width=hp+'%';
const $img=createElement('img');
$img.src = img;

$player.appendChild($prog);
$player.appendChild($char);
$prog.appendChild($life);
$prog.appendChild($name);
$char.appendChild($img);

return $player
}

export function createReloadButton(){
const $d = createElement('div','reloadWrap');
const $btn=createElement('button','button');
$btn.innerText = 'Restart';

$btn.addEventListener('click',function(){
	window.location.reload();
});

$d.appendChild($btn);
$arenas.appendChild($d);
}
