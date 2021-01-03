function preload(){

PacmanImage = loadImage("Photos/Pacman.png");
SpawnSpriteImage = loadImage("Photos/SpawnSprite.png");
TSprite_UpImage = loadImage("Photos/TSprite_Up.png");
TSprite_RightImage = loadImage("Photos/TSprite_Right.png");
TSprite_DownImage = loadImage("Photos/TSprite_Down.png");
TSprite_LeftImage = loadImage("Photos/TSprite_Left.png");
Horizontal = loadImage("Photos/lineSprite_Horizontal.png");
Vertical = loadImage("Photos/lineSprite_Vertical.png");
Ghost1Image = loadImage("Photos/Ghost1.png");
Ghost2Image = loadImage("Photos/Ghost2.png")
Ghost3Image = loadImage("Photos/Ghost3.png")
Ghost4Image = loadImage("Photos/Ghost4.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  wall1 = createSprite(windowWidth/2 + 73, windowHeight/2, 100, 100);
  wall1.addImage("wall1",SpawnSpriteImage);
  Pacman = createSprite(windowWidth/2 - 10, windowHeight/2 +100, 20, 20);
  Pacman.addImage("Pacman",PacmanImage);
  Pacman.scale = 0.1;

  border1 = createSprite(767.5,0,700,10);
  border1.shapeColor =  "red";
  border2 = createSprite(767.5,752,700,10);
  border2.shapeColor = "red";
  border3 = createSprite(1115.5,376,10,752);
  border3.shapeColor = "red";
  border4 = createSprite(419.5,376,10,752);
  border4.shapeColor = "red";

  tUP = createSprite(565,218,50,50);
  tUP.addImage("tUP",TSprite_UpImage);

  tUP1 = createSprite(1015,218,50,50);
  tUP1.addImage("tUP1",TSprite_UpImage);

  tDOWN = createSprite(518,558,50,50);
  tDOWN.addImage("tDOWN",TSprite_DownImage);

  tDOWN1 = createSprite(968,558,50,50);
  tDOWN1.addImage("tDOWN1",TSprite_DownImage);

  lineH = createSprite(800,253,10,10);
  lineH.addImage("lineH",Horizontal);

  lineH1 = createSprite(800,613,10,10);
  lineH1.addImage("lineH1",Horizontal);

  Ghost1 = createSprite(720,330,10,10);
  Ghost1.addImage("Ghost1",Ghost1Image);
  Ghost1.scale = 0.3;
  Ghost1.velocityX = -2;
  Ghost1.velocityY = -3;

  Ghost2 = createSprite(794,330,10,10);
  Ghost2.addImage("Ghost2",Ghost2Image);
  Ghost2.scale = 0.3;
  Ghost2.velocityX = 2;
  Ghost2.velocityY = -3;

  Ghost3 = createSprite(712,423,10,10);
  Ghost3.addImage("Ghost3",Ghost3Image);
  Ghost3.scale = 0.3;
  Ghost3.velocityX = -2;
  Ghost3.velocityY = 3;

  Ghost4 = createSprite(796,423,10,10);
  Ghost4.addImage("Ghost4",Ghost4Image);
  Ghost4.scale = 0.3;
  Ghost4.velocityX = 2;
  Ghost4.velocityY = 3;

}

function draw() {
  background("black");  
  drawSprites();
  text("x:" +mouseX, 100, 200);
  text("y:" +mouseY, 100, 230);

  
  Ghost1.bounceOff(border1);
  Ghost1.bounceOff(border2);
  Ghost1.bounceOff(border3);
  Ghost1.bounceOff(border4);
  
  Ghost2.bounceOff(border1);
  Ghost2.bounceOff(border2);
  Ghost2.bounceOff(border3);
  Ghost2.bounceOff(border4);
 
  Ghost3.bounceOff(border1);
  Ghost3.bounceOff(border2);
  Ghost3.bounceOff(border3);
  Ghost3.bounceOff(border4);
  
  Ghost4.bounceOff(border1);
  Ghost4.bounceOff(border2);
  Ghost4.bounceOff(border3);
  Ghost4.bounceOff(border4);

  Pacman.collide(tUP);
  Pacman.collide(tUP1);
  Pacman.collide(tDOWN);
  Pacman.collide(tDOWN1);
  Pacman.collide(lineH);
  Pacman.collide(lineH1);

  movement();
}

function movement(){

if(keyDown(UP_ARROW)){
Pacman.setSpeedAndDirection(4,-90);
Pacman.rotation = -90;
}

if(keyDown(DOWN_ARROW)){
Pacman.setSpeedAndDirection(4,90);
Pacman.rotation = 90;
}

if(keyDown(LEFT_ARROW)){
Pacman.setSpeedAndDirection(4,180);
Pacman.rotation = 180;
}

if(keyDown(RIGHT_ARROW)){
 Pacman.setSpeedAndDirection(4,0);
 Pacman.rotation = 0;
}
    
  
}