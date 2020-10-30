
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground;
var foodGroup, obstacleGroup
var score
var bgmusic;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgmusic = loadSound("World's Hardest Game.wav");
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.shapeColor = "orange";
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(220);
  bgmusic.play();
  score = 0;
  stroke("black");
  textSize(20);
  fill("black");
  score = Math.round(frameCount/frameRate());
  text("Survival Time: " + score,125,50);
  
  if(keyDown("space") && monkey.y >= 200){
    monkey.velocityY = -13; 
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  food();
  spawnObstacles();
  
  if(monkey.isTouching(foodGroup)){
    monkey.scale = monkey.scale + 0.001;
  }
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.scale = monkey.scale - 0.001;
    
  } 
  
 drawSprites(); 
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,100,20,20)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.lifeime = 200;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    foodGroup.add(banana);
  }
  
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
   obstacle = createSprite(600,330,10,40);
   obstacle.velocityX = -4;
    var r = Math.round(random(1));
    
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.lifetime = 300;
  
  obstacleGroup.add(obstacle); 
       
    }
            
    
  }
 
  






