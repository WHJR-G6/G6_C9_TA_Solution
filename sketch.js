var box;
function setup()
{
 createCanvas(400,400);
 box = createSprite(40,40,40,40);
 box.shapeColor = "blue";
 box.x = 100;
 box.y = 150;
 box.velocityY=5;
}
  
function draw()
{
 background(220);
 drawSprites();
}

