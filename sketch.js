//Narrate a short story
//sofi=PC and bear=NPC
//sofi,bear that are the characters !
//Goal-people to start taking more care of their pets and treat them well.
//Rules-
//balance
//adaptivity
//chance v/s skill and feedback

var back,backImg
var sofi, sofiImg;
var bear, hbear,abear,bearImg, hbearImg, abearImg;
var Start, Story, About,Rules;

var gameState = "play";

function preload(){
  backImg=loadImage("garden.jpg")
  sofiImg=loadImage("girl-removebg-preview.png")
  bearImg=loadImage("bear.png")
}

function setup() {
  createCanvas(700, 700);
  back = createSprite(0,350,700,700) 
  back.addImage("background",backImg)
  back.scale=5;

  bear = createSprite(70, 620, 10, 10);
  bear.addImage("girl",bearImg);
  bear.scale = 0.3;

  sofi = createSprite(570, 580, 10, 10);
  sofi.addImage("girl",sofiImg);
  
  Start = createButton("START");
  Start.position(300, 350);
  
  Story = createButton("STORY");
  Story.position(230, 650);

  Rules = createButton("RULES");
  Rules.position(300, 650);

  About = createButton("ABOUT");
  About.position(370, 650);

  if(gameState === "play") {
      Start.visible = false;
    }
}

if(Story.mousePressed(button1)){
  Text("Hello!")
}

function draw() {
  background(220);
  

  
  drawSprites();
}