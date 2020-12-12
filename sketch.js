var bullet,wall
var speed,weight,thickness;

function setup(){
  createCanvas(1200,400);

  speed = random(223,321);
  weight = random(20,30);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);

  wall = createSprite(1100,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  

}

function draw(){
  background(0);

  bullet.velocityX = speed;
  

  if(bullet.isTouching(wall)){

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0)
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }

  }

  drawSprites();


 

}


