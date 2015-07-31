var Walker = function(x, y) {
  this.x = x;
  this.y = y;
};

Walker.prototype.display = function() {
  stroke(0);
  point(this.x, this.y);
};

Walker.prototype.step = function() {
  var stepx = Math.random() * 2 - 1;
  var stepy = Math.random() * 2 - 1;

  this.x += stepx;
  this.y += stepy;
}

var walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker(windowWidth/2, windowHeight/2);
  background(255);
}

function draw() {
  walker.step();
  walker.display();
  console.log(walker)
}
