
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var ball;
var ground;
var wedge,plataforma;
	


function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
	  }

	  var ground_options = {
		isStatic : true
	  }
	  ball = Bodies.circle(100,10,20,ball_options);
	  World.add(world,ball);
	  ground = Bodies.rectangle(200,390,400,20,ground_options);
	  World.add(world,ground);
	  plataforma = Bodies.rectangle(100,300,20,30,ground_options);
	  World.add(world,plataforma);
	  wedge = Bodies.rectangle(150,50,50,15,ground_options);
	  World.add(world,wedge);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wedge.position.x,wedge.position.y,30,20);
  rect(plataforma.position.x,plataforma.position.y,20,10);
  drawSprites();
 
}



