import {randomiser} from './utils.js';
import {Sonya,Subzero} from './Player.js';
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const $chat = document.querySelector('.chat');

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

export function genarateLogs(type, player1, player2,val){
    const time=new Date().toLocaleTimeString().slice(0,5);
    switch(type){
        case 'start':
            const text = logs[type].replace('[time]',time).replace('[player1]',player1.name).replace('[player2]',player2.name);
            const el=`<p>${text}</p>`;
            $chat.insertAdjacentHTML('afterbegin',el); 
            break;
        case 'end':
            const {w,l} = playerLose(Sonya,Subzero);
            const text1 = logs[type][randomiser(logs[type].length-1)].replace('[playerWins]',w).replace('[playerLose]',l);
            const el1=`<p>${text1}</p>`;
            $chat.insertAdjacentHTML('afterbegin',el1); 
            break;
        case 'hit':
            const text2 = logs[type][randomiser(logs[type].length-1)].replace('[playerKick]',player1.name).replace('[playerDefence]',player2.name);
            const el2=`<p>${time} — ${text2} ${-val} ${player2.hp}/100</p>`;
            $chat.insertAdjacentHTML('afterbegin',el2); 
            break;
        case 'defence':
            const text3 = logs[type][randomiser(logs[type].length-1)].replace('[playerKick]',player1.name).replace('[playerDefence]',player2.name);
            const el3=`<p>${time} — ${text3}</p>`;
            $chat.insertAdjacentHTML('afterbegin',el3); 
            break;
        case 'draw':
            const text4 = logs.draw;
            const el4=`<p>${time} — ${text4}</p>`;
            $chat.insertAdjacentHTML('afterbegin',el4); 
            break;
        default:
            console.log('Ошибка где-то...');
    }
}