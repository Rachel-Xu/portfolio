var x1 = 466;
var y1 = 252;

var angle = 0.0;
var scalar = 10;
var speed = 0.04;
var offset = 248;

var action = 0;

function setup() {
  createCanvas(800, 530);
  ellipseMode(CORNER)
}




//Draw the three little guys

function pp1(x1, y1) {
  push();
  stroke(0);

  fill('#f4cb3b');
  noStroke();
  ellipse(x1, y1, 30, 30); //face

  fill(0);
  noStroke();
  ellipse(x1 + 10, y1 + 9, 3, 3); // left eye

  fill(0);
  noStroke();
  ellipse(x1 + 19, y1 + 9, 3, 3); // right eye

  pop();
}



//different motions

function ANGRY() {

  angle += speed * 7;
var r = random(-1,1);
  
  pp1(x1 + sin(angle + 2.2) * scalar * r , sin(angle + 2.2) * scalar * 5 + offset+ r);
  pp1(x1 + 40+ sin(angle + 2.2) * scalar * r, sin(angle + 0.8) * scalar * 5 + offset+ r);
  pp1(x1 + 80 +sin(angle + 2.2) * scalar * r, sin(angle + 1.6) * scalar * 5 + offset - r);
}


function DELIGHTED() {

  var y1 = sin(angle) * scalar;

  angle += speed * 2;

  pp1(x1, sin(angle + 0.1) * scalar * 2.3 + offset);
  pp1(x1 + 40, sin(angle + 0.4) * scalar * 1.9 + offset);
  pp1(x1 + 80, sin(angle + 0.8) * scalar * 2.6 + offset);
}

function CALM() {

  var y1 = sin(angle) * scalar + offset;

  angle += speed * 0.3;

  pp1(x1 - 10, sin(angle + 0.1) * scalar * 6 + offset);
  pp1(x1 + 40, sin(angle + 0.5) * scalar * 5 + offset);
  pp1(x1 + 10 + 80, sin(angle + 0.9) * scalar * 4 + offset);

}

function DEPRESSED() {

  var y1 = sin(angle) * scalar + offset;

  angle += speed / 3;

  pp1(x1 - 28 + cos(angle + 2.2) * scalar, y1);
  pp1(x1 + 40, sin(angle + 0.03) * scalar + offset);
  pp1(x1 + 30 - sin(angle + 2.2) * scalar + 80, sin(angle + 0.1) * scalar + offset);

}



function draw() {
  background(255);

  //background 

  noStroke();
  fill('#fbd395');
  rect(30, 30, 250, 500)

  stroke(230)
  strokeWeight(2)

  //long line
  line(315, 267, 680, 267)
  line(519, 113, 519, 434)

  //arrow
  line(515, 118, 519, 114)
  line(519, 114, 523, 118)

  line(675, 264, 680, 267)
  line(680, 267, 675, 271)

  //background text
  fill(180)
  noStroke();
  textFont('Verdana');
  textSize(16)
  textStyle(ITALIC);
  text('Arousal', 490, 87);
  text('Valence', 693, 270);

  fill(255)
  noStroke();
  textSize(30)
  textStyle(NORMAL);
  text('MOTION', 65, 90);
  text('&', 65, 130);
  text('EMOTION', 65, 170);

  fill('#f5b8c7')
  textSize(18)
  text('Angry', 358, 145);

  fill('#fbd395')
  textSize(18)
  text('Delighted', 595, 145);

  fill('#8c759f')
  textSize(18)
  text('Depressed', 349, 382);

  fill('#d2acd1')
  textSize(18)
  text('Calm', 614, 382);

  //call action

  if (action == 1) {
    ANGRY(300, 150);
  } else if (action == 2) {
    DELIGHTED(300, 150);
  } else if (action == 3) {
    DEPRESSED(300, 150);
  } else if (action == 4) {
    CALM(300, 150);
  }

}

  //define action

  function mousePressed() {

  if (345 < mouseX && mouseX < 425 && 115 < mouseY && mouseY < 170) {
    action = 1;

  } else if (580 < mouseX && mouseX < 690 && 116 < mouseY && mouseY < 160) {
    action = 2;


  } else if (330 < mouseX && mouseX < 455 && 350 < mouseY && mouseY < 400) {
    action = 3;


  } else if (600 < mouseX && mouseX < 680 && 360 < mouseY && mouseY < 390) {
    action = 4;
  }

  print(mouseX, mouseY)

}