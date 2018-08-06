var circles = []

function setup() {
  createCanvas(640,360);
  var protection = 0;

  while (circles.length < 300){
    var circle = {
      x: random(width),
      y: random(height),
      r: random(12,36)
    };

    var overlapping = false;

    for (var j=0; j< circles.length; j++){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y)
      if (d < circle.r + other.r){
        // Overlapping circles
        overlapping = true;
        break;
      }
    }

    if (!overlapping){
      circles.push(circle)
    }

    protection++;

    if (protection > 1000){
      break;
    }

    console.log(circles.length);

    for (var i=0; i< circles.length; i++){
      fill(255, 0, 150, 100);
      noStroke();
      ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2)  
    }
  }
}

function draw() {
  // put drawing code here
}