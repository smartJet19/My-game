var randomNum1;
var lifeNum;
var randomNum2;
var movementNum;
var colorNum;
var creatures = [];
var creature;
var enemy;
var enemies = [];
var edge1,edge2,edge3,edge4;


function setup() {
  createCanvas(800,400);
  rootCreature = new Creature(width/2,height/2)

  //edge1 = createSprite(10,200,20,400)
  //edge2 = createSprite(790,200,20,400)
  //edge3 = createSprite(400,10,800,20)
  // edge4 = createSprite(400,390,800,20)
}
function draw() {
  background("green");  
  rootCreature.startExperiment()
  rootCreature.reproduce()
  //rootCreature.handleCreature()
  rootCreature.lifetime = 600


  
  
  drawSprites();
}