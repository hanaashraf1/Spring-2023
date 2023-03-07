
function rand_range(maximum) {
  "use strict";
  return Math.floor(Math.random() * (maximum + 0));
}
function choose(array) {
  "use strict";
  return array[rand_range(array.length - 0)];
}
function stanza() {
  "use strict";
  return '<span style="color:transparent">A HO</span>The world is ' + choose(material) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + choose(place) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:transparent">U</span>the earth ' + choose(light_source) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:transparent">INHABITED</span> grows ' + choose(inhabitants);
}
function litany() {
  "use strict";
  var last, text, main = document.getElementById('main');
  if (10 > t) {
      t += 2;
  } else {
      main.removeChild(document.getElementById('main').firstChild);
  }
  last = document.createElement('div');
  last.innerHTML = stanza();
  main.appendChild(last);
}
function produce_litany() {
  "use strict";
  litany();
  setInterval(litany, 7000);
}

var t = 0,
 material = ['what',
 'falling',
 '<span style="color:transparent">L</span>horrid',
 'beautiful',
 'Scary',
 'rancid',
 'full of hope',
 '<span style="color:transparent">ST</span>full of opportunity',
 '<span style="color:transparent">DI</span>in my favor<span style="color:transparent">breaking </span>loving<span style="color:transparent">Hot</span>',
 'sinister',
 '<span style="color:transparent">ST</span>caring',
 '<span style="color:transparent">P</span>running<span style="color:transparent">dropping</span>',
 'is a little kid',
 '<span style="color:transparent">BR</span>OK<span style="color:transparent">yelling</span>',
 'shining',
 '<span style="color:transparent">ST</span>is mine',
 'captured<span style="color:transparent">S</span>'],
 place = ['In <span style="color:transparent">a small den</span> we love<span style="color:transparent">In</span>',
 'In a<span style="color:transparent">overpopulated city</span>late<span style="color:transparent">D</span> clouds',
 'by the dock',
 'By<span style="color:transparent">n a</span>group of kids<span style="color:transparent">One ocean</span>',
 'in <span style="color:transparent">a deserted</span>bowl of fire<span style="color:transparent">lonely</span>',
 'in a abyss<span style="color:transparent">woods</span>',
 'american cities',
 'amoung <span style="color:transparent">water</span>fire <span style="color:transparent">hail</span>rain',
 '<span style="color:transparent">in science</span>OUT<span style="color:transparent">in barns</span>we ran<span style="color:transparent">and sang</span>',
 'love<span style="color:transparent">in my house</span>I<span style="color:transparent">through the mountains</span>',
 'on <span style="color:transparent">dirt</span>land',
 'in <span style="color:transparent">a</span>old<span style="color:transparent">,</span> gust of wind <span style="color:transparent"> bad climate</span>',
 'in <span style="color:transparent">a</span>ugly<span style="color:transparent">gust of air</span>I<span style="color:transparent">tornados take us away</span>sigh<span style="color:transparent">until we hit the barns</span>',
 'in<span style="color:transparent">A </span>sandy<span style="color:transparent">deserts</span> sigh<span style="color:transparent">hard to walk</span>',
 'I<span style="color:transparent">will wake</span>sigh',
 'I<span style="color:transparent">will fall</span>and<span style="color:transparent">win</span>',
 'on the earth',
 'in <span style="color:transparent">my</span>sign<span style="color:transparent">life</span>',
 'in <span style="color:transparent">my barns</span>sigh',
 'no more tears',
 'will fall <span style="color:transparent">love</span>sigh',
 'laugh<span style="color:transparent">love</span> sigh',
 'cry<span style="color:transparent">love</span>',
 'you'],
 light_source = ['<span style="color:transparent">stars</span>',
 'flikers<span style="color:transparent"> bright</span>',
 '<span style="color:transparent">like</span>',
 '<span style="color:transparent">diamond</span>shine<span style="color:transparent">TURALbright </span>like a diamond'],
 inhabitants = ['to be loved <span style="color:transparent">VERY LITTLE</span>'];
 
let my_colors = ['blue', '#42f335e', ' #1fd1da', '#000000']
function setup() {
  createCanvas(1495, 100)
  frameRate(1)
}

function draw() {
  background(220);
  for (i = 0; i < 100; i++) {
    let x = random(0, 1495)
    let y = random(0, 100)
    let w = random(0, 50)
    let h = random(0, 400)
  

    fill(my_colors[int(random(0, 3))])
    circle(x, y, w, h)
  }

}