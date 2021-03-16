
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(420,690,860,50);
    paper= new Paper(100,620,18);

	dustbin1=new Dustbin(400,670,20,120);
	dustbin2=new Dustbin(580,670,20,120);
	dustbin3=new Dustbin(480,670,200,12);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25,25,32);
  
  ground.display();  
  paper.display(); 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45})
	}
}


