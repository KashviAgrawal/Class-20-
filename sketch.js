function setup() {
  createCanvas(800,400);
   fixedrect=createSprite(400, 200, 50, 50);
   movingrect =createSprite(500,100,80,80);
   fixedrect.shapeColor="blue"
   movingrect.shapeColor="blue"
}

function draw() {
  background(255,255,255);
  movingrect.x= World.mouseX
  movingrect.y=World.mouseY
  
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="pink"
   movingrect.shapeColor="pink"
  }
  else{
    fixedrect.shapeColor="blue"
   movingrect.shapeColor="blue"
  }
  drawSprites();
}