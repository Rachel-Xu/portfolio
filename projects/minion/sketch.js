var minion = function(s) {
  var Myellow = '#FBCD24';
  var bluePants = '#295C8D';
  const eyeSize = 65;
  const eyeBallSize = 30;
  var EyeBallColor = '';
  var testDistance = 15;
  var action = 1;

  var leftEye, rightEye, iceCreamLeft, iceCreamRight

  s.setup = function() {
    s.createCanvas(500, 550);

    //create two eye balls by using OBJECT
    leftEye = new eyes(220, '#7F4D27');
    rightEye = new eyes(296, '#5D2F10');

    //make icecream and arms for both side by using OBJECT
    iceCreamLeft = new iceCream(0);
    iceCreamRight = new iceCream(200);
  // OBJECT need to be in the setup area

  }

  //draw the minon
  s.draw = function() {
    s.background('#FFE3A5');
      //shadow in the background


    s.fill('#BEA77C');
    s.noStroke();
    s.beginShape();
    s.vertex(336, 127);
    s.vertex(514, 306);
    s.vertex(514, 551);
    s.vertex(233, 551);
    s.vertex(175, 490);
    s.vertex(208, 470);
    s.endShape(s.CLOSE);


    // text
    s.noStroke();
    s.textSize(24)
    s.textStyle('bold');
    s.fill('#BEA77C');
    s.text('Hey there, want some icecream?', 62, 62);
    s.fill('#FFE3A5');
    s.text('Hey there, want some icecream?', 60, 60);


    drawMinion();

    //text on minion shirt
    s.noStroke();
    s.textSize(10)
    s.textStyle('bold');
    s.fill('#A995BC');
    s.text('RX',283,360);

    s.noStroke();

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
    var a = s.atan2(s.mouseY - s.height / 2, s.mouseX - s.width / 2);

    //dist(x1,y1,x2,y2)

    //15 is the scale to adjust the rotation's; distance between the center of the canvas and the mouse
    var length = s.dist(s.mouseX, s.mouseY, s.width / 2, s.height / 2) / 25;


    leftEye.rotate(a, length);
    rightEye.rotate(a, length);

    mouth((s.mouseX - s.width / 2) / 15 + 8, (250 - s.mouseY) / 15 + 8);

    // (mouseX - width/2)/15


    if (action == 0) {
      leftArm(), iceCream(0);
    } else if (action == 1) {
      rightArm(100), iceCream(360);
    }
    mouseHand(s.mouseX,s.mouseY);
  }

  function mouth(mouthW, mouthH) {

    s.noStroke();
    s.fill('#F4B7C7');
    s.ellipse(260, 245, mouthW, mouthH)

  }

  function mouseHand(x, y) {
    s.fill('#594C44');
    s.ellipse(x+35, y+41, 36, 36);
    s.ellipse(x+9, y+33, 18, 18);
    s.ellipse(x+34, y+9, 18, 18);
    s.ellipse(x+58, y+24, 18, 18);

    s.strokeWeight(14);
    s.stroke('#594C44');
    s.line(x+10, y+34, x+25, y+39);
    s.line(x+34, y+34, x+34, y+9);
    s.line(x+58, y+24, x+44, y+38);
  }

  function drawMinion() {

    //body
    s.fill(Myellow);
    s.noStroke();
    s.rect(162, 190, 197, 184);
    s.ellipse(260, 190, 197, 198);

    //legs
    s.fill(Myellow);
    s.noStroke();
    s.beginShape();
    s.vertex(203, 403);
    s.vertex(225, 403);
    s.vertex(225, 472);
    s.vertex(207, 472);
    s.endShape(s.CLOSE);

    s.beginShape();36
    s.vertex(295, 403);
    s.vertex(317, 403);
    s.vertex(313, 472);
    s.vertex(295, 472);
    s.endShape(s.CLOSE);

    //pants
    s.fill(bluePants);
    s.beginShape();
    s.vertex(203, 333);
    s.vertex(318, 333);
    s.vertex(318, 371);
    s.vertex(359, 371);
    s.vertex(359, 403);
    s.vertex(162, 403);
    s.vertex(162, 371);
    s.vertex(203, 371);
    s.endShape(s.CLOSE);
    s.rect(203, 403, 114, 30);
    s.arc(317, 403, 83.5, 60, 0, s.HALF_PI);
    s.arc(204, 403, 83.5, 59, s.HALF_PI, 0);

    //pants' belts
    s.strokeWeight(10);
    s.strokeCap(s.ROUND);
    s.stroke('#154167');
    s.line(159, 312, 214, 343);
    s.line(306, 344, 361, 311);

    //feet

    s.stroke('#30302F');
    s.beginShape();
    s.vertex(225, 472);
    s.vertex(226, 480);
    s.vertex(191, 480);
    s.vertex(199, 475);
    s.vertex(207, 472);
    s.endShape(s.CLOSE);

    s.beginShape();
    s.vertex(294, 472);
    s.vertex(313, 472);
    s.vertex(321, 475);
    s.vertex(328, 480);
    s.vertex(293, 480);
    s.endShape(s.CLOSE);

    s.strokeWeight(10);
    s.line(179,486,229,486);
    s.line(291,486,338,486);

    //glasses
    s.stroke('#30302F');
    s.strokeWeight(26);
    s.strokeCap(s.PROJECT);
    s.line(185, 201, 170, 200);
    s.line(332, 201, 352, 200);

    s.noFill();
    s.stroke('#8FA3A9');
    s.strokeWeight(20);
    s.ellipse(220, 200, 65, 65);
    s.ellipse(296, 200, 65, 65);
  }


  s.mouseClicked = function() {
    //  strokeWeight(1);
    //rect(25, 250, 80, 110);
    //rect(385, 250, 80, 110);

    if ((action == 0) && (25 < s.mouseX && s.mouseX < 105 && 250 < s.mouseY && s.mouseY < 360)) {
      action = 1;

    } else if ((action == 1) && (385 < s.mouseX && s.mouseX < 465 && 250 < s.mouseY && s.mouseY < 360)) {
      action = 0;
    }
  }

  function leftArm() {
    //left arm
    s.stroke(Myellow);
    s.strokeWeight(20);
    s.strokeCap(s.ROUND);
    s.curve(70, 330, 85, 343, 162, 331, 190, 310);
  }

  function rightArm(x) {
    //left arm
    s.stroke(Myellow);
    s.strokeWeight(20);
    s.strokeCap(s.ROUND);
    //s.curve(70, 330, 85, 343, 162, 331, 190, 310);
    s.curve(x + 530, 330, x + 335, 343, x + 258, 331, x + 230, 310);
  }


  //x is short for distance between left hand and right hand
  function iceCream(x) {
    //hand and ice cream
    //hand

    s.noStroke();
    s.fill('#393A34');
    s.ellipse(x + 65, 344, 53, 40);

    //icecream cone
    s.fill('#FAD395');
    s.triangle(x + 43, 302, x + 88, 302, x + 66, 356);
    //icecream ball
    s.fill('#F4B7C7');
    s.ellipse(x + 65, 286, 60, 55);

    //little dots
    s.fill('#FAD395');
    s.ellipse(x + 60, 280, 5, 5);
    s.ellipse(x + 66, 275, 5, 5);
    s.ellipse(x + 53, 276, 5, 5);
    s.ellipse(x + 89, 288, 5, 5);
    s.ellipse(x + 39, 288, 5, 5);
    s.fill('#D2ACD1');
    s.ellipse(x + 95, 285, 5, 5);
    s.ellipse(x + 81, 279, 5, 5);
    s.ellipse(x + 75, 287, 5, 5);
    s.ellipse(x + 48, 287, 5, 5);
    s.ellipse(x + 35, 281, 5, 5);
    s.fill('#8C759F');
    s.ellipse(x + 66, 284, 5, 5);
    s.ellipse(x + 92, 275, 5, 5);
    s.ellipse(x + 43, 275, 5, 5);

    //finger
    s.fill('#393A34');
    s.ellipse(x + 52, 333, 18, 14);
    s.ellipse(x + 78, 333, 18, 14);

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
      s.fill(255);

      //draw the eyes
      s.ellipse(this.x, this.y, eyeSize, eyeSize);
      s.fill(eyeBallColor);
      //draw the eye balls
      s.ellipse(this.xb, this.yb, eyeBallSize, eyeBallSize);
    }

    //rotate the eye balls
    this.rotate = function(angle, length) {
      //var length = dist(mouseX, mouseY, width / 2, height / 2) / 15;

      //when the mouse is on the eyes, move the eye ball's x coordinate this way
      if (length < testDistance) this.xb = this.x + s.cos(angle) * length;
      //when the mouse is away from the eyes, move the eye ball's x coordinate this way
      else this.xb = this.x + s.cos(angle) * testDistance;
      //when the mouse is on the eyes, move the eye ball's y coordinate this way
      if (length < testDistance) this.yb = this.y + s.sin(angle) * length;
      //when the mouse is away from the eyes, move the eye ball's y coordinate this way
      else this.yb = this.y + s.sin(angle) * 30;


      if (this.xb > this.x + testDistance || this.xb < this.x - testDistance) this.xb = this.x + s.cos(angle) * testDistance;
      if (this.yb > this.y + testDistance || this.yb < this.y - testDistance) this.yb = this.y + s.sin(angle) * testDistance;
    }
    this.blink = function() {
      this.click = 1;
    }
  }
};
(new p5(minion, 'minion-holder'))


// strokeWeight(1);
//rect(40,270,80,110);
//rect(400,270,80,110);