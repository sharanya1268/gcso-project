var car, wall;
var speed, weight;

function setup() {
  createCanvas(1370,400);

  speed = random(55, 90);
  weight = random(400, 1500); 

  car = createSprite(50, 200, 70, 50);
  car.velocityX = speed;
  wall = createSprite(1360, 200, 100,400); 

  car.shapeColor = "blue";
 
  wall.shapeColor = "grey";  
  

  
  
}

function draw() {
  background("black");  
  
  if(wall.x - car.x < (car.width + wall.width)/2)
  { 
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      
      car.shapeColor = rgb(255,0,0);
      
      text("Speed is:"+speed, 400,50);
      text("Weight is:"+weight, 400,150);
      text("Deformation is:"+deformation, 400,250);
      text("Deformation Rating = D",400,350)
    }  

    if(deformation > 100 && deformation < 180)
    {
      
      car.shapeColor = rgb(230,230,0);
      text("Speed is:"+speed, 400,50);
      text("Weight is:"+weight, 400,150);
      text("Deformation is:"+deformation, 400,250);
      text("Deformation Rating = C",400,350)
    }
    
    if(deformation <100 )
    {
      
      car.shapeColor =  rgb(0,255,0);
      text("Speed is:"+speed, 400,50);
      text("Weight is:"+weight, 400,150);
      text("Deformation is:"+deformation, 400,250);
      text("Deformation Rating = B",400,350)
    }
  }
drawSprites();
}