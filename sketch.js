var factCard1, factCard1Img, factCard2Img, factCard3Img, factCard4Img, factCard5Img, factCard6Img;
var trueButton, falseButton, skip
var rand;
var score = 0;

function preload(){
factCard1Img = loadImage("images/false1.png");
factCard2Img = loadImage("images/false2.png");
factCard3Img = loadImage("images/false3.png");
factCard4Img = loadImage("images/false4.png");
factCard5Img = loadImage("images/false5.png");
factCard6Img = loadImage("images/false6.png");
}

function setup() {
  createCanvas(1300,800);
  factCard1 = createSprite(650, 400);
  factCard1.addImage(factCard1Img);
  factCard1.scale = 0.7;
  trueButton = createButton("True");
  falseButton = createButton("False");
  skip = createButton("Skip this card");

}

function draw() {
  background(0);  
  noStroke();
    textSize(25);
    fill("white");
    text("Use the correct buttons to categorize the fact cards", 300, 50);
    textSize(20);
    fill("white");
    text("score:"+score, 1150, 50);

    trueButton.position(400, 400);
    falseButton.position(860, 400);
    skip.position(650, 700);

    trueButton.mousePressed(function(){
    	rand = Math.round(random(1,5));
    	displayRandomImage();
    });

    falseButton.mousePressed(function(){
    	rand = Math.round(random(1,5));
    	displayRandomImage();
    });

    skip.mousePressed(function(){
    	rand = Math.round(random(1,5));
    	displayRandomImage();
    });

  
  drawSprites();
}

function displayRandomImage(){

  

	
    switch(rand) {
      case 1: factCard1.addImage(factCard2Img);
      factCard1.scale = 0.7;
              break;
      case 2: factCard1.addImage(factCard3Img);
      factCard1.scale = 0.7;
              break;
      case 3: factCard1.addImage(factCard4Img);
      factCard1.scale = 0.7;
              break;
      case 4: factCard1.addImage(factCard5Img);
      factCard1.scale = 0.7;
              break;
      case 5: factCard1.addImage(factCard6Img);
      factCard1.scale = 0.7;
              break;
      default: break;
    }
}