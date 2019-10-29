
function preload(){
    leg1 = loadImage("images/leg1.png");
    leg2 = loadImage("images/leg2.png");
    leg3 = loadImage("images/leg3.png");

    head1 = loadImage("images/head1.png");
    head2 = loadImage("images/head2.png");
    head3 = loadImage("images/head3.png");
    head4 = loadImage("images/head4.png");
}

function setup() {
  createCanvas(900, 1000)
 imageMode(CENTER);

}

function mousePressed() {
background(51, 40, 35)

  leg(350, 550)
  head(350, 100)  
}

function leg(x, y) {
  let x = [leg1, leg2, leg3]
  let legChoice = random(g)
  image(legChoice, x, y, 420, 470)
}


function body(x, y) {
  let p = [head1, head2, head3]
  let headChoice = random(y)
  image(headChoice, x, y, 250, 320)
}
