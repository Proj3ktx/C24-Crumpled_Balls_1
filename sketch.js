var box1, box2, box3;
var ball, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(50, 350, 30);

	box1 = new Dustbin(600, 370, 200, 20);
	box2 = new Dustbin(490, 330, 20, 100);
	box3 = new Dustbin(710, 330, 20, 100);

	ground = new Ground(400, 390, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  ball.display();

  ground.display();

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position, {x:200, y:-100});
	}
}


