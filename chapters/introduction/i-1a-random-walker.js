var Walker = function(x, y) {
  this.x = x;
  this.y = y;
};

Walker.prototype.display = function() {
  stroke(0);
  point(this.x, this.y);
};

Walker.prototype.step = function() {
  var choice = Math.floor(Math.random() * 4);

  switch (choice) {
    case 0:
      this.x = this.x + 1;
      break;
    case 1:
      this.x = this.x - 1;
      break;
    case 2:
      this.y = this.y + 1;
      break;
    case 3:
      this.y = this.y - 1;
      break;
  }
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
}
