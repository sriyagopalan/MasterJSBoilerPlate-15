const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball, trash;
var backgroundImg,ground;
var gameState = "Ground"

function preload(){
	backgroundImg = loadImage()
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, height, 1200, 20);
	trash = new Trash(400, 200, 60, 15);
	paper = new Paper(300, 200, 120, 13);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
    drawSprites();
	ground.display();
	trash.display();
	paper.display();
}

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85})
	}
}


