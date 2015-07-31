var randomCounts = new Array(20).join('0').split('').map(parseFloat);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  var randomEl = Math.floor(Math.random() * randomCounts.length);
  randomCounts[randomEl] += 1;

  stroke(0);
  fill(175);

  var width = windowWidth / randomCounts.length;

  randomCounts.forEach(function(element, index) {
    rect(index * width, windowHeight - randomCounts[index], width - 1, randomCounts[index]);
  });
}
