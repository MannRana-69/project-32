const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ball;
var blower;
var blowermouth;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  
  blower = new Blower(400,300,200,40)
  blowermouth = new Blowermouth(550,250,150,150)
  ball = new Ball(550,150,30,30)

  button = createButton("click to blow");
  button.position(400,350);
  //button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  blower.show();
  blowermouth.show();
  ball.show();
  drawSprites();
}

function blow() {
    Matter.Body.applyForce(ball.body,{x: 0,y: 0},{x:0,y:0.005});
}