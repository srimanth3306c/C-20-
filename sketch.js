var car1,wall1;
var car2,wall2;
var speed,weight;






function setup() {
  createCanvas(800,400);
 car1 =  createSprite(790, 50, 20, 5); 
car1.shapeColor = "red";
car1.velocityX = speed;

 wall1 = createSprite(300,100,1000,10);
wall1.shapeColor = "white";
}

 speed = random(55,90);
 weight = random(400,1500);


function draw() {
  background(0,0,0);  
  drawSprites();
}