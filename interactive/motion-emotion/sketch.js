var moemo = function(s) {
  var x1 = 466;
  var y1 = 252;

  var angle = 0.0;
  var scalar = 10;
  var speed = 0.04;
  var offset = 248;

  var action = 0;

  s.setup = function() {
    s.createCanvas(800, 530);
    s.ellipseMode(s.CORNER)
  }




  //Draw the three little guys

  function pp1(x1, y1) {
    s.push();
    s.stroke(0);

    s.fill('#f4cb3b');
    s.noStroke();
    s.ellipse(x1, y1, 30, 30); //face

    s.fill(0);
    s.noStroke();
    s.ellipse(x1 + 10, y1 + 9, 3, 3); // left eye

    s.fill(0);
    s.noStroke();
    s.ellipse(x1 + 19, y1 + 9, 3, 3); // right eye

    s.pop();
  }



  //different motions

  function ANGRY() {

    angle += speed * 7;
    var r = s.random(-1,1);

    pp1(x1 + s.sin(angle + 2.2) * scalar * r , s.sin(angle + 2.2) * scalar * 5 + offset+ r);
    pp1(x1 + 40+ s.sin(angle + 2.2) * scalar * r, s.sin(angle + 0.8) * scalar * 5 + offset+ r);
    pp1(x1 + 80 +s.sin(angle + 2.2) * scalar * r, s.sin(angle + 1.6) * scalar * 5 + offset - r);
  }


  function DELIGHTED() {

    var y1 = s.sin(angle) * scalar;

    angle += speed * 2;

    pp1(x1, s.sin(angle + 0.1) * scalar * 2.3 + offset);
    pp1(x1 + 40, s.sin(angle + 0.4) * scalar * 1.9 + offset);
    pp1(x1 + 80, s.sin(angle + 0.8) * scalar * 2.6 + offset);
  }

  function CALM() {

    var y1 = s.sin(angle) * scalar + offset;

    angle += speed * 0.3;

    pp1(x1 - 10, s.sin(angle + 0.1) * scalar * 6 + offset);
    pp1(x1 + 40, s.sin(angle + 0.5) * scalar * 5 + offset);
    pp1(x1 + 10 + 80, s.sin(angle + 0.9) * scalar * 4 + offset);

  }

  function DEPRESSED() {

    var y1 = s.sin(angle) * scalar + offset;

    angle += speed / 3;

    pp1(x1 - 28 + s.cos(angle + 2.2) * scalar, y1);
    pp1(x1 + 40, s.sin(angle + 0.03) * scalar + offset);
    pp1(x1 + 30 - s.sin(angle + 2.2) * scalar + 80, s.sin(angle + 0.1) * scalar + offset);

  }



  s.draw = function() {
    s.background(255);

    //background

    s.noStroke();
    s.fill('#fbd395');
    s.rect(0, 0, 250, 500)

    s.stroke(230)
    s.strokeWeight(2)

    //long line
    s.line(315, 267, 680, 267)
    s.line(519, 113, 519, 434)

    //arrow
    s.line(515, 118, 519, 114)
    s.line(519, 114, 523, 118)

    s.line(675, 264, 680, 267)
    s.line(680, 267, 675, 271)

    //background text
    s.fill(180)
    s.noStroke();
    s.textFont('Verdana');
    s.textSize(16)
    s.textStyle(s.ITALIC);
    s.text('Arousal', 490, 87);
    s.text('Valence', 693, 270);

    s.fill(255)
    s.noStroke();
    s.textSize(30)
    s.textStyle(s.NORMAL);
    s.text('MOTION', 65, 90);
    s.text('&', 65, 130);
    s.text('EMOTION', 65, 170);

    s.fill('#f5b8c7')
    s.textSize(18)
    s.text('Angry', 358, 145);

    s.fill('#fbd395')
    s.textSize(18)
    s.text('Delighted', 595, 145);

    s.fill('#8c759f')
    s.textSize(18)
    s.text('Depressed', 349, 382);

    s.fill('#d2acd1')
    s.textSize(18)
    s.text('Calm', 614, 382);

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

    s.mousePressed = function() {

    if (345 < s.mouseX && s.mouseX < 425 && 115 < s.mouseY && s.mouseY < 170) {
      action = 1;

    } else if (580 < s.mouseX && s.mouseX < 690 && 116 < s.mouseY && s.mouseY < 160) {
      action = 2;


    } else if (330 < s.mouseX && s.mouseX < 455 && 350 < s.mouseY && s.mouseY < 400) {
      action = 3;


    } else if (600 < s.mouseX && s.mouseX < 680 && 360 < s.mouseY && s.mouseY < 390) {
      action = 4;
    }

    // s.print(s.mouseX, s.mouseY)

  }
};
(new p5(moemo, 'moemo-holder'))