function preload(){
  bg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png")
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(bg);  
  drawSprites();

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 250;
    astronaut.velocityX = 3;
    astronaut.velocityY = 5;
  }
  

  textSize(30);
  fill(255);
  text("Instruction: ",20,30)
  textSize(20);
  fill(255);
  text("Up Arrow = Brushing",20,50)
  textSize(20);
  fill(255);
  text("Down Arrow = Gymming",20,70)
  textSize(20);
  fill(255);
  text("Left Arrow = Eating",20,90)
  textSize(20);
  fill(255);
  text("Right Arrow = Bathing",20,110)
  textSize(20);
  fill(255);
  text("m key = Moving",20,130)
}