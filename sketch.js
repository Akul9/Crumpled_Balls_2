
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Paper = new paper(200,450,40);
	Ground = new ground(width/2,670,width,20);
	Dustbin = new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Dustbin.display();
  Paper.display();
  Ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
  
	}
}
