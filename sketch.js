
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var human;
var mango1,mango2,mango3;
function preload()
{
	human = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    human = createSprite (180,600,50,50);
	mango1 = new Mango(200,300,50);
    mango2 = new Mango(215,290,50);
    mango3 = new Mango(220,310,50);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  human;
  drawSprites();
 
}



