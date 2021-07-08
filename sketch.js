const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper;
var ground;
var dustbin;
var paperImage;

function preload()
{
	paperImage =  loadImage("paper.png");
	dustbinImage =  loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var paper_options={

		isStatic : false,
		restitution : 0.1,
		density : 1.3,
		friction : 0.5
	}

   paper = Bodies.circle(200,200,20,paper_options);
   World.add(world,paper);


   ground =  Bodies.rectangle(600,690,1200,10,{isStatic:true});
   World.add(world,ground);

 dustbin = new trashcan(1000,620,20,100);

  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("orange");
  
 // ellipseMode(RADIUS);
 // ellipse(paper.position.x,paper.position.y,20,20);


 imageMode(CENTER);
 image(paperImage,paper.position.x,paper.position.y,50,50);

 imageMode(CENTER);
 image(dustbinImage,1000,590,200,200);



 
  rect(ground.position.x,ground.position.y,1200,10);

  drawSprites();

dustbin.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper,paper.position,{x:70,y:-100});
  
	}
}
