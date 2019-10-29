var leg, head;

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
  createCanvas(1000, 800);
 imageMode(CENTER);

}

function mousePressed() {
background(200, 40, 200)

  head(500, 270)  
  leg(500, 520)
}

function leg(x, y) {
  let L = [leg1, leg2, leg3]
  let legChoice = random(L)
  image(legChoice, x, y, 300, 350)
}


function head(x, y) {
  let H = [head1, head2, head3,]
  let headChoice = random(H)
  image(headChoice, x, y, 280, 350)
}
