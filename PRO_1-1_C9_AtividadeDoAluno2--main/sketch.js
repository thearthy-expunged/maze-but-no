var player
var wall1 
var wall2
var wall3
var wall4
var wall5
var win
var walls
function setup() {
  createCanvas(windowWidth,windowHeight);
  player = createSprite(50,50,50,50)
walls = new Group()
wall1 = createSprite(200,30,300,50)
wall2 = createSprite(200,30,300,50)
wall3 = createSprite(300,300,300,50)
wall4 = createSprite(300,350,300,50)
wall5 = createSprite(300,400,300,50)




walls.add(wall1)
walls.add(wall4)
walls.add(wall3)
walls.add(wall5)

win = createSprite(width/2,height/2,50,50)
}

function draw() 
{
wall2.rotation +=1
  background(30);
if(keyDown("up")){
player.y -=5 
background("lime")
}
if(keyDown("Down")){
  player.y +=5
background("cyan")
}
if(keyDown("left")){
  player.x -=5
background("purple")
}
if(keyDown("right")){
  player.x +=5
background("red")
}
player.collide(walls)
drawSprites();
}




