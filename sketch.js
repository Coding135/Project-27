const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(100,350,40);
	bobObject2 = new Bob(130,350,40);
	bobObject3 = new Bob(160,350,40);
	bobObject4 = new Bob(190,350,40);
	bobObject5 = new Bob(220,350,40);
	roof = new Roof(400,70,40,60);
	rope = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  drawSprites();
 
}



