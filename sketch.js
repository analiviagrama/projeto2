let cor;
let vertical;
let horizontal;

function setup() {
  createCanvas(400, 400);
  background("rgb(235,23,23)");
  cor=color(random(0,255),random(0,255),random(0,255));
  
horizontal=200;
  vertical=200;
}

function draw() {
  circle(horizontal,vertical,35);
  fill (cor);
  if (mouseX<horizontal)
  horizontal--
}
