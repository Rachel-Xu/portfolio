/* 
598 assignment Bouncing

student: Rachel / Kun Xu
(Finished with help from Sam)

note:
Didn't able to make random alpha value (transparency) for the balls
didn't able to add one ball every time mouse is clicked

*/




var xCoord = [];
var yCoord = [];
//make the ellipse's X and Y coordinates able to hold a array of value

var sizeoftheball = [];
//make the ellipse's radius able to hold a array of value

var xDirection = [];
var yDirection = [];
//make the ellipse's direction able to hold a array of value
//this part didn't accurred to me at all before Sam point it out...

var ball_color = [];

var ball_alpha = [];
// alpha didn't work...

function addOne(x, y) {
    xCoord.push(x);
    //"round()" means assign a int value 

    yCoord.push(y);
// "yCoord.push(randomy)" means push a randomy to yCoord

    var randomSpeed = [-8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8];
    var randomxD = random(randomSpeed);
    xDirection.push(randomxD);

    var randomyD = random(randomSpeed);
    yDirection.push(randomyD);


    var randomsize = round(random(10, 80));
    sizeoftheball.push(randomsize);

    var colors = ['#d2acd1', '#8c759f', '#f5b8c7', '#ffeec3', '#fbd395'];
    var color = random(colors);
    ball_color.push(color);
}

function setup() {

  createCanvas(600, 600);
  ellipseMode(CORNER);
  // Set ellipseMode is CORNER
  
  for (i = 0; i < 5; i++) {
    addOne(round(random(0, 520)), round(random(0, 520)));
  }
}


function draw() {
  background('#d2acd1');


  for (i = 0; i < yCoord.length; i++) {
//I'm still at the "It works?.. why?" situation with this line of code
//so ask Sam if you don't get it :D
    
    noStroke();
    fill(ball_color[i]);
    ellipse(xCoord[i], yCoord[i], sizeoftheball[i], sizeoftheball[i]);


    xCoord[i] = xCoord[i] + xDirection[i];
    yCoord[i] = yCoord[i] + yDirection[i];


    if (xCoord[i] + sizeoftheball[i] > width) {
      //make the ball bounce back when it's edge hit the boundry
      xDirection[i] = xDirection[i] * -1;
    }

    if (xCoord[i] < 0) {
      xDirection[i] = xDirection[i] * -1;
    }

    if (yCoord[i] + sizeoftheball[i] > height) {
      yDirection[i] = yDirection[i] * -1;
    }

    if (yCoord[i] < 0) {
      yDirection[i] = yDirection[i] * -1;
    }
  }
}

function mousePressed() {
	for (i = 0; i < 5; i++) {
  	addOne(mouseX, mouseY);
  }
}