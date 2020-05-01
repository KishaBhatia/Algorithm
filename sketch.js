var wall;
var car;

var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  var wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  var car=createSprite(50,200,60,30);
  car.shapeColor="red";
  car.velocityX=speed;
  speed=random(50,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
  
  car.x=World.mouseX; 
  car.y=World.mouseY; 
  
  if (wall.x-car.x < (car.width+wall.width)/2)  {
      
    car.velocityX=0;

    var deformation=0.5 * weight * speed * speed/22500;

    if(deformation>180){

      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){

      car.shapeColor=color(220,220,0);
    }

    if(deformation<100){

      car.shapeColor=color(0,255,0);
    }

  }

  drawSprites();
}