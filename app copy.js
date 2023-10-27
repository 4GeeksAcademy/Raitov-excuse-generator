
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function excuseGenerator(who, action, what, when) {

xwho = Math.floor(Math.random() * who.length);
xaction = Math.floor(Math.random() * action.length);
xwhat = Math.floor(Math.random() * what.length);
xwhen = Math.floor(Math.random() * when.length);

return who[xwho] + ' ' + action[xaction] + ' ' + what[xwhat] + ' ' + when[xwhen];
 
}
function onLoad() {
    var excusa = document.getElementById("excusas").innerHTML = excuseGenerator(who, action, what, when);

}
window.onload = onLoad;
