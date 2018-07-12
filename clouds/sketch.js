//colorful cloud

function setup() {
  createCanvas(800, 800);
  background('#f0f9ff');
  
  fill('#fbd395');
  textSize(32);
text('Click on the canvas :)', 325, 390);
}

function drawFace(x, y, s) {
  push();
  stroke(0);

  translate(x, y);

  scale(s);

  noStroke();

  /*
  draw colorful cloud
  */

  
  //give random color to the cloud
  var colors = ['#d2acd1', '#8c759f', '#f5b8c7', '#ffeec3', '#fbd395'];
  var color = random(colors);
  fill(color);

  
  //draw the cloud
  ellipseMode(CORNER);

  ellipse(16, 12, 30, 28);
  ellipse(1, 27, 35, 35);
  ellipse(34, 1, 57, 49);
  ellipse(72, 25, 34, 37);
  ellipse(59, 46, 26, 22);
  ellipse(19, 35, 52, 35);

  //draw eyes
  
  //give the eyes ramdon coordinations on the X direction, 
  //so they looks like they are looking at ramdon locations.
  var a = random(-10, 5)
  var b = random(-3, 3)
  
  
  fill(0);
  noStroke();
  ellipse(46 + a, 39 + b, 3, 3); // left eye

  fill(0);
  noStroke();
  ellipse(56 + a*b, 39 + b, 3, 3); // right eye


  //draw rain drop

  var c = 15 // use variable to adjust the rain drops coordinations and make multipile of them easily

  fill('#94d0ec')
  
  triangle(32.6, 95.8, 41, 86, 45.6, 98.3);
  ellipse(31, 93, 15, 15);

  triangle(32.6 + c, 95.8 + c, 41 + c, 86 + c, 45.6 + c, 98.3 + c);
  ellipse(31 + c, 93 + c, 15, 15);

  triangle(32.6 + 2 * c, 95.8 - c / 3, 41 + 2 * c, 86 - c / 3, 45.6 + 2 * c, 98.3 - c / 3);
  ellipse(31 + 2 * c, 93 - c / 3, 15, 15);

  pop();
}



function mouseClicked() {

  var scale = random(0.3, 1.5);

  drawFace(mouseX, mouseY, scale);
}


