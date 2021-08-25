const World= Matter.World; //Earth
const Engine= Matter.Engine; //God
const Bodies=Matter.Bodies; //Object inside the earth

var engine,world;
var object1;

var object2,object3;

function setup() 
{
  engine=Engine.create();
  world=engine.world;

  createCanvas(400,400);
  var options=
  {
    isStatic:true
  }
  object1=Bodies.rectangle(300,300,400,400,options);
  World.add(world,object1);

  var options2=
  {
    isStatic:true
  }
  object2=Bodies.rectangle(200,200,50,50,options2);
  World.add(world,object2);

  var options3=
  {
    isStatic:true
  }
  object3=Bodies.rectangle(100,100,50,50,options3);
  World.add(world,object3);
}

function draw() 
{
  background("pink");  
  Engine.update(engine);
 
  rect(object1.position.x,object1.position.y,400,400);
  rect(object2.position.x,object2.position.y,50,50);
  rect(object3.position.x,object3.position.y,50,50);
}