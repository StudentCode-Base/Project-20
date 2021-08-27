var eat, drink, sleeping, gym, bath, bg

function preload() {
bg = loadImage("images/iss.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");
drink = loadAnimation("images/drink1.png","images/drink2.png");
sleeping = loadImage("images/sleep.png");
gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
bath = loadAnimation("images/bath1.png","images/bath2.png");
}

function setup() {
  createCanvas(800,400);
  sk = createSprite(400, 200, 50, 50);
  sk.addImage(sleeping);
  sk.scale = 0.1
}

function draw() {
  background(bg);  
  drawSprites();
  if(keyDown("UP_ARROW")){
    sk.addAnimation("eating", eat);
    sk.changeAnimation("eating");
  }

  if(keyDown("DOWN_ARROW")){
    sk.addAnimation("bathing", bath);
    sk.changeAnimation("bathing");
  }

  if(keyDown("RIGHT_ARROW")){
    sk.addAnimation("gym", gym);
    sk.changeAnimation("gym");
  }

  if(keyDown("LEFT_ARROW")){
    sk.addAnimation("drinking", drink);
    sk.changeAnimation("drinking");
  }


}
