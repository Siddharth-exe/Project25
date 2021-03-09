const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject, dustbinObj, groundObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(250,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  keyPressed();

  drawSprites();

}


function keyPressed() {
	if (keyDown("up")) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:40,y:-110});

  
	}
}
