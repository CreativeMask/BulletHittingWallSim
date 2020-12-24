
var bullet;
var wall;
var speed;
var weight;
var thickness;

function preload(){

}

function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));
  bullet = createSprite(50,200,50,20);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor = color(255, 255, 255);
  bullet.velocityX = speed;
}


function draw() {
  background("black");
  text("Speed of bullet:"+speed+"    Weight of bullet:" + weight + "   Thickness of wall:" + thickness, 500, 20);
  if(bullet.collide(wall)){
    d = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;
    
    if(d > 10){
     wall.shapeColor = color(255,0,0);
    } else if(d < 10){
      wall.shapeColor = color(0,255,0);
    }
  }
    
    
  drawSprites();
}
