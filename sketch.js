
// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;

var track;

function preload()
{
track = loadImage("images/track.png")
}

function setup() {
	createCanvas(800, 3000);


	// engine = Engine.create();
	// world = engine.world;

	//Create the Bodies Here.


	// Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(track);
  
  drawSprites();
 
}



