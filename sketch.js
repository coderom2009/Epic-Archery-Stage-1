const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player
var computer
var playerBase
var computerBase

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   var p = random(450,height-300)
   var c = random(450,height-300)
   playerBase = new PlayerBase(300,p,180,150)
   player = new Player(285,p-153,50,180)
   computerBase = new ComputerBase(width-300,c,180,150)
   computer = new Computer(width-285,c-153,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display()
   computerBase.display()



   //display Player and computerplayer
   player.display()
   computer.display()


}
