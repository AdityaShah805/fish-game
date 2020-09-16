var bg,bgimage ;
var fish,fishimage;
function  preload(){
bgimage=loadImage("water.jpg");
fishimage=loadImage("fish.png");
shark1image=loadImage("shark1.png");
shark2image=loadImage("shark2.png");
}       
function setup() {
  createCanvas(1200,400);
 bg=createSprite(600,600,1200,400);
  bg.addImage("water",bgimage)
  bg.scale=8;
  bg.x=bg.width/2;
bg.velocityX=-5;

fish=createSprite(400,400,100,100);
fish.addImage("wfish",fishimage)
fish.velocityY=6;
fish.scale=0.4;
}

function draw() {
// background(0,0,0);  
 
  if(bg.x<0){
    bg.x=bg.width/2
  }
  if(keyDown("space")){
    fish.velocityY=-5;
  }
  fish.velocityY=fish.velocityY+1;
spawnshark1();
spawnshark2();
  drawSprites();
  textSize(25);
 text("x:"+mouseX,100,100)
 text("y:"+mouseY,100,150)
}
function spawnshark1(){
  if(World.frameCount%50===0){
    var shark1=createSprite(600,random(360,50),100,100);
    shark1.addImage(shark1image);
    shark1.velocityX=-5;
    shark1.scale=0.5;
   }
}
function spawnshark2(){
  if(World.frameCount%50===0){
    var shark2=createSprite(600,random(200,350),100,100);
    shark2.addImage(shark2image);
    shark2.velocityX=-5;
    shark2.scale=0.5;
   }
}