var Myellow = '#FBCD24';
var bluePants = '#295C8D';
const eyeSize = 65;
const eyeBallSize = 30;
var EyeBallColor = '';
var testDistance = 15;
var action = 1;

function setup() {
  createCanvas(500, 550);
  
  //create two eye balls by using OBJECT
  leftEye = new eyes(220, '#7F4D27');
  rightEye = new eyes(296, '#5D2F10');

  //make icecream and arms for both side by using OBJECT
  iceCreamLeft = new iceCream(0);
  iceCreamRight = new iceCream(200);
// OBJECT need to be in the setup area
  
}
//draw the minon



function draw() {
  background('#FFE3A5');
    //shadow in the background
  
  
  fill('#BEA77C');
  noStroke();
  beginShape();
  vertex(336, 127);
  vertex(514, 306);
  vertex(514, 551);
  vertex(233, 551);
  vertex(175, 490);
  vertex(208, 470);
  endShape(CLOSE);
  
  
  // text
  noStroke();
  textSize(24)
  textStyle('bold');
  fill('#BEA77C');
  text('Hey there, want some icecream?', 62, 62);
  fill('#FFE3A5');
  text('Hey there, want some icecream?', 60, 60);
  


  drawMinion();
  
  //text on minion shirt
     noStroke();
  textSize(10)
  textStyle('bold');
  fill('#A995BC');
  text('RX',283,360);

  noStroke();

  //make leftEye and rightEye as object
  leftEye.drawEyes();
  rightEye.drawEyes();


  //if mouse is clicked, left eye size start to reduce by 2
  if (leftEye.click == 1 && leftEye.sizeY > 0)
  //if the eyeball size reduced to 0, let the size stop changing and stay at stage 2       
  {
    leftEye.sizeY -= 2;
    if (leftEye.sizeY <= 0) leftEye.click = 2;
  }

  //if the eyeball is at stage 2, let the eye ball size increase at the speed of 2
  if (leftEye.click == 2 && leftEye.sizeY <= eyeBallSize) {
    leftEye.sizeY += 2;
  }

  //if the eyeball is at stage 2 and the eyeball size increased to the original size
  //let the eye ball stage go back to 0 
  if (leftEye.click == 2 && leftEye.sizeY >= eyeBallSize) {
    leftEye.sizeY = eyeBallSize;
    leftEye.click = 0;
  }

  if (rightEye.click == 1 && rightEye.sizeY > 0) {
    rightEye.sizeY -= 2;
    if (rightEye.sizeY <= 0) rightEye.click = 2;
  }

  if (rightEye.click == 2 && rightEye.sizeY <= eyeBallSize) {
    rightEye.sizeY += 2;
  }

  if (rightEye.click == 2 && rightEye.sizeY >= eyeBallSize) {
    rightEye.sizeY = eyeBallSize;
    rightEye.click = 0;
  }

  //atan2 means to identify two different angles even if they have the same value
  var a = atan2(mouseY - height / 2, mouseX - width / 2);

  //dist(x1,y1,x2,y2)

  //15 is the scale to adjust the rotation's; distance between the center of the canvas and the mouse
  var length = dist(mouseX, mouseY, width / 2, height / 2) / 25;


  leftEye.rotate(a, length);
  rightEye.rotate(a, length);

  mouth((mouseX - width / 2) / 15 + 8, (250 - mouseY) / 15 + 8);

  // (mouseX - width/2)/15

  
  if (action == 0) {
    leftArm(), iceCream(0);
  } else if (action == 1) {
    rightArm(100), iceCream(360);
  }
  

    mouseHand(mouseX,mouseY);
}

function mouth(mouthW, mouthH) {

  noStroke();
  fill('#F4B7C7');
  ellipse(260, 245, mouthW, mouthH)

}

function mouseHand(x, y) {
  
fill('#594C44');
ellipse(x+35, y+41, 36, 36);
    ellipse(x+9, y+33, 18, 18);
    ellipse(x+34, y+9, 18, 18);
    ellipse(x+58, y+24, 18, 18);
    
    strokeWeight(14);
    stroke('#594C44');
    line(x+10, y+34, x+25, y+39);
    line(x+34, y+34, x+34, y+9);
    line(x+58, y+24, x+44, y+38);


}

function drawMinion() {

  //body
  fill(Myellow);
  noStroke();
  rect(162, 190, 197, 184);
  ellipse(260, 190, 197, 198);

  //legs
  fill(Myellow);
  noStroke();
  beginShape();
  vertex(203, 403);
  vertex(225, 403);
  vertex(225, 472);
  vertex(207, 472);
  endShape(CLOSE);

  beginShape();36
  vertex(295, 403);
  vertex(317, 403);
  vertex(313, 472);
  vertex(295, 472);
  endShape(CLOSE);

  //pants
  fill(bluePants);
  beginShape();
  vertex(203, 333);
  vertex(318, 333);
  vertex(318, 371);
  vertex(359, 371);
  vertex(359, 403);
  vertex(162, 403);
  vertex(162, 371);
  vertex(203, 371);
  endShape(CLOSE);
  rect(203, 403, 114, 30);
  arc(317, 403, 83.5, 60, 0, HALF_PI);
  arc(204, 403, 83.5, 59, HALF_PI, 0);

  //pants' belts
  strokeWeight(10);
  strokeCap(ROUND);
  stroke('#154167');
  line(159, 312, 214, 343);
  line(306, 344, 361, 311);

  //feet
  
  stroke('#30302F');
  beginShape();
  vertex(225, 472);
  vertex(226, 480);
  vertex(191, 480);
  vertex(199, 475);
  vertex(207, 472);
  endShape(CLOSE);

  beginShape();
  vertex(294, 472);
  vertex(313, 472);
  vertex(321, 475);
  vertex(328, 480);
  vertex(293, 480);
  endShape(CLOSE);
  
  strokeWeight(10);
  line(179,486,229,486);
  line(291,486,338,486);

  //glasses
  stroke('#30302F');
  strokeWeight(26);
  strokeCap(PROJECT);
  line(185, 201, 170, 200);
  line(332, 201, 352, 200);

  noFill();
  stroke('#8FA3A9');
  strokeWeight(20);
  ellipse(220, 200, 65, 65);
  ellipse(296, 200, 65, 65);
}


