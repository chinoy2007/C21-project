
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball , groundobj , leftside, rightside;
var radius= 40;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball= Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	groundobj= new Ground(width/2,670,width,120);
	leftside= new Ground(1100,500,20,400);
	rightside = new Ground(1350,500,20,400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  
 

  groundobj.display();
  leftside.display();
  rightside.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



