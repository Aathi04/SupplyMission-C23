var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftRect,rightRect,middleRect;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
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

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	var leftRect_options={
	isStatic: true
	}
	leftRect=createSprite(310,610,20,100,leftRect_options);
	leftRect.shapeColor="red";
	World.add(world,leftRect);

 
	var rightRect_options={
		isStatic: true
	}
	rightRect=createSprite(490,610,20,100,rightRect_options);
	rightRect.shapeColor="red";
	World.add(world,rightRect);

 
	var middleRect_options={
	 	isStatic: true
	}
	middleRect=createSprite(400,670,200,20,middleRect_options);
	middleRect.shapeColor="red"
	World.add(world, middleRect);

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



