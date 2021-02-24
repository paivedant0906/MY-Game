var player,playerimage;
var earth,earthimage;
var background1,background1image;
var gameState="start";
var obstacle,o1,o2,o3,o4;
var iground;
var obstaclesGroup
var bomb,bombImage
var play,playimage
var healthb1,healthb2,healthb3,healthb4;
var healthholder;
function preload(){
  background1image=loadImage("bg.jpg");
  playerimage=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png");
 earthimage=loadImage("earth simple.png")
 o1=loadImage("wodcutter.png")
 o2=loadImage("car.png")
o3=loadImage("industry.png")
bombImage=loadImage("bomb.png")
playimage=loadImage("play.png")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-150);
  background1=createSprite(displayWidth/2,displayHeight/2-50,displayWidth*2,displayHeight);
  background1.velocityX=-6;
  background1.addImage("bg",background1image);
  background1.scale=1;

   background2=createSprite(-displayWidth/2,displayHeight/2-50,displayWidth*2,displayHeight);
  background2.velocityX=-6;
  background2.addImage("bg2",background1image);
  background2.scale=1;


healthholder=createSprite(displayWidth-350,50,300,10)
healthholder2=createSprite(displayWidth-350,100,300,10)
healthholder3=createSprite(displayWidth-200,75,10,60)
healthholder4=createSprite(displayWidth-500,75,10,60)
healthholder.shapeColor="black"
healthholder2.shapeColor="black"
healthholder3.shapeColor="black"
healthholder4.shapeColor="black"

healthb1=createSprite(displayWidth-350,75,300,50)
healthb1.shapeColor="blue"
 player=createSprite(100,displayHeight/2+140,50,50);
 player.addAnimation("player",playerimage);
 player.scale=2;
 
 iground=createSprite(displayWidth/2,displayHeight/2+160,displayWidth,10);
 iground.visible=false;
 play=createSprite(displayWidth/2,displayHeight/2,50,50)
 play.addImage(playimage)
   
  earth=createSprite(player.x+5,100,50,50);
 obstaclesGroup=new Group()
  earth.addImage("e",earthimage);
  earth.scale=0.5
}

function draw() {

 

  if(gameState==="start"){
   background(background1image)
    player.visible=false
   earth.visible=false
   background1.visible=false
  background2.visible=false
   play.visible=true

 
   
   if(mousePressedOver(play)){
    
     gameState="play"
 
   }
   drawSprites()
  }
  else if(gameState==="play"){
     background(255,255,255);  
     player.visible=true
   earth.visible=true
    play.visible=false
   background1.visible=true
     background2.visible=true

  
   earth.y=player.y-100
     earth.x=player.x
  if(background1.x<0){
    background1.x=background1.width/2;
  }

  if(keyDown("right")){
    player.x+=10
  }
  if(keyDown("left")){
    player.x-=10
  }
   if(background2.x<0){
    background2.x=background2.width/2;
  }
  if(player.x>130){
    player.x=130
  }
  if(player.x<40){
    player.x=40
  }
  if(keyDown("space")&& player.y>=320){
    player.velocityY=-12;
  }
 
  spawnobstacles()
 // spawnbomb()
  player.velocityY=player.velocityY+0.8;
player.collide(iground)
drawSprites();
}
  
}

function spawnobstacles(){
  if(frameCount%350===0){
    obstacle=createSprite(displayWidth+20,displayHeight/2+120,50,50)
    obstacle.velocityX=-6
    var obrand=Math.round(random(1,3))
    switch(obrand){
      case 1:obstacle.addImage(o1)
      obstacle.scale=1.2;
      break;
      case 2:obstacle.addImage(o2)
      break;
      case 3 :obstacle.addImage(o3)
      break;
      default:break
     obstaclesGroup.add(obstacle)
    }
  }
}
function spawnbomb(){
  if(frameCount%200===0){
    var xx=Math.random(400,1000)
    bomb=createSprite(80,displayHeight/2-800,50,50)
    bomb.x=Math.round(random(20,180))
    bomb.velocityY=6
    bomb.addImage(bombImage)
    bomb.scale=0.4
  }
}
