var leg1, leg2, leg3;
var head1, head2, head3, head4;

var show = 0;
var legChoice, headChoice;

function preload(){
    leg1 = loadImage("leg1.png");
    leg2 = loadImage("leg2.png");
    leg3 = loadImage("leg3.png");

    head1 = loadImage("head1.png");
    head2 = loadImage("head2.png");
    head3 = loadImage("head3.png");
    head4 = loadImage("head4.png");
}


function setup(){
createCanvas(800,600);
background(200,30,150);
}

function draw() {
    background(100);
  
    if (show == 1) {
      creature(100, 50, legChoice, headChoice);
    }
  
  }
  
  function mouseReleased() {
    legChoice = int(random(4));
    headChoice = int(random(4));
    show = 1;
  }
  
  function creature() {
    

  
    if (legChoice == 0) {
      image(leg1, (width / 2) - 60, (height / 2) + 20);
    }
  
    if (legChoice == 1) {
      image(leg2, (width / 2) - 60, (height / 2) + 20);
    }
  
    if (legChoice == 2) {
      image(leg3, (width / 2) - 60, (height / 2) + 20);
    }
  
    if (headChoice == 0) {
      image(head1, (width / 2) - 150, (height / 2) - 150);
    }
  
    if (headChoice == 1) {
      image(head2, (width / 2) - 150, (height / 2) - 150);
    }
  
    if (headChoice == 2) {
      image(head3, (width / 2) - 150, (height / 2) - 150);
    }
  
    if (headChoice == 3) {
      image(head4, (width / 2) - 150, (height / 2) - 150);
    }
  
  }