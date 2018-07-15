//colorful cloud
var cloud = function(s) {
  s.setup = function() {
    s.createCanvas(800, 800);
    s.background('#f0f9ff');

    s.fill('#fbd395');


    s.textSize(32);
    s.text('click', 375, 395);

    s.stroke('#fbd395');
    s.noFill();
    s.ellipse(400,400,800,800);
  }

  s.drawFace = function(x, y, scale) {
    s.push();
    s.stroke(0);

    s.translate(x, y);

    s.scale(scale);

    s.noStroke();

    /*
    draw colorful cloud
    */


    //give random color to the cloud
    var colors = ['#d2acd1', '#8c759f', '#f5b8c7', '#ffeec3', '#fbd395'];
    var color = s.random(colors);
    s.fill(color);


    //draw the cloud
    s.ellipseMode(s.CORNER);

    s.ellipse(16, 12, 30, 28);
    s.ellipse(1, 27, 35, 35);
    s.ellipse(34, 1, 57, 49);
    s.ellipse(72, 25, 34, 37);
    s.ellipse(59, 46, 26, 22);
    s.ellipse(19, 35, 52, 35);

    //draw eyes

    //give the eyes ramdon coordinations on the X direction,
    //so they looks like they are looking at ramdon locations.
    var a = s.random(-10, 5)
    var b = s.random(-3, 3)


    s.fill(0);
    s.noStroke();
    s.ellipse(46 + a, 39 + b, 3, 3); // left eye

    s.fill(0);
    s.noStroke();
    s.ellipse(56 + a*b, 39 + b, 3, 3); // right eye


    //draw rain drop

    var c = 15 // use variable to adjust the rain drops coordinations and make multipile of them easily

    s.fill('#94d0ec')

    s.triangle(32.6, 95.8, 41, 86, 45.6, 98.3);
    s.ellipse(31, 93, 15, 15);

    s.triangle(32.6 + c, 95.8 + c, 41 + c, 86 + c, 45.6 + c, 98.3 + c);
    s.ellipse(31 + c, 93 + c, 15, 15);

    s.triangle(32.6 + 2 * c, 95.8 - c / 3, 41 + 2 * c, 86 - c / 3, 45.6 + 2 * c, 98.3 - c / 3);
    s.ellipse(31 + 2 * c, 93 - c / 3, 15, 15);

    s.pop();
  }

  s.mouseClicked = function() {

    var scale = s.random(0.3, 1.5);

    s.drawFace(s.mouseX, s.mouseY, scale);

    // s.print(mouseX, mouseY);
  }
};
(new p5(cloud, 'cloud-holder'))