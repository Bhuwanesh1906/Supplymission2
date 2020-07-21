var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	var options = {
	isStatic:true
	}

	box1=Bodies.rectangle(width/2,height-45,120,10,options);
	World.add(world,box1);

	
	box2=Bodies.rectangle(width/2-60,height-90,10,120,options);
	World.add(world,box2);

	
	box3=Bodies.rectangle(width/2+60,height-90,10,120,options);
	World.add(world,box3);


	packageBody = Bodies.rectangle(width/2 , 200 , 40 , 40 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red");
  rectMode(CENTER)
  rect(box1.position.x,box1.position.y,120,10);
  rect(box2.position.x,box2.position.y,10,120);
  rect(box3.position.x,box3.position.y,10,120);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



