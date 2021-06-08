
var backgroundImage


function preload(){
backgroundImage = loadImage("background.jpeg")
}




function setup() {
  createCanvas(1500,700);

  form = new Form()
  form.display();
  
}

function draw() {
  background(backgroundImage);  
  drawSprites();
}