function mouseClicked() {
  
  //  strokeWeight(1);
  //rect(25, 250, 80, 110);
  //rect(385, 250, 80, 110);

  if ((action == 0) && (25 < mouseX && mouseX < 105 && 250 < mouseY && mouseY < 360)) {
    action = 1;

  } else if ((action == 1) && (385 < mouseX && mouseX < 465 && 250 < mouseY && mouseY < 360)) {
    action = 0;
  }
}

function leftArm() {
  //left arm
  stroke(Myellow);
  strokeWeight(20);
  strokeCap(ROUND);
  curve(70, 330, 85, 343, 162, 331, 190, 310);
}

function rightArm(x) {
  //left arm
  stroke(Myellow);
  strokeWeight(20);
  strokeCap(ROUND);
  //curve(70, 330, 85, 343, 162, 331, 190, 310);
  curve(x + 530, 330, x + 335, 343, x + 258, 331, x + 230, 310);
}


//x is short for distance between left hand and right hand
function iceCream(x) {
  //hand and ice cream
  //hand

  noStroke();
  fill('#393A34');
  ellipse(x + 65, 344, 53, 40);

  //icecream cone
  fill('#FAD395');
  triangle(x + 43, 302, x + 88, 302, x + 66, 356);
  //icecream ball
  fill('#F4B7C7');
  ellipse(x + 65, 286, 60, 55);

  //little dots
  fill('#FAD395');
  ellipse(x + 60, 280, 5, 5);
  ellipse(x + 66, 275, 5, 5);
  ellipse(x + 53, 276, 5, 5);
  ellipse(x + 89, 288, 5, 5);
  ellipse(x + 39, 288, 5, 5);
  fill('#D2ACD1');
  ellipse(x + 95, 285, 5, 5);
  ellipse(x + 81, 279, 5, 5);
  ellipse(x + 75, 287, 5, 5);
  ellipse(x + 48, 287, 5, 5);
  ellipse(x + 35, 281, 5, 5);
  fill('#8C759F');
  ellipse(x + 66, 284, 5, 5);
  ellipse(x + 92, 275, 5, 5);
  ellipse(x + 43, 275, 5, 5);

  //finger
  fill('#393A34');
  ellipse(x + 52, 333, 18, 14);
  ellipse(x + 78, 333, 18, 14);

}


//create eye and let it rotate

function eyes(x, eyeBallColor) {
  //start the canvas at stage 0
  this.click = 0;
  //the x coordinate of the eye (whiteball) can be adjusted by parameter x
  this.x = x;
  //the y coordinate of the eye (whiteball) stay at 200 (since the two eyes always share the same height)
  this.y = 200;
  //the eyeball(the dark ball)'s x coordinate can be adjusted by the parameter x  
  this.xb = x;
  //the y coordinate of the eye (the dark ball) stay at 200 (since the two eyes always share the same height)
  this.yb = 200;
  //let the universal variable eyeBallSize defined the eye ball size 
  this.eyeBallSize = eyeBallSize;

  //draw the eye and the eyeball
  this.drawEyes = function(testDistance) {
    fill(255);

    //draw the eyes
    ellipse(this.x, this.y, eyeSize, eyeSize);
    fill(eyeBallColor);
    //draw the eye balls
    ellipse(this.xb, this.yb, eyeBallSize, eyeBallSize);
  }

  //rotate the eye balls
  this.rotate = function(angle, length) {
    //var length = dist(mouseX, mouseY, width / 2, height / 2) / 15;

    //when the mouse is on the eyes, move the eye ball's x coordinate this way
    if (length < testDistance) this.xb = this.x + cos(angle) * length;
    //when the mouse is away from the eyes, move the eye ball's x coordinate this way
    else this.xb = this.x + cos(angle) * testDistance;
    //when the mouse is on the eyes, move the eye ball's y coordinate this way
    if (length < testDistance) this.yb = this.y + sin(angle) * length;
    //when the mouse is away from the eyes, move the eye ball's y coordinate this way
    else this.yb = this.y + sin(angle) * 30;


    if (this.xb > this.x + testDistance || this.xb < this.x - testDistance) this.xb = this.x + cos(angle) * testDistance;
    if (this.yb > this.y + testDistance || this.yb < this.y - testDistance) this.yb = this.y + sin(angle) * testDistance;
  }
  this.blink = function() {
    this.click = 1;
  }
}





// strokeWeight(1);
//rect(40,270,80,110);
//rect(400,270,80,110);