
let my_colors = ['blue', '#404F24', ' #BDD09F', 'yellow']
function setup() {
  createCanvas(1495, 100)
  frameRate(2)
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