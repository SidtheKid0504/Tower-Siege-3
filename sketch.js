const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand;
var block, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, bock27;
var ball, polygon_img;
var slingshot;
var score = 0;

function preload(){
  polygon_img=loadImage("sprites/polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 380, 800, 5);
  stand = new Ground(500, 200, 300, 20);

  block = new Box(500, 180, 30, 30);
  block2 = new Box(470, 180, 30, 30); 
  block3 = new Box(440, 180, 30, 30);
  block4 = new Box(410, 180, 30, 30);
  block5 = new Box(530, 180, 30, 30);
  block6 = new Box(560, 180, 30, 30)
  block7 = new Box(590, 180, 30, 30);
  block8 = new Box(425, 150, 30, 30);
  block9 = new Box(455, 150, 30, 30);
  block10 = new Box(485, 150, 30, 30);
  block11 = new Box(515, 150, 30, 30);
  block12 = new Box(545, 150, 30, 30);
  block13 = new Box(575, 150, 30, 30);
  block14 = new Box(440, 120, 30, 30);
  block15 = new Box(470, 120, 30, 30);
  block16 = new Box(500, 120, 30, 30);
  block17 = new Box(530, 120, 30, 30);
  block18 = new Box(560, 120, 30, 30);
  block19 = new Box(455, 90, 30, 30);
  block20 = new Box(485, 90, 30, 30);
  block21 = new Box(515, 90, 30, 30);
  block22 = new Box(545, 90, 30, 30);
  block23 = new Box(470, 60, 30, 30);
  block24 = new Box(500, 60, 30, 30);
  block25 = new Box(530, 60, 30, 30);
  block26 = new Box(485, 30, 30, 30);
  block27 = new Box(515, 30, 30, 30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new Slingshot(this.ball, {x:100,y:200});

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  stand.display();

  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  // block23.display();
  // block24.display();
  // block25.display();
  // block26.display();
  // block27.display();
  slingshot.display();

  block.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();

  textSize(25);
  fill("Green")
  text("Score: " + score, 600, 60)

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed () {

  if(keyCode === 32){
      slingshot.attach(this.ball);
  
    }
   
}
